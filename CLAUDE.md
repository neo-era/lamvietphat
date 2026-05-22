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

Website giới thiệu doanh nghiệp + danh mục sản phẩm + báo giá online cho **Công ty TNHH Kỹ Nghệ Lâm Việt Phát (Lavipco)**.

- **Mục đích**: Giới thiệu công ty, dịch vụ thi công, danh mục sản phẩm (đèn đường LED, trụ đèn, tủ điều khiển…), dự án đã thực hiện, hỗ trợ yêu cầu báo giá B2B.
- **Khách hàng mục tiêu**: Chủ đầu tư, nhà thầu xây dựng, ban quản lý khu công nghiệp, chính quyền địa phương (B2B).
- **Design**: **Dark minimal / Collage-editorial** — lấy cảm hứng từ resend.com (nền đen, typography lớn, hiệu ứng tinh tế, layout đẳng cấp).
- **Mô hình bán hàng**: Không phải e-commerce checkout truyền thống — khách xem sản phẩm → nhấn "Yêu cầu báo giá" → gửi form → admin liên hệ lại.
- **Ngôn ngữ**: Tiếng Việt chính, có thể bổ sung tiếng Anh sau.

---

## Company Information

| Trường | Giá trị |
|--------|---------|
| Tên đầy đủ | Công ty TNHH Kỹ Nghệ Lâm Việt Phát |
| Tên quốc tế | Lam Viet Phat Engineering Technology Company Limited |
| Tên thương mại | **Lavipco** |
| Địa chỉ | 63/23A, Liên Khu 16-18, P. Bình Trị Đông, Q. Bình Tân, TP.HCM |
| Điện thoại | 0989 725 507 |
| Hotline | 0932 733 427 |
| Email | lavipco.co@gmail.com |
| Website cũ | https://neo-era.github.io/lavipco |
| Mã số thuế | 1101748509 |
| Số tài khoản | 96968686868 — Ngân hàng ACB, CN Châu Văn Liêm, Q.5, TP.HCM |
| Giám đốc | Nguyễn Kim Thúy Quỳnh |
| Thành lập | 22/05/2014 |
| Tổng nhân sự | 15 người |
| Phạm vi | Toàn quốc |
| Giá trị cốt lõi | **Tận tâm – Chính trực – Tối giản** |

---

## Lĩnh vực hoạt động

Lavipco hoạt động trong **3 mảng chính**:

### 1. Xây lắp & Thi công
- Thi công hệ thống đèn đường (trên quốc lộ, đô thị, khu công nghiệp)
- Thi công hệ thống đèn tín hiệu giao thông
- Thi công chiếu sáng kiến trúc, cảnh quan, công viên
- Thi công mương cáp, móng trụ, hạ tầng điện ngoại vi
- Lắp đặt camera giám sát giao thông & an ninh
- Lắp đặt bảng quang báo điện tử VMS

### 2. Tư vấn & Giám sát
- Tư vấn thiết kế hệ thống chiếu sáng đường phố
- Tư vấn giải pháp chiếu sáng thông minh (Smart Lighting)
- Tư vấn thiết kế hệ thống đèn tín hiệu giao thông
- Tư vấn giám sát thi công các dự án điện chiếu sáng

### 3. Sản xuất & Thương mại
- Đại lý đèn đường LED, đèn pha LED, đèn công viên LED (nhãn hàng nước ngoài)
- Sản xuất & thương mại hệ thống điều khiển đèn đường
- Sản xuất tủ điều khiển đèn tín hiệu giao thông
- Sản xuất trụ đèn trang trí bằng gang, nhôm (kiểu dáng đa dạng)
- Trụ đèn sắt nhúng kẽm nóng, cần đèn các loại
- Thiết kế & chế tạo bộ đèn chất liệu đá, gỗ cho chiếu sáng cảnh quan

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
| **Supabase Storage** | Upload & lưu trữ ảnh sản phẩm, dự án |
| **React Hook Form + Zod** | Form validation có type safety |
| **TanStack Table** | Bảng dữ liệu admin (sort, filter, pagination) |
| **@dnd-kit/core** | Drag & drop sắp xếp thứ tự sản phẩm/dự án |

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
--accent:         #16a34a   /* xanh lá kỹ thuật */
--accent-hover:   #15803d
--accent-glow:    rgba(22,163,74,0.15)

