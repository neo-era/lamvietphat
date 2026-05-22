export type ProductCategory =
  | "DEN_DUONG_LED"
  | "DEN_PHA_LED"
  | "DEN_CONG_VIEN"
  | "TRU_DEN"
  | "TU_DIEU_KHIEN"
  | "HE_THONG_DIEU_KHIEN"
  | "DEN_TIN_HIEU"
  | "CAMERA_VMS"
  | "DEN_CANH_QUAN"

export const PRODUCT_CATEGORY_LABELS: Record<ProductCategory, string> = {
  DEN_DUONG_LED: "Đèn đường LED",
  DEN_PHA_LED: "Đèn pha LED",
  DEN_CONG_VIEN: "Đèn công viên LED",
  TRU_DEN: "Trụ đèn & Cần đèn",
  TU_DIEU_KHIEN: "Tủ điều khiển",
  HE_THONG_DIEU_KHIEN: "Hệ thống điều khiển",
  DEN_TIN_HIEU: "Đèn tín hiệu giao thông",
  CAMERA_VMS: "Camera & Bảng VMS",
  DEN_CANH_QUAN: "Đèn cảnh quan",
}

export type ProjectCategory =
  | "DEN_DUONG"
  | "TIN_HIEU_GIAO_THONG"
  | "CANH_QUAN"
  | "CAMERA_VMS"
  | "DIEN_NGOAI_VI"

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  DEN_DUONG: "Hệ thống đèn đường",
  TIN_HIEU_GIAO_THONG: "Tín hiệu giao thông",
  CANH_QUAN: "Chiếu sáng cảnh quan",
  CAMERA_VMS: "Camera / VMS",
  DIEN_NGOAI_VI: "Điện ngoại vi & Hạ tầng",
}

export type Spec = { label: string; value: string }

export interface Product {
  id: string
  slug: string
  name: string
  category: ProductCategory
  shortDesc: string
  description: string
  coverImage: string
  images: string[]
  specs: Spec[]
  tags: string[]
  featured: boolean
  published: boolean
  order: number
}

export interface Project {
  id: string
  slug: string
  title: string
  category: ProjectCategory
  client: string
  location: string
  province: string
  year: number
  contractValue?: number
  shortDesc: string
  description: string
  coverImage: string
  images: string[]
  featured: boolean
  published: boolean
  order: number
}

export interface Service {
  id: string
  title: string
  category: "thi-cong" | "tu-van" | "san-xuat"
  description: string
  icon: string
  image?: string
  published: boolean
  order: number
}

