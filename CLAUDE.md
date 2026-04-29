# CLAUDE.md — Lavipco Website Project

---

## QUY TẮC BẮT BUỘC

> **Các quy tắc này có độ ưu tiên cao nhất — không được bỏ qua trong bất kỳ trường hợp nào.**

### 1. Screenshot & So sánh sau mỗi thay đổi lớn

Sau mỗi thay đổi lớn (hoàn thành một section, thay đổi layout, cập nhật design system), **bắt buộc**:

1. Chạy dev server (`npm run dev`)
2. Chụp screenshot trang hiện tại bằng Puppeteer hoặc `@playwright/test`
3. Đặt screenshot vào `screenshots/YYYY-MM-DD_<tên-thay-đổi>.png`
4. So sánh trực quan với `resend.com__ref=godly.png` (design reference)
5. Báo cáo điểm còn lệch so với design gốc trước khi tiếp tục

> Nếu không tự chụp được screenshot, yêu cầu user chụp và gửi lại để review.

### 2. Mobile First — Bắt buộc responsive

- **Viết CSS mobile trước**, rồi mới scale lên tablet/desktop (`md:`, `lg:`)
- Test ở các breakpoint: `375px` (iPhone SE), `390px` (iPhone 15), `768px` (iPad), `1280px` (Desktop)
- Không có horizontal scroll trên mobile
- Touch targets tối thiểu `44×44px`
- Font size tối thiểu `16px` trên mobile (tránh zoom tự động trên iOS)
- Navigation mobile: hamburger menu hoặc bottom nav — không được dùng desktop nav thu nhỏ
- Grid trên mobile: tối đa 1–2 cột, không nhét 3+ cột vào màn hình nhỏ

### 3. Scroll Animation — Bắt buộc cho mọi section

**Mọi section** đều phải có animation khi scroll vào viewport. Quy tắc cụ thể:

```tsx
// Pattern bắt buộc — dùng Framer Motion
// Mỗi section wrapper phải có:
<motion.div
  initial={{ opacity: 0, y: 32 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
>
```

- `once: true` — chỉ animate 1 lần khi scroll vào, không lặp lại khi scroll ngược
- `margin: "-80px"` — trigger sớm hơn một chút để animation kịp chạy
- Stagger children: nếu section có list item, delay `0.1s` mỗi item
- **Không** dùng animation quá mạnh (`y: 100px`, duration > 1s) — phải tinh tế
- Image trong section: `scale: 0.95 → 1` kết hợp với `opacity`
- Heading lớn: có thể thêm blur `filter: blur(4px) → blur(0)` để tạo chiều sâu

---

## Project Overview

Website giới thiệu doanh nghiệp cho **Công ty TNHH Kỹ Nghệ Lâm Việt Phát (Lavipco)**.

- Mục đích: Giới thiệu công ty, dịch vụ, sản phẩm, dự án đã thực hiện — nhắm đến khách hàng doanh nghiệp (B2B).
- Design phong cách: **Dark minimal / Collage-editorial** — lấy cảm hứng từ resend.com (nền đen, typography lớn, hiệu ứng tinh tế, layout đẳng cấp).
- Ngôn ngữ: Tiếng Việt chính, có thể bổ sung tiếng Anh sau.

---

## Company Information

| Trường | Giá trị |
|--------|---------|
| Tên đầy đủ | Công ty TNHH Kỹ Nghệ Lâm Việt Phát |
| Tên thương mại | **Lavipco** |
| Địa chỉ | 63/23A, Liên Khu 16-18, P.Bình Trị Đông, Q.Bình Tân, TP.HCM |
| Giám đốc | Nguyễn Kim Thúy Quỳnh |
| Nguồn hồ sơ | `Lavipco Company Profile 2025.pdf` |

> Bổ sung MST, SĐT, email, website hiện tại vào đây khi có.

---

## Tech Stack

### Frontend & Core
| Công nghệ | Lý do chọn |
|-----------|-----------|
| **Next.js 15** (App Router) | SSG/SSR tốt cho SEO, routing linh hoạt |
| **TypeScript** | Type safety, dễ maintain |
| **Tailwind CSS v4** | Utility-first, dễ dàng custom design system |
| **Framer Motion** | Animation mượt mà cho hero, section reveals |
| **next/font** + **Geist** | Typography sắc nét, không layout shift |
| **next/image** | Tối ưu ảnh tự động (WebP, lazy load) |
| **Vercel** (deploy) | Zero-config deploy, CDN toàn cầu |