/* Status */
--success:        #22c55e
--warning:        #f59e0b
--error:          #ef4444
```

> **Lưu ý:** Xác nhận màu accent với client — có thể là xanh lá (#16a34a), xanh dương (#2563eb), hoặc vàng kỹ thuật (#d97706). Cập nhật toàn bộ sau khi xác nhận.

### Typography

```css
font-family: 'Geist', 'Inter', sans-serif;

/* Scale */
--text-hero:   clamp(3rem, 8vw, 6rem)   /* headline trang chủ */
--text-h1:     clamp(2rem, 5vw, 3.75rem)
--text-h2:     clamp(1.5rem, 3vw, 2.25rem)
--text-body:   1rem / 1.7
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
/                       → Trang chủ
/ve-chung-toi           → Giới thiệu công ty
/linh-vuc               → Lĩnh vực thi công & dịch vụ
/san-pham               → Danh mục sản phẩm
/san-pham/[slug]        → Chi tiết sản phẩm + Yêu cầu báo giá
/du-an                  → Dự án đã thực hiện (portfolio)
/du-an/[slug]           → Chi tiết dự án
/lien-he                → Liên hệ & báo giá
```

### File Structure

```
lavipco-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                          # Trang chủ
│   ├── ve-chung-toi/page.tsx             # Giới thiệu công ty
│   ├── linh-vuc/page.tsx                 # Lĩnh vực thi công & dịch vụ
│   ├── san-pham/
│   │   ├── page.tsx                      # Danh mục sản phẩm (filter, search)
│   │   └── [slug]/page.tsx               # Chi tiết sản phẩm
│   ├── du-an/
│   │   ├── page.tsx                      # Danh sách dự án
│   │   └── [slug]/page.tsx               # Chi tiết dự án
│   ├── lien-he/page.tsx                  # Liên hệ
│   │
│   ├── admin/
│   │   ├── layout.tsx                    # Admin layout: sidebar + header
│   │   ├── page.tsx                      # Dashboard tổng quan
│   │   ├── login/page.tsx
│   │   ├── san-pham/
│   │   │   ├── page.tsx                  # Danh sách sản phẩm
│   │   │   ├── them/page.tsx             # Thêm sản phẩm mới
│   │   │   └── [id]/page.tsx             # Sửa sản phẩm
│   │   ├── du-an/
│   │   │   ├── page.tsx
│   │   │   ├── them/page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── dich-vu/
│   │   │   ├── page.tsx
│   │   │   ├── them/page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── bao-gia/page.tsx              # Yêu cầu báo giá từ khách
│   │   ├── lien-he/page.tsx              # Tin nhắn liên hệ chung
│   │   └── cai-dat/page.tsx              # Cài đặt chung
│   │
│   └── api/
│       ├── auth/[...nextauth]/
│       ├── products/route.ts             # GET, POST
│       ├── products/[id]/route.ts        # GET, PUT, DELETE
│       ├── projects/route.ts
│       ├── projects/[id]/route.ts
│       ├── services/route.ts
│       ├── services/[id]/route.ts
│       ├── quote/route.ts                # Nhận yêu cầu báo giá
│       ├── contact/route.ts              # Nhận form liên hệ chung
│       ├── upload/route.ts
│       └── settings/route.ts
│
├── components/
│   ├── ui/                               # Button, Badge, Card, Input, Modal, Tabs, Select
│   ├── layout/                           # Header, Footer, Nav, MobileMenu
│   ├── sections/
│   │   ├── home/                         # HeroSection, StatsBar, ServicesOverview, FeaturedProjects, ProductHighlight, WhyLavipco, CtaSection
│   │   ├── products/                     # ProductGrid, ProductCard, ProductFilter, ProductDetail, QuoteForm
│   │   ├── projects/                     # ProjectGrid, ProjectCard, ProjectFilter, ProjectDetail
│   │   ├── about/                        # CompanyHero, VisionMission, Timeline, OrgChart, LegalBadges, TeamCards
│   │   ├── services/                     # ServiceHero, ServiceList, WorkProcess, ServiceCta
│   │   └── contact/                      # ContactHero, ContactForm, ContactInfo
│   └── admin/
│       ├── AdminSidebar.tsx
│       ├── AdminHeader.tsx
│       ├── DataTable.tsx
│       ├── ImageUpload.tsx               # Drag & drop, preview, Supabase upload
│       ├── RichTextEditor.tsx
│       ├── SpecsEditor.tsx               # Editor key-value thông số kỹ thuật
│       ├── SortableList.tsx              # Drag & drop sắp xếp thứ tự (@dnd-kit)
│       └── ConfirmDialog.tsx
│
├── lib/
│   ├── db.ts
│   ├── auth.ts
│   ├── supabase.ts
│   ├── validations.ts
│   └── utils.ts                          # cn(), formatDate(), slugify(), formatPrice()
│
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
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