/* ─── PRODUCTS DATA ─── */
export const products: Product[] = [
  {
    id: "p1",
    slug: "den-duong-led-100w-lavipco",
    name: "Đèn đường LED 100W Lavipco",
    category: "DEN_DUONG_LED",
    shortDesc: "Đèn đường LED 100W tiêu chuẩn, IP65, tuổi thọ 50.000h, phù hợp đường phố đô thị và khu công nghiệp.",
    description: `Đèn đường LED 100W Lavipco là sản phẩm chiếu sáng đô thị chất lượng cao, sử dụng chip LED Bridgelux/CREE nhập khẩu chính hãng. Vỏ đèn bằng nhôm đúc áp lực cao cấp, kính cường lực chịu nhiệt, đạt tiêu chuẩn IP65 kháng bụi và chống nước hoàn toàn.\n\nĐặc biệt phù hợp cho:\n- Đường phố đô thị, khu dân cư\n- Khu công nghiệp, khu chế xuất\n- Đường quốc lộ, tỉnh lộ\n- Bãi đỗ xe, sân vận động ngoài trời\n\nSản phẩm được bảo hành 3 năm chính hãng, hỗ trợ kỹ thuật 24/7.`,
    coverImage: "/images/products/den-duong-led-100w.jpg",
    images: ["/images/products/den-duong-led-100w.jpg", "/images/products/den-duong-led-100w-2.jpg"],
    specs: [
      { label: "Công suất", value: "100W" },
      { label: "Quang thông", value: "13.000 lm" },
      { label: "Hiệu suất", value: "130 lm/W" },
      { label: "Nhiệt độ màu", value: "5.500K (Trắng trung tính)" },
      { label: "CRI", value: "> 70 Ra" },
      { label: "IP Rating", value: "IP65" },
      { label: "Tuổi thọ", value: "50.000 giờ" },
      { label: "Góc chiếu", value: "120°" },
      { label: "Nguồn điện", value: "AC 85–265V / 50-60Hz" },
      { label: "Trọng lượng", value: "6,5 kg" },
      { label: "Vật liệu vỏ", value: "Nhôm đúc áp lực" },
      { label: "Bảo hành", value: "3 năm" },
    ],
    tags: ["LED", "IP65", "100W", "đèn đường", "đô thị"],
    featured: true,
    published: true,
    order: 1,
  },
  {
    id: "p2",
    slug: "den-duong-led-150w-lavipco",
    name: "Đèn đường LED 150W Lavipco",
    category: "DEN_DUONG_LED",
    shortDesc: "Đèn đường LED 150W công suất cao, phù hợp quốc lộ, tỉnh lộ, khu công nghiệp lớn.",
    description: `Đèn đường LED 150W Lavipco được thiết kế cho các tuyến đường có yêu cầu độ chiếu sáng cao như quốc lộ, tỉnh lộ, và khu công nghiệp quy mô lớn. Driver LED tích hợp chống sét, tự động điều chỉnh công suất 0-10V hoặc DALI.\n\nTính năng nổi bật:\n- Driver chống sét 10kA theo tiêu chuẩn IEC 61643\n- Tản nhiệt bằng nhôm nguyên khối\n- Kết nối điều khiển thông minh (tùy chọn)\n- Tiết kiệm 70% so với đèn cao áp truyền thống`,
    coverImage: "/images/products/den-duong-led-150w.jpg",
    images: ["/images/products/den-duong-led-150w.jpg"],
    specs: [
      { label: "Công suất", value: "150W" },
      { label: "Quang thông", value: "19.500 lm" },
      { label: "Hiệu suất", value: "130 lm/W" },
      { label: "Nhiệt độ màu", value: "5.500K" },
      { label: "CRI", value: "> 70 Ra" },
      { label: "IP Rating", value: "IP66" },
      { label: "Tuổi thọ", value: "50.000 giờ" },
      { label: "Góc chiếu", value: "120°" },
      { label: "Nguồn điện", value: "AC 85–265V" },
      { label: "Trọng lượng", value: "9 kg" },
      { label: "Chống sét", value: "10kA (IEC 61643)" },
      { label: "Bảo hành", value: "3 năm" },
    ],
    tags: ["LED", "IP66", "150W", "quốc lộ", "tỉnh lộ"],
    featured: true,
    published: true,
    order: 2,
  },
  {
    id: "p3",
    slug: "den-duong-led-200w-lavipco",
    name: "Đèn đường LED 200W Lavipco",
    category: "DEN_DUONG_LED",
    shortDesc: "Đèn đường LED 200W siêu sáng, dùng cho xa lộ, cảng biển, sân vận động ngoài trời.",
    description: "Đèn đường LED 200W công suất lớn nhất trong dòng sản phẩm Lavipco. Sử dụng module LED modular có thể thay thế, tản nhiệt FinLED cắt CNC, hiệu suất ánh sáng 135 lm/W.",
    coverImage: "/images/products/den-duong-led-200w.jpg",
    images: ["/images/products/den-duong-led-200w.jpg"],
    specs: [
      { label: "Công suất", value: "200W" },
      { label: "Quang thông", value: "27.000 lm" },
      { label: "Hiệu suất", value: "135 lm/W" },
      { label: "Nhiệt độ màu", value: "5.500K" },
      { label: "IP Rating", value: "IP67" },
      { label: "Tuổi thọ", value: "50.000 giờ" },
      { label: "Nguồn điện", value: "AC 85–265V" },
      { label: "Trọng lượng", value: "12 kg" },
      { label: "Bảo hành", value: "3 năm" },
    ],
    tags: ["LED", "IP67", "200W", "xa lộ", "cảng biển"],
    featured: false,
    published: true,
    order: 3,
  },
  {
    id: "p4",
    slug: "den-duong-led-50w-lavipco",
    name: "Đèn đường LED 50W Lavipco",
    category: "DEN_DUONG_LED",
    shortDesc: "Đèn đường LED 50W nhỏ gọn, phù hợp hẻm, đường nội bộ, khu dân cư.",
    description: "Đèn đường LED 50W Lavipco — giải pháp chiếu sáng tiết kiệm cho đường hẻm, đường nội bộ khu dân cư. Thiết kế nhỏ gọn, lắp đặt đơn giản, bảo trì dễ dàng.",
    coverImage: "/images/products/den-duong-led-50w.jpg",
    images: ["/images/products/den-duong-led-50w.jpg"],
    specs: [
      { label: "Công suất", value: "50W" },
      { label: "Quang thông", value: "6.500 lm" },
      { label: "Hiệu suất", value: "130 lm/W" },
      { label: "Nhiệt độ màu", value: "5.500K" },
      { label: "IP Rating", value: "IP65" },
      { label: "Tuổi thọ", value: "50.000 giờ" },
      { label: "Nguồn điện", value: "AC 85–265V" },
      { label: "Trọng lượng", value: "3,5 kg" },
      { label: "Bảo hành", value: "3 năm" },
    ],
    tags: ["LED", "IP65", "50W", "hẻm", "khu dân cư"],
    featured: false,
    published: true,
    order: 4,
  },
  {
    id: "p5",
    slug: "den-pha-led-200w-lavipco",
    name: "Đèn pha LED 200W Lavipco",
    category: "DEN_PHA_LED",
    shortDesc: "Đèn pha LED 200W góc chiếu linh hoạt, dùng chiếu sáng sân bãi, kho xưởng, công trình.",
    description: "Đèn pha LED 200W Lavipco với góc chiếu 15°/30°/45°/60°/90°/120° (chọn theo yêu cầu). Vỏ đúc nhôm ADC12, kính cường lực 5mm, roăn silicon kép chống ẩm. Phù hợp chiếu sáng sân bãi công nghiệp, kho xưởng, tòa nhà, cầu đường.",
    coverImage: "/images/products/den-pha-led-200w.jpg",
    images: ["/images/products/den-pha-led-200w.jpg"],
    specs: [
      { label: "Công suất", value: "200W" },
      { label: "Quang thông", value: "20.000 lm" },
      { label: "Nhiệt độ màu", value: "6.000K (Trắng lạnh)" },
      { label: "Góc chiếu", value: "15° – 120° (tùy chọn)" },
      { label: "IP Rating", value: "IP66" },
      { label: "Tuổi thọ", value: "50.000 giờ" },
      { label: "Nguồn điện", value: "AC 85–265V" },
      { label: "Trọng lượng", value: "8 kg" },
      { label: "Bảo hành", value: "3 năm" },
    ],
    tags: ["LED", "IP66", "200W", "đèn pha", "sân bãi"],
    featured: true,
    published: true,
    order: 5,
  },
  {
    id: "p6",
    slug: "den-cong-vien-led-30w",
    name: "Đèn công viên LED 30W",
    category: "DEN_CONG_VIEN",
    shortDesc: "Đèn công viên LED 30W thiết kế thanh lịch, dùng cho công viên, vỉa hè, khu đô thị.",
    description: "Đèn công viên LED 30W với thiết kế hiện đại, bền đẹp theo thời gian. Vỏ nhôm đúc phủ sơn tĩnh điện chống ăn mòn, phù hợp với khí hậu nhiệt đới ẩm. Ánh sáng ấm áp, tạo không gian thân thiện và an toàn.",
    coverImage: "/images/products/den-cong-vien-30w.jpg",
    images: ["/images/products/den-cong-vien-30w.jpg"],
    specs: [
      { label: "Công suất", value: "30W" },
      { label: "Quang thông", value: "3.600 lm" },
      { label: "Nhiệt độ màu", value: "3.000K (Trắng ấm)" },
      { label: "IP Rating", value: "IP65" },
      { label: "Tuổi thọ", value: "50.000 giờ" },
      { label: "Chiều cao lắp", value: "3,5 – 5m" },
      { label: "Bảo hành", value: "3 năm" },
    ],
    tags: ["LED", "IP65", "30W", "công viên", "vỉa hè"],
    featured: false,
    published: true,
    order: 6,
  },
  {
    id: "p7",
    slug: "tru-den-sat-manh-kem-nong-8m",
    name: "Trụ đèn sắt mạ kẽm nóng 8m",
    category: "TRU_DEN",
    shortDesc: "Trụ đèn sắt mạ kẽm nhúng nóng cao 8m, đường kính gốc 168mm, thành 3mm, tiêu chuẩn TCVN.",
    description: "Trụ đèn sắt mạ kẽm nhúng nóng 8m sản xuất tại xưởng Lavipco theo tiêu chuẩn TCVN 9258:2012. Thép ống đen đường kính gốc 168mm, đỉnh 76mm, thành 3mm, mạ kẽm nhúng nóng toàn bộ trong và ngoài (lớp kẽm ≥ 85 μm). Kèm cần đèn đơn hoặc đôi theo yêu cầu.",
    coverImage: "/images/products/tru-den-8m.jpg",
    images: ["/images/products/tru-den-8m.jpg"],
    specs: [
      { label: "Chiều cao", value: "8m" },
      { label: "Đường kính gốc", value: "168mm" },
      { label: "Đường kính đỉnh", value: "76mm" },
      { label: "Độ dày thành", value: "3mm" },
      { label: "Vật liệu", value: "Thép ống đen Q235" },
      { label: "Bề mặt", value: "Mạ kẽm nhúng nóng ≥ 85μm" },
      { label: "Cần đèn", value: "Đơn hoặc đôi (tùy chọn)" },
      { label: "Tiêu chuẩn", value: "TCVN 9258:2012" },
    ],
    tags: ["trụ đèn", "mạ kẽm", "8m", "sản xuất"],
    featured: false,
    published: true,
    order: 7,
  },
  {
    id: "p8",
    slug: "tu-dieu-khien-den-duong",
    name: "Tủ điều khiển đèn đường thông minh",
    category: "TU_DIEU_KHIEN",
    shortDesc: "Tủ điều khiển đèn đường tích hợp hẹn giờ, relay, đồng hồ đo điện, cầu dao MCB, chống sét.",
    description: "Tủ điều khiển đèn đường sản xuất tại xưởng Lavipco, thiết kế theo yêu cầu từng dự án. Tích hợp timer số/analog, relay công suất, đồng hồ đo điện 3 pha, MCB tổng + nhánh, chống sét đường nguồn. Vỏ tủ inox 304 hoặc thép sơn tĩnh điện, cấp bảo vệ IP54.",
    coverImage: "/images/products/tu-dieu-khien.jpg",
    images: ["/images/products/tu-dieu-khien.jpg"],
    specs: [
      { label: "Điện áp vào", value: "3P + N, AC 380V/220V" },
      { label: "Điện áp ra", value: "220V/380V theo nhánh" },
      { label: "Bảo vệ", value: "MCB tổng + MCB nhánh" },
      { label: "Hẹn giờ", value: "Timer số + Quang trở" },
      { label: "Đo lường", value: "Đồng hồ 3 pha (V, A, kWh)" },
      { label: "Chống sét", value: "SPD Classe II" },
      { label: "Vỏ tủ", value: "Inox 304 / Thép sơn tĩnh điện" },
      { label: "Cấp bảo vệ", value: "IP54" },
    ],
    tags: ["tủ điều khiển", "hẹn giờ", "đèn đường", "IP54"],
    featured: true,
    published: true,
    order: 8,
  },
]