### Admin Panel
| Công nghệ | Lý do chọn |
|-----------|-----------|
| **Auth.js v5** (NextAuth) | Xác thực admin, credentials provider |
| **Prisma ORM** | Type-safe database queries, migration tự động |
| **Supabase** (PostgreSQL) | Free tier hào phóng, realtime, storage tích hợp |
| **Supabase Storage** | Upload & lưu trữ ảnh dự án, tài liệu |
| **React Hook Form + Zod** | Form validation có type safety |
| **TanStack Table** | Bảng dữ liệu admin (sort, filter, pagination) |

---

## Design System

### Color Palette

```css
/* Nền & bề mặt */
--bg-base:        #0a0a0a   /* nền toàn trang */
--bg-surface:     #111111   /* card, section xen kẽ */
--bg-elevated:    #1a1a1a   /* modal, hover state */
--border:         #262626   /* đường viền tinh tế */

/* Text */
--text-primary:   #ffffff   /* tiêu đề chính */
--text-secondary: #a1a1aa   /* mô tả, sub-text */
--text-muted:     #52525b   /* placeholder, caption */

/* Accent — màu nhận diện Lavipco */
--accent:         #16a34a   /* xanh lá kỹ thuật (điều chỉnh theo brand) */
--accent-glow:    rgba(22,163,74,0.15)
```