1. **Hero** — Headline lớn + subtext mô tả Lavipco + 2 CTA (Xem sản phẩm / Liên hệ báo giá). Có ambient glow effect xanh lá phía sau.
2. **Stats Bar** — 4 số liệu: Thành lập 2014, 15+ dự án lớn, Toàn quốc, 15 nhân sự chuyên nghiệp.
3. **Lĩnh vực** — 3 card lớn: Xây lắp thi công / Tư vấn giám sát / Sản xuất thương mại — mỗi card có icon + mô tả ngắn + link xem thêm.
4. **Sản phẩm nổi bật** — Bento grid 4 sản phẩm tiêu biểu (đèn đường LED, trụ đèn, tủ điều khiển) — hover reveal specs + nút báo giá.
5. **Dự án tiêu biểu** — Mosaic layout 3–4 dự án lớn (Phú Quốc, Bình Dương, Tây Ninh).
6. **Why Lavipco** — 4 điểm: Kinh nghiệm 10+ năm / Thiết bị hiện đại / Đội ngũ kỹ sư / Cam kết hậu mãi.
7. **CTA Section** — "Yêu cầu báo giá ngay" + form nhanh (tên, SĐT, nội dung yêu cầu).

### Giới thiệu (`/ve-chung-toi`)

1. **Company Hero** — Tagline + background ảnh thi công thực tế.
2. **Thư ngỏ Giám đốc** — Quote từ bà Nguyễn Kim Thúy Quỳnh, 2 cột layout.
3. **Tầm nhìn & Sứ mệnh** — "Sự hài lòng của cộng đồng là hạnh phúc của doanh nghiệp". Giá trị cốt lõi: Tận tâm – Chính trực – Tối giản.
4. **Thông tin công ty** — Bảng thông tin cơ bản (MST, địa chỉ, SĐT, email, tài khoản ngân hàng).
5. **Lịch sử & Cột mốc** — Timeline: 2014 (thành lập) → 2015 (dự án quân đội Tây Ninh) → 2016 (KDC Vạn Phúc) → 2017 (Phú Quốc, Bình Dương) → 2018 (Mỹ Phước 3) → ...
6. **Sơ đồ tổ chức** — Giám đốc → Phó GĐ / P. Tài chính / P. Kinh doanh / P. Kỹ thuật-Dự án / Xưởng SX / Đội thi công.
7. **Đội ngũ chủ chốt** — Card: Mai Trung Hiếu (Phó GĐ), Phạm Văn Út Hậu (TP Kỹ thuật), các cán bộ kỹ thuật.
8. **Hồ sơ pháp lý** — Badge list: Giấy ĐKDN, Báo cáo tài chính, Chứng chỉ năng lực.
9. **Thiết bị thi công** — Danh sách máy móc: xe tải, xe cẩu cao 12m, xe đào, máy trộn BT, máy đo điện trở, ampe kềm...