/* ─── PROJECTS DATA ─── */
export const projects: Project[] = [
  {
    id: "pr1",
    slug: "chieu-sang-my-phuoc-3-binh-duong-2018",
    title: "Lắp đặt hệ thống chiếu sáng Mỹ Phước 3 — Bình Dương",
    category: "DEN_DUONG",
    client: "Tổng Công Ty Đầu Tư Và Phát Triển Công Nghiệp - CTCP (Becamex)",
    location: "Ấp 1, Ấp 5, Thới Hòa, TT Mỹ Phước 3, Bến Cát",
    province: "Bình Dương",
    year: 2018,
    contractValue: 3204932209,
    shortDesc: "Thi công lắp đặt hệ thống chiếu sáng nhiều tuyến đường thuộc khu đô thị Mỹ Phước 3, Bến Cát, Bình Dương.",
    description: `Dự án lắp đặt hệ thống chiếu sáng công cộng cho các tuyến đường thuộc khu đô thị Mỹ Phước 3, huyện Bến Cát, tỉnh Bình Dương. Hạng mục thi công bao gồm:\n\n- Đường DE6 đoạn từ NE2 đến NE6\n- Đường DE4 đoạn từ NE2 đến NI18\n- Đường DE5 đoạn từ NE2 đến NI18\n- Đường NE4A, NE4, NE3 (Ấp 5 Mỹ Phước 3)\n- Đường DE4 đoạn từ NE8 đến XE1 (Thới Hòa)\n\nCông việc bao gồm: đào mương cáp, đổ móng trụ đèn, dựng trụ mạ kẽm, lắp đèn LED, đấu dây cáp ngầm, đấu tủ điều khiển, thử nghiệm và bàn giao.`,
    coverImage: "/images/projects/my-phuoc-3.jpg",
    images: ["/images/projects/my-phuoc-3.jpg", "/images/projects/my-phuoc-3-2.jpg"],
    featured: true,
    published: true,
    order: 1,
  },
  {
    id: "pr2",
    slug: "chieu-sang-phu-quoc-kien-giang-2017",
    title: "Mở rộng HTCS Bãi Vòng — Sân Bay Phú Quốc",
    category: "DEN_DUONG",
    client: "Công ty TNHH TM DV ĐTXD Bảo Ngọc",
    location: "Xã Dương Tơ – Huyện Phú Quốc",
    province: "Kiên Giang",
    year: 2017,
    contractValue: 2472713100,
    shortDesc: "Thi công lắp đặt hệ thống chiếu sáng công cộng từ ngã 3 Bãi Vòng đến ngã 3 Sân Bay Phú Quốc (Gói thầu 05).",
    description: `Dự án mở rộng hệ thống chiếu sáng công cộng tại đảo Phú Quốc, tỉnh Kiên Giang. Tuyến đường từ ngã 3 Bãi Vòng đến ngã 3 Sân Bay Phú Quốc phục vụ phát triển du lịch và giao thông đảo.\n\nHạng mục thi công:\n- Gói thầu 05: Thi công lắp đặt hệ thống chiếu sáng\n- Đào mương cáp, lắp đặt ống bảo vệ cáp\n- Dựng trụ đèn sắt mạ kẽm nóng\n- Lắp đèn đường LED công suất phù hợp\n- Đấu dây, lắp tủ điều khiển, thử nghiệm, nghiệm thu`,
    coverImage: "/images/projects/phu-quoc.jpg",
    images: ["/images/projects/phu-quoc.jpg"],
    featured: true,
    published: true,
    order: 2,
  },
  {
    id: "pr3",
    slug: "dien-ngoai-vi-su-doan-5-tay-ninh-2015",
    title: "Thi công điện ngoại vi — Sư Đoàn 5, Tây Ninh",
    category: "DIEN_NGOAI_VI",
    client: "Công ty TNHH TM XD và địa ốc Minh Quang",
    location: "Xã Thái Bình, Huyện Châu Thành",
    province: "Tây Ninh",
    year: 2015,
    contractValue: 1228548467,
    shortDesc: "Thi công điện ngoại vi (gói 11, gói 4, gói 3, gói 8, gói 2) cho công trình xây dựng các tiểu đoàn trực thuộc Sư Đoàn 5.",
    description: `Dự án thi công hệ thống điện ngoại vi cho công trình xây dựng các tiểu đoàn trực thuộc Sư Đoàn 5, Quân Khu 7. Bao gồm 5 gói thi công:\n\n- Gói 11 (d25): Điện ngoại vi khu vực D25\n- Gói 4 (c26): Điện ngoại vi khu vực C26\n- Gói 3 (d18): Điện ngoại vi khu vực D18\n- Gói 8 (d14): Điện ngoại vi khu vực D14\n- Gói 2 (nhà khách + C23): Điện ngoại vi nhà khách và C23\n\nCông việc bao gồm: lắp đặt trụ điện, dây điện trên không, hệ thống chiếu sáng, tủ điện phân phối và toàn bộ hạ tầng điện ngoại vi.`,
    coverImage: "/images/projects/tay-ninh.jpg",
    images: ["/images/projects/tay-ninh.jpg"],
    featured: false,
    published: true,
    order: 3,
  },
  {
    id: "pr4",
    slug: "thay-the-tru-htcs-binh-duong-moi-2017",
    title: "Thay thế trụ HTCS — Thành phố mới Bình Dương",
    category: "DEN_DUONG",
    client: "Tổng Công Ty Đầu Tư Và Phát Triển Công Nghiệp - TNHH MTV",
    location: "Thành phố mới Bình Dương",
    province: "Bình Dương",
    year: 2017,
    contractValue: 1035417900,
    shortDesc: "Thay thế và lắp đặt mới trụ hệ thống chiếu sáng các tuyến đường tại Thành phố mới Bình Dương.",
    description: `Dự án thay thế toàn bộ hệ thống trụ đèn và đèn chiếu sáng cũ tại các tuyến đường thuộc Thành phố mới Bình Dương (Bình Dương New City). Nâng cấp sang hệ thống đèn đường LED tiết kiệm năng lượng, trụ đèn mạ kẽm nóng tiêu chuẩn mới.\n\nCông việc:\n- Tháo dỡ hệ thống cũ, thu hồi vật liệu\n- Lắp đặt trụ đèn mạ kẽm nóng mới\n- Lắp đặt đèn đường LED công suất phù hợp\n- Đấu dây và kết nối tủ điều khiển\n- Nghiệm thu, bàn giao`,
    coverImage: "/images/projects/binh-duong-moi.jpg",
    images: ["/images/projects/binh-duong-moi.jpg"],
    featured: false,
    published: true,
    order: 4,
  },
  {
    id: "pr5",
    slug: "den-led-rgb-van-phuc-thu-duc-2016",
    title: "Đèn LED RGB hộp Mica — KDC Vạn Phúc, Q.Thủ Đức",
    category: "CANH_QUAN",
    client: "Công Ty Cổ Phần Đầu Tư Địa Ốc Vạn Phúc",
    location: "QL 13, P.Hiệp Bình Phước, Quận Thủ Đức",
    province: "TP.HCM",
    year: 2016,
    contractValue: 54661442,
    shortDesc: "Thi công thay thế đèn Led RGB trong hộp Mica cho khu dân cư Vạn Phúc, Quận Thủ Đức, TP.HCM.",
    description: `Dự án thi công thay thế hệ thống đèn LED RGB trong hộp Mica cho khu dân cư cao cấp Vạn Phúc, Quận Thủ Đức, TP.HCM. Hệ thống chiếu sáng cảnh quan tạo điểm nhấn thẩm mỹ cho khu đô thị.\n\nCông việc:\n- Tháo dỡ đèn cũ\n- Lắp đặt đèn LED RGB mới\n- Lập trình điều khiển màu sắc theo yêu cầu\n- Kiểm tra, thử nghiệm và bàn giao`,
    coverImage: "/images/projects/van-phuc.jpg",
    images: ["/images/projects/van-phuc.jpg"],
    featured: false,
    published: true,
    order: 5,
  },
  {
    id: "pr6",
    slug: "chieu-sang-tan-binh-tphcm-2023",
    title: "Cây xanh & chiếu sáng đường phố Q.Tân Bình — TP.HCM",
    category: "DEN_DUONG",
    client: "Ban Quản Lý Dự Án Đầu Tư Xây Dựng Q.Tân Bình",
    location: "Quận Tân Bình",
    province: "TP.HCM",
    year: 2023,
    contractValue: 2370000000,
    shortDesc: "Thi công hệ thống chiếu sáng và cây xanh đường phố tại Quận Tân Bình, TP.HCM.",
    description: `Dự án thi công cải tạo, nâng cấp hệ thống chiếu sáng và cây xanh đường phố tại Quận Tân Bình, TP.HCM. Sử dụng đèn đường LED thế hệ mới, tiết kiệm năng lượng, tăng mỹ quan đô thị.\n\nHạng mục:\n- Lắp đặt đèn đường LED công suất phù hợp từng tuyến\n- Lắp đặt trụ đèn trang trí phù hợp cảnh quan đô thị\n- Trồng cây xanh vỉa hè\n- Đấu nối tủ điều khiển\n- Nghiệm thu, bàn giao`,
    coverImage: "/images/projects/tan-binh.jpg",
    images: ["/images/projects/tan-binh.jpg"],
    featured: true,
    published: true,
    order: 6,
  },
]

