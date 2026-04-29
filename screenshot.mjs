import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = 'file:///' + path.join(__dirname, 'index.html').replace(/\\/g, '/');

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
});

async function shot(viewport, suffix) {
  const page = await browser.newPage();
  await page.setViewport(viewport);
  await page.goto(file, { waitUntil: 'domcontentloaded', timeout: 20000 });

  // Force ALL .rev elements visible (do NOT add js-loaded so opacity:0 never applies)
  await page.evaluate(() => {
    // Remove js-loaded so CSS doesn't hide .rev elements
    document.body.classList.remove('js-loaded');
    // Also ensure all .rev get .on just in case
    document.querySelectorAll('.rev').forEach(el => el.classList.add('on'));
  });

  // Scroll through to load images / trigger any lazy content
  await page.evaluate(async () => {
    const delay = ms => new Promise(r => setTimeout(r, ms));
    for (let y = 0; y < document.body.scrollHeight; y += 400) {
      window.scrollTo(0, y);
      await delay(40);
    }
    window.scrollTo(0, 0);
  });

  await new Promise(r => setTimeout(r, 1000));

  // Hero viewport shot
  await page.screenshot({
    path: path.join(__dirname, `screenshots/${suffix}-hero.png`),
    fullPage: false
  });

  // Full page
  await page.screenshot({
    path: path.join(__dirname, `screenshots/${suffix}-full.png`),
    fullPage: true
  });

  await page.close();
}

await shot({ width: 1440, height: 900, deviceScaleFactor: 1.5 }, 'desktop');
await shot({ width: 390,  height: 844, deviceScaleFactor: 2   }, 'mobile');

await browser.close();
console.log('Done — screenshots/');