### Lĩnh vực thi công & Dịch vụ (`/linh-vuc`)

1. **Services Hero** — Headline về năng lực thi công.
2. **3 Mảng dịch vụ** — Tab hoặc accordion lớn:
   - **Xây lắp thi công**: đèn đường, tín hiệu giao thông, chiếu sáng kiến trúc/cảnh quan, camera, bảng VMS.
   - **Tư vấn & Giám sát**: thiết kế hệ thống, Smart Lighting, giám sát thi công.
   - **Sản xuất & Thương mại**: đại lý đèn LED, chế tạo trụ đèn gang/nhôm, tủ điều khiển.
3. **Quy trình làm việc** — Stepper 5 bước: Tiếp nhận yêu cầu → Khảo sát thiết kế → Báo giá → Thi công → Nghiệm thu & Bảo hành.
4. **Thiết bị & Năng lực** — Grid hiển thị danh sách máy móc thi công chính.
5. **CTA** — "Liên hệ tư vấn miễn phí".

### Sản phẩm (`/san-pham`)

1. **Products Hero** — Headline "Danh mục sản phẩm chiếu sáng".
2. **Filter Bar** — Lọc theo danh mục sản phẩm + tìm kiếm theo tên.
3. **Product Grid** — 3–4 cột (2 cột mobile), hover reveal thông số chính + nút "Xem chi tiết" + nút "Báo giá nhanh".
4. **[slug]** — Chi tiết sản phẩm:
   - Gallery ảnh sản phẩm (lightbox)
   - Thông số kỹ thuật dạng bảng
   - Mô tả chi tiết (rich text)
   - Sản phẩm liên quan
   - Form "Yêu cầu báo giá" (gắn sẵn tên sản phẩm)

### Dự án (`/du-an`)

1. **Projects Hero**
2. **Filter Bar** — Lọc theo lĩnh vực (Đèn đường / Tín hiệu giao thông / Cảnh quan) và tỉnh thành.
3. **Project Grid** — Masonry layout, hover reveal: tên dự án, giá trị, năm, địa điểm.
4. **[slug]** — Chi tiết dự án:
   - Gallery ảnh thi công
   - Thông tin: chủ đầu tư/nhà thầu chính, giá trị hợp đồng, năm thực hiện, địa điểm, hạng mục
   - Mô tả chi tiết
   - Dự án cùng lĩnh vực

### Liên hệ (`/lien-he`)

1. **Contact Hero**
2. **Form liên hệ & báo giá** — Họ tên (*), SĐT (*), Email, Công ty/Tổ chức, Loại yêu cầu (Báo giá / Tư vấn / Hợp tác / Khác), Nội dung chi tiết, Submit.
3. **Thông tin liên hệ** — Địa chỉ, SĐT, Email, Google Maps embed khu vực Q.Bình Tân, TP.HCM.

---

## Database Schema (Prisma)