/* ─── SERVICES DATA ─── */
export const services: Service[] = [
  {
    id: "s1",
    title: "Thi công hệ thống đèn đường",
    category: "thi-cong",
    description: "Thi công lắp đặt đèn đường LED, trụ đèn, cáp ngầm, tủ điều khiển theo tiêu chuẩn Bộ Xây dựng. Kinh nghiệm 10+ năm trên nhiều tỉnh thành toàn quốc.",
    icon: "Lightbulb",
    published: true,
    order: 1,
  },
  {
    id: "s2",
    title: "Thi công đèn tín hiệu giao thông",
    category: "thi-cong",
    description: "Lắp đặt, thi công hệ thống đèn tín hiệu giao thông tại các nút giao đô thị — đảm bảo an toàn giao thông, bền vững theo thời gian.",
    icon: "TrafficCone",
    published: true,
    order: 2,
  },
  {
    id: "s3",
    title: "Chiếu sáng kiến trúc & cảnh quan",
    category: "thi-cong",
    description: "Thi công chiếu sáng cảnh quan công viên, vỉa hè, khu đô thị. Thiết kế đèn đá, đèn gỗ và đèn trang trí theo yêu cầu.",
    icon: "Sparkles",
    published: true,
    order: 3,
  },
  {
    id: "s4",
    title: "Lắp đặt Camera & Bảng VMS",
    category: "thi-cong",
    description: "Thi công hệ thống camera giám sát giao thông, an ninh và bảng quang báo điện tử VMS phục vụ quản lý đô thị thông minh.",
    icon: "Camera",
    published: true,
    order: 4,
  },
  {
    id: "s5",
    title: "Tư vấn thiết kế hệ thống chiếu sáng",
    category: "tu-van",
    description: "Tư vấn thiết kế toàn bộ hệ thống chiếu sáng đường phố, chiếu sáng kiến trúc — tính toán quang học, lập hồ sơ kỹ thuật, dự toán chi tiết.",
    icon: "FileText",
    published: true,
    order: 5,
  },
  {
    id: "s6",
    title: "Tư vấn chiếu sáng thông minh",
    category: "tu-van",
    description: "Tư vấn và triển khai giải pháp Smart Lighting — điều khiển tập trung, giám sát từ xa, tự động điều chỉnh công suất, tiết kiệm chi phí vận hành.",
    icon: "Brain",
    published: true,
    order: 6,
  },
  {
    id: "s7",
    title: "Tư vấn giám sát thi công",
    category: "tu-van",
    description: "Dịch vụ giám sát thi công độc lập các dự án điện chiếu sáng — kiểm tra chất lượng vật tư, giám sát thi công, nghiệm thu và lập hồ sơ hoàn công.",
    icon: "ClipboardCheck",
    published: true,
    order: 7,
  },
  {
    id: "s8",
    title: "Đại lý đèn đường LED nhập khẩu",
    category: "san-xuat",
    description: "Đại lý chính thức cung cấp đèn đường LED, đèn pha LED, đèn công viên LED từ các nhà sản xuất uy tín quốc tế — bảo hành chính hãng, giá cạnh tranh.",
    icon: "Package",
    published: true,
    order: 8,
  },
  {
    id: "s9",
    title: "Sản xuất tủ điều khiển đèn đường",
    category: "san-xuat",
    description: "Thiết kế và sản xuất tủ điều khiển đèn đường, tủ điều khiển đèn tín hiệu giao thông theo yêu cầu — hẹn giờ, điều khiển từ xa, bảo vệ quá tải.",
    icon: "Server",
    published: true,
    order: 9,
  },
  {
    id: "s10",
    title: "Sản xuất trụ đèn trang trí",
    category: "san-xuat",
    description: "Gia công sản xuất trụ đèn trang trí bằng gang, nhôm đúc — kiểu dáng cổ điển và hiện đại. Trụ đèn sắt mạ kẽm nóng theo tiêu chuẩn TCVN.",
    icon: "Columns",
    published: true,
    order: 10,
  },
]