> **Lưu ý:** Xác nhận màu accent với client — có thể là xanh lá (#16a34a), xanh dương (#2563eb), hoặc vàng kỹ thuật (#d97706). Cập nhật toàn bộ sau khi xác nhận.

### Typography

```css
font-family: 'Geist', 'Inter', sans-serif;

/* Scale */
--text-hero:   clamp(3rem, 8vw, 6rem)   /* headline trang chủ */
--text-h1:     clamp(2rem, 5vw, 3.75rem)
--text-h2:     clamp(1.5rem, 3vw, 2.25rem)
--text-body:   1rem / 1.7                /* line-height rộng cho dễ đọc */
--text-small:  0.875rem
```

### Spacing & Layout

- Max content width: `1280px`
- Section padding: `py-24 md:py-32`
- Grid: 12 cột, gap 24px
- Border radius: `8px` (card), `4px` (button)

### Motion Principles

- Reveal on scroll: `opacity: 0 → 1`, `translateY: 24px → 0`, duration 0.6s ease-out
- Stagger children: delay `0.1s` mỗi item
- Hover: scale `1.02`, transition `0.2s`
- Không dùng animation phô trương — mọi thứ phải tinh tế

---

## Site Architecture

```
/                   → Trang chủ
/ve-chung-toi       → Giới thiệu công ty
/dich-vu            → Dịch vụ & sản phẩm
/du-an              → Dự án đã thực hiện (portfolio)
/lien-he            → Liên hệ
```

### File Structure

```
lavipco-website/
├── app/
│   ├── layout.tsx                    # Root layout, font, metadata
│   ├── page.tsx                      # Trang chủ
│   ├── ve-chung-toi/page.tsx
│   ├── dich-vu/page.tsx
│   ├── du-an/
│   │   ├── page.tsx                  # Danh sách dự án
│   │   └── [slug]/page.tsx           # Chi tiết dự án
│   ├── lien-he/page.tsx
│   │
│   ├── admin/                        # ← ADMIN PANEL (protected)
│   │   ├── layout.tsx                # Admin layout: sidebar + header
│   │   ├── page.tsx                  # Dashboard tổng quan
│   │   ├── login/page.tsx            # Trang đăng nhập
│   │   ├── du-an/
│   │   │   ├── page.tsx              # Danh sách dự án
│   │   │   ├── them/page.tsx         # Thêm dự án mới
│   │   │   └── [id]/page.tsx         # Sửa dự án
│   │   ├── dich-vu/
│   │   │   ├── page.tsx              # Danh sách dịch vụ
│   │   │   ├── them/page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── lien-he/page.tsx          # Xem tin nhắn liên hệ
│   │   └── cai-dat/page.tsx          # Thông tin công ty, cài đặt chung
│   │
│   └── api/
│       ├── auth/[...nextauth]/       # Auth.js endpoints
│       ├── projects/route.ts         # GET, POST
│       ├── projects/[id]/route.ts    # GET, PUT, DELETE
│       ├── services/route.ts
│       ├── services/[id]/route.ts
│       ├── contact/route.ts          # Nhận form liên hệ
│       ├── upload/route.ts           # Upload ảnh lên Supabase Storage
│       └── settings/route.ts
│
├── components/
│   ├── ui/                           # Nguyên tử: Button, Badge, Card, Input, Modal
│   ├── layout/                       # Header, Footer, Nav (public)
│   ├── sections/                     # Hero, Stats, Services, Projects, CTA, Contact
│   └── admin/                        # Admin-specific components
│       ├── AdminSidebar.tsx
│       ├── AdminHeader.tsx
│       ├── DataTable.tsx             # TanStack Table wrapper
│       ├── ImageUpload.tsx           # Drag & drop upload
│       ├── RichTextEditor.tsx        # Mô tả dự án/dịch vụ
│       └── ConfirmDialog.tsx         # Xác nhận xóa
│
├── lib/
│   ├── db.ts                         # Prisma client singleton
│   ├── auth.ts                       # Auth.js config
│   ├── supabase.ts                   # Supabase client
│   ├── validations.ts                # Zod schemas
│   └── utils.ts                      # cn(), formatDate(), slugify()
│
├── prisma/
│   ├── schema.prisma                 # Database schema
│   └── seed.ts                       # Dữ liệu mẫu ban đầu
│
├── public/
│   ├── og-image.jpg
│   └── logo.svg
│
└── styles/
    └── globals.css
```

---

## Page Sections — Chi tiết

### Trang chủ (`/`)

1. **Hero** — Headline lớn + subtext + 2 CTA button (Xem dự án / Liên hệ). Có ambient glow effect phía sau.
2. **Stats Bar** — 4 số liệu nổi bật (năm thành lập, số dự án, km đường/khu vực phục vụ, v.v.)
3. **Services Overview** — Grid 3 cột, icon + tên dịch vụ + mô tả ngắn
4. **Featured Projects** — Bento grid / Mosaic layout, 3–4 dự án tiêu biểu
5. **Why Lavipco** — 3–4 điểm khác biệt với visual icon
6. **CTA Section** — "Bắt đầu hợp tác" với form liên hệ nhanh hoặc link đến /lien-he

### Giới thiệu (`/ve-chung-toi`)

1. **Company Hero** — Ảnh nền + tiêu đề + tagline
2. **Tầm nhìn & Sứ mệnh** — 2 cột text
3. **Lịch sử & Cột mốc** — Timeline vertical
4. **Sơ đồ tổ chức** — Ảnh hoặc component đơn giản
5. **Hồ sơ pháp lý** — Các giấy tờ, chứng chỉ (badge list)
6. **Đội ngũ** — Card nhân sự chính

### Dịch vụ (`/dich-vu`)

1. **Services Hero**
2. **Danh sách dịch vụ** — Accordion hoặc tab, mỗi dịch vụ có: tên, mô tả chi tiết, ảnh minh họa
3. **Quy trình làm việc** — Stepper 4–5 bước
4. **CTA** — Liên hệ tư vấn

### Dự án (`/du-an`)

1. **Projects Hero**
2. **Filter Bar** — Lọc theo danh mục/năm (nếu có)
3. **Project Grid** — Masonry hoặc 3-column grid, hover reveal info
4. **[slug]** — Chi tiết dự án: gallery, mô tả, quy mô, năm thực hiện, vị trí

### Liên hệ (`/lien-he`)

1. **Contact Hero**
2. **Form liên hệ** — Họ tên, SĐT, Email, Nội dung, Submit
3. **Thông tin liên hệ** — Địa chỉ, SĐT, Email, Bản đồ Google Maps embed

---

## Admin Panel — Chi tiết

### Xác thực (Auth.js v5)

- Dùng **Credentials Provider** — đăng nhập bằng username + password
- Không dùng OAuth (không cần Google/GitHub login cho admin nội bộ)
- Session lưu trong JWT cookie, hết hạn sau 8 giờ
- Middleware bảo vệ toàn bộ route `/admin/*` — redirect về `/admin/login` nếu chưa đăng nhập
- Chỉ cần **1 tài khoản admin** — không cần hệ thống user phức tạp

```typescript
// middleware.ts — bảo vệ admin routes
export { auth as middleware } from "@/lib/auth"
export const config = { matcher: ["/admin/:path*"] }
```

### Database Schema (Prisma)

```prisma
model Project {
  id          String   @id @default(cuid())
  slug        String   @unique
  title       String
  category    String
  location    String
  year        Int
  description String   @db.Text
  coverImage  String
  images      String[] // URLs từ Supabase Storage
  featured    Boolean  @default(false)
  published   Boolean  @default(true)
  order       Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Service {
  id          String   @id @default(cuid())
  title       String
  description String   @db.Text
  icon        String   // tên icon từ lucide-react
  image       String?
  published   Boolean  @default(true)
  order       Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model ContactSubmission {
  id        String   @id @default(cuid())
  name      String
  phone     String
  email     String
  message   String   @db.Text
  read      Boolean  @default(false)
  createdAt DateTime @default(now())
}

model Setting {
  key       String @id  // "company_phone", "company_email", v.v.
  value     String @db.Text
  updatedAt DateTime @updatedAt
}
```

### Admin Pages — Chức năng từng trang

#### `/admin` — Dashboard
- Số lượng dự án / dịch vụ đang publish
- Số tin nhắn liên hệ chưa đọc (badge đỏ)
- 5 tin nhắn mới nhất
- Shortcuts: Thêm dự án mới, Thêm dịch vụ mới

#### `/admin/du-an` — Quản lý dự án
- Bảng danh sách: Ảnh thumbnail, Tên, Danh mục, Năm, Nổi bật, Trạng thái, Hành động
- Filter: Danh mục, Năm, Trạng thái
- Nút: Thêm mới, Sửa, Xóa (có confirm dialog)
- Kéo thả để đổi thứ tự hiển thị (`order` field)

#### `/admin/du-an/them` và `/admin/du-an/[id]` — Form dự án
```
Thông tin cơ bản:
  - Tên dự án (*)
  - Slug (tự generate từ tên, có thể sửa)
  - Danh mục (*)
  - Địa điểm (*)
  - Năm thực hiện (*)

Nội dung:
  - Mô tả ngắn (textarea)
  - Mô tả chi tiết (rich text editor)

Hình ảnh:
  - Ảnh bìa (drag & drop upload → Supabase Storage)
  - Gallery (upload nhiều ảnh, kéo thả để sắp xếp)

Tùy chọn:
  - Hiển thị trên trang chủ (featured toggle)
  - Trạng thái (Draft / Published)
```

#### `/admin/dich-vu` — Quản lý dịch vụ
- Tương tự dự án nhưng đơn giản hơn
- Form: Tên, Mô tả, Icon (picker), Ảnh minh họa, Thứ tự

#### `/admin/lien-he` — Tin nhắn liên hệ
- Danh sách tin nhắn, mới nhất trên cùng
- Click vào xem chi tiết → tự động đánh dấu "đã đọc"
- Nút xóa tin nhắn cũ
- **Không có tính năng reply** (liên hệ qua điện thoại/email ngoài)

#### `/admin/cai-dat` — Cài đặt chung
- Thông tin công ty: SĐT, Email, Địa chỉ, MST
- Mạng xã hội: Facebook, Zalo, v.v.
- Google Maps embed URL
- Thông tin hero trang chủ (headline, subtext)

### Upload Ảnh

```typescript
// Quy trình upload ảnh
// 1. Client → POST /api/upload (FormData)
// 2. Server → upload lên Supabase Storage bucket "lavipco-media"
// 3. Server → trả về public URL
// 4. Client → lưu URL vào form field

// Giới hạn:
// - Tối đa 10MB / file
// - Chỉ chấp nhận: jpg, jpeg, png, webp
// - Tự động resize xuống max 2000px (dùng sharp)
```

### Admin UI Design

- Nền admin: `#0f0f0f` (tối hơn một chút so với public site)
- Sidebar: `#111111`, width `240px`, cố định bên trái
- Accent admin: giữ nguyên màu accent của brand
- Typography: nhỏ hơn public site, dùng size `sm` làm default
- Không dùng animation phức tạp trong admin — focus vào usability
- Table rows: hover `#1a1a1a`, selected `#1e2a1e` (accent tint)
- Form inputs: border `#333`, focus border accent, bg `#161616`

### Bảo mật Admin

- Route `/admin/*` chỉ accessible khi đã login (middleware)
- API routes `/api/*` kiểm tra session trước khi xử lý
- Upload ảnh: validate MIME type phía server (không tin client)
- Zod validate toàn bộ input trước khi ghi vào DB
- Rate limit form liên hệ public: 5 request / phút / IP
- **Không** expose Supabase service key ra client

---

## Content Data — Seed ban đầu

> Dữ liệu khởi tạo được seed vào DB qua `prisma/seed.ts`, sau đó admin cập nhật qua giao diện.

```typescript
// prisma/seed.ts — chạy 1 lần khi setup
// Tạo tài khoản admin mặc định
// Seed dịch vụ cơ bản từ hồ sơ năng lực
// Seed 2-3 dự án mẫu
```

**Tài khoản admin mặc định** (đổi ngay sau khi deploy lần đầu):
- Username: `admin`
- Password: `Lavipco@2025` (hash bằng bcrypt trước khi lưu)

---

## Development Conventions

### Code Style

- **Components**: PascalCase, 1 file per component, export default
- **Không dùng** `any` trong TypeScript
- **Không dùng** inline styles — chỉ dùng Tailwind class
- **Không thêm** comment giải thích "what" — chỉ comment khi lý do không hiển nhiên
- **Không tạo abstraction sớm** — viết thẳng trước, refactor khi có 3+ lần lặp

### Component Rules

```tsx
// Cấu trúc chuẩn của mỗi section component
type Props = { /* props rõ ràng, không dùng object chung chung */ }

export default function SectionName({ prop1, prop2 }: Props) {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* content */}
      </div>
    </section>
  )
}
```

### Tailwind Conventions

- Dark theme là default — không cần dark: prefix
- Responsive: `md:` cho tablet, `lg:` cho desktop
- Animation class: dùng `data-[inview=true]:` + CSS transition thay vì JS phức tạp

### Image Guidelines

- Mọi ảnh qua `next/image` với `sizes` prop
- Ảnh dự án: tối thiểu 1200×800px, đã crop và optimize trước khi đưa vào
- Format: WebP ưu tiên, fallback JPG
- Alt text: mô tả thực tế bằng tiếng Việt

---

## SEO & Metadata

```typescript
// app/layout.tsx
export const metadata = {
  title: { default: "Lavipco | Công ty TNHH Kỹ Nghệ Lâm Việt Phát", template: "%s | Lavipco" },
  description: "Lavipco — [mô tả ngắn về lĩnh vực hoạt động]",
  openGraph: { images: ["/og-image.jpg"] },
}
```

- Mỗi trang có `title` và `description` riêng
- Structured data (JSON-LD) cho trang chủ và trang liên hệ
- `sitemap.xml` và `robots.txt` tự động qua Next.js

---

## Performance Targets

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| CLS | < 0.1 |
| FID/INP | < 200ms |
| Lighthouse Score | ≥ 90 |

- Không import thư viện nặng khi có thể dùng CSS thuần
- Framer Motion: chỉ import component cần thiết (`motion/div`, không import toàn bộ)
- Font: dùng `display: 'swap'`, subset tiếng Việt

---

## Reference Assets

| File | Dùng cho |
|------|---------|
| `resend.com__ref=godly.png` | Design reference — dark minimal collage style |
| `Lavipco Company Profile 2025.pdf` | Nội dung: thông tin công ty, dịch vụ, dự án |
| `tai lieu hoc web.docx` | Tham khảo thêm nếu cần |

---

## Checklist Trước Khi Deploy

### Setup lần đầu
- [ ] Tạo project Supabase, lấy `DATABASE_URL` và `SUPABASE_SERVICE_KEY`
- [ ] Tạo Storage bucket `lavipco-media` (public read)
- [ ] Chạy `npx prisma migrate dev` để tạo bảng
- [ ] Chạy `npx prisma db seed` để seed dữ liệu ban đầu
- [ ] Đổi password admin mặc định ngay sau deploy đầu tiên

### Biến môi trường (`.env.local`)
```bash
DATABASE_URL=postgresql://...           # Supabase connection string
NEXTAUTH_SECRET=...                     # random 32+ ký tự
NEXTAUTH_URL=https://lavipco.com        # URL production
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_KEY=...                # service_role key (server only)
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

### Content & Design
- [ ] Xác nhận màu accent với client
- [ ] Logo SVG chính thức từ client
- [ ] Ảnh dự án thực tế (optimize xong, upload qua admin)
- [ ] Điền đầy đủ thông tin liên hệ qua `/admin/cai-dat`
- [ ] Seed đủ dự án và dịch vụ từ hồ sơ năng lực

### QA
- [ ] Test admin login / logout
- [ ] Test CRUD dự án: thêm, sửa, xóa, đổi thứ tự
- [ ] Test upload ảnh (jpg, png, webp, >10MB phải từ chối)
- [ ] Test form liên hệ → tin nhắn xuất hiện trong admin
- [ ] Test trên mobile (iPhone SE → iPhone 15 Pro Max)
- [ ] Test responsive admin panel trên tablet
- [ ] Lighthouse audit ≥ 90 (public pages)
- [ ] Google Search Console setup
- [ ] Domain & Vercel deploy
- [ ] HTTPS + custom domain trỏ đúng