```prisma
model Product {
  id           String   @id @default(cuid())
  slug         String   @unique
  name         String
  category     ProductCategory
  shortDesc    String
  description  String   @db.Text
  coverImage   String
  images       String[]
  specs        Json     // [{ label: "Công suất", value: "100W" }, ...]
  tags         String[] // ["LED", "street-light", "IP65"]
  featured     Boolean  @default(false)
  published    Boolean  @default(true)
  order        Int      @default(0)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
  quoteRequests QuoteRequest[]
}

enum ProductCategory {
  DEN_DUONG_LED        // Đèn đường LED
  DEN_PHA_LED          // Đèn pha LED
  DEN_CONG_VIEN        // Đèn công viên LED
  TRU_DEN              // Trụ đèn trang trí, sắt nhúng kẽm
  TU_DIEU_KHIEN        // Tủ điều khiển đèn đường / tín hiệu
  HE_THONG_DIEU_KHIEN  // Bộ điều khiển hệ thống đèn đường
  DEN_TIN_HIEU         // Đèn tín hiệu giao thông
  CAMERA_VMS           // Camera giám sát, bảng VMS
  DEN_CANH_QUAN        // Đèn cảnh quan, đá, gỗ
}

model Project {
  id           String   @id @default(cuid())
  slug         String   @unique
  title        String
  category     ProjectCategory
  client       String   // Chủ đầu tư / Nhà thầu chính
  location     String
  province     String   // Tỉnh thành (dùng để filter)
  year         Int
  contractValue BigInt? // Giá trị hợp đồng (VND)
  shortDesc    String
  description  String   @db.Text
  coverImage   String
  images       String[]
  featured     Boolean  @default(false)
  published    Boolean  @default(true)
  order        Int      @default(0)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}

enum ProjectCategory {
  DEN_DUONG            // Hệ thống đèn đường
  TIN_HIEU_GIAO_THONG  // Tín hiệu giao thông
  CANH_QUAN            // Chiếu sáng cảnh quan, kiến trúc
  CAMERA_VMS           // Camera / VMS
  DIEN_NGOAI_VI        // Điện ngoại vi, hạ tầng
}

model Service {
  id          String   @id @default(cuid())
  title       String
  category    String   // "thi-cong" | "tu-van" | "san-xuat"
  description String   @db.Text
  icon        String
  image       String?
  published   Boolean  @default(true)
  order       Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model QuoteRequest {
  id          String    @id @default(cuid())
  name        String
  phone       String
  email       String?
  company     String?
  productId   String?
  productName String?   // tên sản phẩm tại thời điểm gửi
  message     String    @db.Text
  status      QuoteStatus @default(NEW)
  read        Boolean   @default(false)
  createdAt   DateTime  @default(now())
  product     Product?  @relation(fields: [productId], references: [id], onDelete: SetNull)
}

enum QuoteStatus {
  NEW        // Mới
  PROCESSING // Đang xử lý
  QUOTED     // Đã báo giá
  CLOSED     // Đã đóng
}

model ContactSubmission {
  id          String   @id @default(cuid())
  name        String
  phone       String
  email       String?
  company     String?
  requestType String   // "bao-gia" | "tu-van" | "hop-tac" | "khac"
  message     String   @db.Text
  read        Boolean  @default(false)
  createdAt   DateTime @default(now())
}

model Setting {
  key       String   @id
  value     String   @db.Text
  updatedAt DateTime @updatedAt
}
```

---

## Admin Panel — Chi tiết

### Xác thực (Auth.js v5)

- **Credentials Provider** — đăng nhập bằng username + password
- Session JWT, hết hạn 8 giờ
- Middleware bảo vệ toàn bộ `/admin/*`

```typescript
export { auth as middleware } from "@/lib/auth"
export const config = { matcher: ["/admin/:path*"] }
```

### Admin Pages

#### `/admin` — Dashboard
- Tổng quan: số sản phẩm / dự án / dịch vụ đang publish
- Badge đỏ: yêu cầu báo giá chưa xử lý + tin nhắn liên hệ chưa đọc
- 5 yêu cầu báo giá mới nhất (tên, SĐT, sản phẩm)
- Shortcuts: Thêm sản phẩm, Thêm dự án

#### `/admin/san-pham` — Quản lý sản phẩm
- Bảng: Ảnh thumbnail, Tên, Danh mục, Nổi bật, Trạng thái, Hành động
- Filter: Danh mục, Trạng thái
- Kéo thả đổi thứ tự hiển thị
- Nút: Thêm, Sửa, Xóa (confirm dialog)

#### `/admin/san-pham/them` và `/admin/san-pham/[id]` — Form sản phẩm
```
Thông tin cơ bản:
  - Tên sản phẩm (*)
  - Slug (tự generate, có thể sửa)
  - Danh mục (*) — select enum ProductCategory
  - Mô tả ngắn (*)

Thông số kỹ thuật:
  - SpecsEditor: thêm/xóa/sắp xếp cặp label–value
  - Ví dụ: Công suất: 100W | IP Rating: IP65 | Nguồn: AC 85–265V
  - Tags: chip input (LED, IP65, street-light...)

Nội dung:
  - Mô tả chi tiết (rich text editor)

Hình ảnh:
  - Ảnh bìa (drag & drop → Supabase)
  - Gallery (upload nhiều ảnh, kéo thả sắp xếp)

Tùy chọn:
  - Sản phẩm nổi bật (toggle)
  - Trạng thái (Draft / Published)
```