/* ─── COMPANY STATS ─── */
export const stats = [
  { value: "11+", label: "Năm kinh nghiệm" },
  { value: "50+", label: "Dự án hoàn thành" },
  { value: "15+", label: "Nhân sự chuyên môn" },
  { value: "10+", label: "Tỉnh thành thi công" },
]

/* ─── COMPANY INFO ─── */
export const companyInfo = {
  name: "Công ty TNHH Kỹ Nghệ Lâm Việt Phát",
  nameEn: "Lam Viet Phat Engineering Technology Company Limited",
  brand: "Lavipco",
  address: "63/23A, Liên Khu 16-18, P. Bình Trị Đông, Q. Bình Tân, TP.HCM",
  phone: "0989 725 507",
  hotline: "0932 733 427",
  email: "lavipco.co@gmail.com",
  taxCode: "1101748509",
  bank: "96968686868 — ACB, CN Châu Văn Liêm, Q.5, TP.HCM",
  director: "Nguyễn Kim Thúy Quỳnh",
  founded: "22/05/2014",
  staff: 15,
  tagline: "Tận tâm – Chính trực – Tối giản",
  description: "Lavipco chuyên tư vấn thiết kế, thi công lắp đặt hệ thống chiếu sáng đô thị, đèn tín hiệu giao thông và sản xuất thiết bị điện, chiếu sáng, tủ điều khiển thông minh.",
}