#### `/admin/du-an` — Quản lý dự án
- Bảng: Ảnh, Tên, Danh mục, Tỉnh/Thành, Năm, Giá trị, Nổi bật, Trạng thái
- Filter: Danh mục, Tỉnh, Năm
- Form dự án:
  ```
  - Tên dự án (*), Slug
  - Danh mục (*), Tỉnh/Thành (*)
  - Chủ đầu tư / Nhà thầu chính (*)
  - Năm thực hiện (*), Giá trị hợp đồng (VND)
  - Mô tả ngắn, Mô tả chi tiết (rich text)
  - Ảnh bìa, Gallery
  - Nổi bật toggle, Draft/Published
  ```

#### `/admin/dich-vu` — Quản lý dịch vụ
- Phân nhóm 3 mảng: Thi công / Tư vấn / Sản xuất
- Form: Tên, Nhóm, Mô tả, Icon (lucide picker), Ảnh, Thứ tự

#### `/admin/bao-gia` — Yêu cầu báo giá
- Bảng: Ngày, Tên khách, SĐT, Sản phẩm quan tâm, Trạng thái
- Filter: Trạng thái (NEW / PROCESSING / QUOTED / CLOSED)
- Click xem chi tiết → modal hiển thị đầy đủ thông tin
- Cập nhật trạng thái (dropdown)
- Ghi chú nội bộ
- Nút xóa yêu cầu cũ

#### `/admin/lien-he` — Tin nhắn liên hệ
- Danh sách, mới nhất trên cùng
- Click xem → đánh dấu đã đọc tự động
- Nút xóa

#### `/admin/cai-dat` — Cài đặt chung

```
Thông tin công ty (cập nhật hiển thị trên website):
  - Tên công ty, Địa chỉ, SĐT, Hotline, Email, MST
  - Số tài khoản ngân hàng

Nội dung Hero trang chủ:
  - Headline (đã có sẵn, admin có thể chỉnh)
  - Subtext
  - CTA Button 1 & 2 (label + link)

Mạng xã hội:
  - Facebook URL, Zalo, YouTube, LinkedIn

Bản đồ:
  - Google Maps embed URL

SEO mặc định:
  - Meta description trang chủ
  - OG Image URL
```

### Upload Ảnh

```typescript
// POST /api/upload (multipart/form-data)
// → Validate MIME type server-side (image/jpeg, image/png, image/webp)
// → Resize max 2000px (sharp)
// → Upload → Supabase Storage "lavipco-media"
// → Trả về { url: string }
// Giới hạn: 10MB / file
```

### Admin UI Design

- Background: `#0f0f0f`
- Sidebar: `#111111`, width `240px`, fixed left
- Table rows: hover `#1a1a1a`, selected `#1e2a1e`
- Form inputs: bg `#161616`, border `#333`, focus border accent
- Không dùng animation phức tạp — focus vào usability
- Badge trạng thái: `NEW` (accent), `PROCESSING` (warning), `QUOTED` (blue), `CLOSED` (muted)

### Bảo mật Admin

- `/admin/*` protected bởi middleware (redirect `/admin/login` nếu chưa login)
- Mọi `/api/*` kiểm tra session trước khi xử lý
- Upload: validate MIME type server-side, không tin client
- Zod validate toàn bộ input trước khi ghi DB
- Rate limit `/api/quote` và `/api/contact`: 5 req/phút/IP
- Không expose Supabase service key ra client

---

## Dữ liệu Seed ban đầu

```typescript
// prisma/seed.ts

// Tài khoản admin mặc định (đổi ngay sau deploy):
// username: "admin"  |  password: "Lavipco@2025" (bcrypt)

// Settings mặc định:
// company_name: "Công ty TNHH Kỹ Nghệ Lâm Việt Phát"
// company_phone: "0989725507"
// company_hotline: "0932733427"
// company_email: "lavipco.co@gmail.com"
// company_address: "63/23A, Liên Khu 16-18, P.Bình Trị Đông, Q.Bình Tân, TP.HCM"
// company_tax: "1101748509"
// company_bank: "96968686868 - ACB, CN Châu Văn Liêm, Q.5, TP.HCM"

// Services seed (3 mảng):
// → Thi công hệ thống đèn đường
// → Thi công đèn tín hiệu giao thông
// → Chiếu sáng kiến trúc & cảnh quan
// → Tư vấn thiết kế hệ thống chiếu sáng
// → Tư vấn Smart Lighting
// → Đại lý đèn đường LED (nhãn hàng nước ngoài)
// → Sản xuất trụ đèn trang trí gang/nhôm
// → Sản xuất tủ điều khiển đèn tín hiệu

// Projects seed (từ hồ sơ năng lực):
// 1. Điện ngoại vi Sư Đoàn 5 - Tây Ninh (2015) - 1.228.548.467đ
// 2. Thay thế trụ HTCS TP Mới Bình Dương (2017) - 1.035.417.900đ
// 3. Đèn LED RGB KDC Vạn Phúc, Q.Thủ Đức (2016) - 54.661.442đ
// 4. Chiếu sáng Bãi Vòng - Sân Bay Phú Quốc (2017) - 2.472.713.100đ
// 5. Chiếu sáng Mỹ Phước 3, Bến Cát, Bình Dương (2018) - 3.204.932.209đ

// Products seed (từ LED catalog):
// → Đèn đường LED 30W / 50W / 80W / 100W / 150W / 200W
// → Đèn pha LED 100W / 200W
// → Đèn công viên LED
// → Trụ đèn sắt nhúng kẽm nóng (các chiều cao)
// → Trụ đèn trang trí gang/nhôm
// → Tủ điều khiển đèn đường
// → Bộ điều khiển hệ thống đèn đường
```

---

## Danh mục sản phẩm — Từ LED Catalog

> Nguồn: `Bản sao của Lavipco LED Street Light Catalog (1).pdf`

### Đèn đường LED
- Specs tiêu chuẩn cần có: Công suất (W), Quang thông (lm), Hiệu suất (lm/W), Nhiệt độ màu (K), CRI, IP Rating, Tuổi thọ (giờ), Góc chiếu, Nguồn (VAC), Trọng lượng (kg)
- Dải công suất thông thường: 30W, 50W, 80W, 100W, 120W, 150W, 200W
- IP Rating: IP65 (tối thiểu), IP66, IP67
- Driver: tích hợp, có thể điều chỉnh 0–10V hoặc DALI
- Vỏ: nhôm đúc áp lực, kính cường lực

### Trụ đèn
- Trụ thép mạ kẽm nhúng nóng: cao 6m, 8m, 10m, 12m
- Trụ trang trí gang/nhôm: nhiều kiểu dáng (cổ điển, hiện đại)
- Cần đèn đơn / đôi

### Tủ điều khiển
- Tủ điều khiển đèn đường (timer + điều khiển từ xa)
- Tủ điều khiển đèn tín hiệu giao thông
- Hệ thống điều khiển thông minh (Smart Control)

---

## Development Conventions

### Code Style

- **Components**: PascalCase, 1 file/component, export default
- **Không dùng** `any` trong TypeScript
- **Không dùng** inline styles — chỉ Tailwind class
- **Không comment** giải thích "what" — chỉ comment khi lý do không hiển nhiên
- **Không abstraction sớm** — viết thẳng, refactor khi 3+ lần lặp

### Component Rules