/* ─── TEAM ─── */
export const team = [
  { name: "Nguyễn Kim Thúy Quỳnh", role: "Giám đốc", dept: "Ban Giám đốc", exp: "" },
  { name: "Mai Trung Hiếu", role: "Phó Giám đốc", dept: "Ban Giám đốc", exp: "6 năm — Cử nhân QTKD" },
  { name: "Phạm Văn Út Hậu", role: "Trưởng phòng Kỹ thuật", dept: "P. Kỹ thuật - Dự án", exp: "15 năm — Kỹ sư Điện" },
  { name: "Nguyễn Văn Huy", role: "Phó phòng Kỹ thuật", dept: "P. Kỹ thuật - Dự án", exp: "15 năm — Kỹ sư Điện – Điện tử" },
  { name: "Lê Anh Văn", role: "Cán bộ Kỹ thuật", dept: "P. Kỹ thuật - Dự án", exp: "8 năm — Kỹ sư Điện – Điện tử" },
]

/* ─── TIMELINE ─── */
export const timeline = [
  { year: "2014", title: "Thành lập công ty", desc: "Công ty TNHH Kỹ Nghệ Lâm Việt Phát được thành lập ngày 22/05/2014 tại TP.HCM." },
  { year: "2015", title: "Dự án quân sự đầu tiên", desc: "Hoàn thành thi công điện ngoại vi cho các tiểu đoàn Sư Đoàn 5, Tây Ninh — giá trị 1,2 tỷ đồng." },
  { year: "2016", title: "Mở rộng lĩnh vực", desc: "Thi công đèn LED cảnh quan KDC Vạn Phúc, Quận Thủ Đức — bước đầu vào phân khúc chiếu sáng đô thị cao cấp." },
  { year: "2017", title: "Bước ra thị trường quốc gia", desc: "Hoàn thành 2 dự án lớn: HTCS Phú Quốc (2,47 tỷ) và thay thế trụ đèn TP mới Bình Dương (1,03 tỷ)." },
  { year: "2018", title: "Dự án lớn nhất", desc: "Hoàn thành chiếu sáng Mỹ Phước 3, Bến Cát, Bình Dương — dự án có giá trị 3,2 tỷ đồng." },
  { year: "2023+", title: "Phát triển bền vững", desc: "Tiếp tục thi công nhiều dự án lớn tại TP.HCM và các tỉnh, mở rộng mảng sản xuất thiết bị chiếu sáng." },
]