```tsx
type Props = { /* props rõ ràng */ }

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

- Dark theme là default — không cần `dark:` prefix
- Responsive: `md:` tablet, `lg:` desktop
- Không dùng animation class phức tạp — dùng Framer Motion

### Image Guidelines

- Mọi ảnh qua `next/image` với `sizes` prop
- Ảnh sản phẩm: nền trắng/xám, tỉ lệ 1:1 hoặc 4:3, min 800px
- Ảnh dự án: min 1200×800px, tỉ lệ 3:2 hoặc 16:9
- Format: WebP ưu tiên, fallback JPG
- Alt text: mô tả thực tế bằng tiếng Việt

---

## SEO & Metadata

```typescript
export const metadata = {
  title: { default: "Lavipco | Đèn đường LED & Hệ thống chiếu sáng", template: "%s | Lavipco" },
  description: "Lavipco — Chuyên thi công, tư vấn, cung cấp đèn đường LED, hệ thống chiếu sáng và tín hiệu giao thông. Kinh nghiệm 10+ năm, phạm vi toàn quốc.",
  keywords: ["đèn đường LED", "hệ thống chiếu sáng", "tín hiệu giao thông", "trụ đèn", "Lavipco"],
  openGraph: { images: ["/og-image.jpg"] },
}
```

- Mỗi trang có `title` + `description` riêng
- Trang sản phẩm: structured data `Product` (JSON-LD)
- Trang chủ + liên hệ: structured data `LocalBusiness` (JSON-LD)
- `sitemap.xml` + `robots.txt` tự động qua Next.js

---

## Performance Targets

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| CLS | < 0.1 |
| FID/INP | < 200ms |
| Lighthouse Score | ≥ 90 |

- Framer Motion: import từng component (`motion/div`), không import toàn bộ
- Font: `display: 'swap'`, subset tiếng Việt
- Ảnh sản phẩm: lazy load, placeholder blur

---

## Reference Assets

| File | Dùng cho |
|------|---------|
| `resend.com__ref=godly.png` | Design reference — dark minimal collage style |
| `Bản sao của Lavipco LED Street Light Catalog (1).pdf` | Danh mục sản phẩm đèn LED (specs, ảnh sản phẩm) |
| `Ho so nang luc.docx` | Thông tin công ty, đội ngũ, dự án đã thực hiện |
| `tai lieu hoc web.docx` | Tham khảo kỹ thuật |

---

## Checklist Trước Khi Deploy

### Setup lần đầu
- [ ] Tạo project Supabase, lấy `DATABASE_URL` + `SUPABASE_SERVICE_KEY`
- [ ] Tạo Storage bucket `lavipco-media` (public read)
- [ ] Chạy `npx prisma migrate dev`
- [ ] Chạy `npx prisma db seed` (admin account + dữ liệu mẫu)
- [ ] Đổi password admin ngay sau deploy đầu tiên

### Biến môi trường (`.env.local`)
```bash
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=...                   # random 32+ ký tự
NEXTAUTH_URL=https://lavipco.com
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_KEY=...              # service_role key (server only)
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

### Content & Design
- [ ] Xác nhận màu accent với client
- [ ] Logo SVG chính thức
- [ ] Ảnh sản phẩm thực tế (từ LED catalog PDF)
- [ ] Ảnh dự án thực tế (Phú Quốc, Bình Dương, Tây Ninh...)
- [ ] Seed đầy đủ dữ liệu qua admin

### QA
- [ ] Test admin login / logout / session expiry
- [ ] Test CRUD sản phẩm + upload ảnh + specs editor
- [ ] Test CRUD dự án + gallery
- [ ] Test form báo giá → xuất hiện trong admin + đổi trạng thái
- [ ] Test form liên hệ → xuất hiện trong admin
- [ ] Test filter sản phẩm theo danh mục
- [ ] Test filter dự án theo danh mục + tỉnh
- [ ] Test upload ảnh (jpg, png, webp; >10MB phải từ chối)
- [ ] Test trên mobile: iPhone SE → iPhone 15 Pro Max
- [ ] Test responsive admin trên tablet
- [ ] Lighthouse ≥ 90 (public pages)
- [ ] Google Search Console setup
- [ ] Domain + Vercel deploy + HTTPS
