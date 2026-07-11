import Image from "next/image";

import { StructuredData } from "./components/structured-data";
import { absoluteUrl, siteConfig } from "./lib/seo";

const navigation = [
  { label: "Tổng quan", href: "#tong-quan" },
  { label: "Tính năng", href: "#tinh-nang" },
  { label: "Hướng dẫn", href: "/huong-dan-su-dung" },
];

const features = [
  {
    title: "Lịch âm dễ theo dõi",
    description: "Xem ngày âm, ngày dương và các dịp lễ giỗ ngay trong cùng một lịch.",
    image: "/app-calendar.png",
    alt: "Màn hình lịch âm và danh sách lễ giỗ trong Sổ tay gia tiên",
    className: "product-feature product-feature-wide",
  },
  {
    title: "Lưu ngày quan trọng",
    description: "Thêm ngày giỗ, sinh thần, ngày lễ hoặc sự kiện riêng của gia đình.",
    image: "/app-event.png",
    alt: "Màn hình thêm sự kiện âm lịch trong Sổ tay gia tiên",
    className: "product-feature",
  },
  {
    title: "Kho văn khấn theo từng dịp",
    description: "Tìm bài khấn có sẵn hoặc tạo bài riêng phù hợp với nếp nhà.",
    image: "/app-prayers.png",
    alt: "Kho văn khấn được phân loại theo từng dịp lễ",
    className: "product-feature",
  },
];

const faqs = [
  {
    question: "Ứng dụng hiện có những tính năng nào?",
    answer:
      "Bạn có thể xem lịch âm, lưu lễ giỗ và sự kiện, duyệt kho văn khấn, tạo bài khấn riêng và nghe giọng đọc AI.",
  },
  {
    question: "Tôi có thể thêm ngày giỗ theo âm lịch không?",
    answer:
      "Có. Khi tạo sự kiện, bạn chọn ngày âm và ứng dụng sẽ đưa sự kiện vào lịch để theo dõi cho những năm sau.",
  },
  {
    question: "Tôi có thể chỉnh sửa văn khấn không?",
    answer:
      "Có. Bạn có thể chỉnh sửa bản dùng trên thiết bị hoặc tự tạo bài khấn riêng cho gia đình.",
  },
  {
    question: "Giọng đọc văn khấn hoạt động thế nào?",
    answer:
      "Trong màn hình chi tiết bài khấn, bạn có thể tạo và phát giọng đọc AI với nhịp đọc trang trọng, rõ ràng.",
  },
];

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/#webpage"),
      url: absoluteUrl("/"),
      name: siteConfig.title,
      description: siteConfig.description,
      inLanguage: "vi-VN",
    },
    {
      "@type": "SoftwareApplication",
      name: siteConfig.name,
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Android",
      description: siteConfig.description,
      url: absoluteUrl("/"),
      image: absoluteUrl("/app-home.png"),
      offers: { "@type": "Offer", price: "0", priceCurrency: "VND" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <main className="landing-shell">
      <StructuredData data={homeSchema} />

      <header className="landing-header">
        <a className="landing-brand" href="#tong-quan" aria-label="Sổ tay gia tiên, về đầu trang">
          <Image src="/logo.png" alt="" width={44} height={44} priority />
          <span>Sổ tay gia tiên</span>
        </a>
        <nav className="landing-nav" aria-label="Điều hướng chính">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="landing-button landing-button-primary landing-header-cta" href="/huong-dan-su-dung">
          Dùng thử ngay
        </a>
      </header>

      <section className="product-hero" id="tong-quan">
        <div className="product-hero-copy">
          <p className="product-kicker">Lịch âm và văn khấn trong một ứng dụng</p>
          <h1>Nhớ ngày lễ giỗ. An tâm mỗi dịp cúng.</h1>
          <p className="product-hero-summary">
            Theo dõi lịch âm, lưu ngày quan trọng và nghe văn khấn AI khi cần.
          </p>
          <div className="product-hero-actions">
            <a className="landing-button landing-button-primary" href="/huong-dan-su-dung">Dùng thử ngay</a>
            <a className="landing-button landing-button-secondary" href="#tinh-nang">Xem tính năng</a>
          </div>
        </div>

        <div className="product-hero-visual">
          <div className="app-shot app-shot-hero">
            <Image
              src="/app-home.png"
              alt="Trang chủ Sổ tay gia tiên hiển thị ngày âm và các lối vào nhanh"
              fill
              priority
              sizes="(max-width: 760px) 92vw, 52vw"
            />
          </div>
          <div className="hero-note" aria-hidden="true">
            <strong>Hôm nay</strong>
            <span>Ngày âm, việc sắp tới và bài khấn gợi ý</span>
          </div>
        </div>
      </section>

      <section className="product-proof" aria-label="Giá trị chính">
        <p>Được thiết kế cho nếp sinh hoạt của gia đình Việt</p>
        <div>
          <span>Lịch âm rõ ràng</span>
          <span>Nhắc lễ giỗ</span>
          <span>Văn khấn dễ tìm</span>
          <span>Giọng đọc AI</span>
        </div>
      </section>

      <section className="product-section" id="tinh-nang">
        <div className="product-section-heading">
          <h2>Mọi việc cần nhớ, nằm gọn trong một nơi.</h2>
          <p>Ứng dụng đi từ xem ngày đến chuẩn bị bài khấn, đúng theo việc bạn cần làm.</p>
        </div>
        <div className="product-feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className={feature.className}>
              <div className="product-feature-copy">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              <div className="app-shot product-feature-image">
                <Image src={feature.image} alt={feature.alt} fill sizes="(max-width: 760px) 92vw, 48vw" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="prayer-section">
        <div className="prayer-visual">
          <div className="app-shot prayer-shot">
            <Image
              src="/app-prayer-player.png"
              alt="Màn hình đọc văn khấn cùng thanh phát giọng đọc AI"
              fill
              sizes="(max-width: 760px) 92vw, 48vw"
            />
          </div>
        </div>
        <div className="prayer-copy">
          <h2>Khi cần, bài khấn đã ở ngay bên bạn.</h2>
          <p>
            Mở nội dung đầy đủ, điều chỉnh bản dùng trên thiết bị và nghe giọng đọc AI để giữ nhịp đọc trang trọng.
          </p>
          <a className="text-link" href="/huong-dan-su-dung">Xem cách sử dụng <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="product-section faq-section landing-faq" id="faq">
        <div className="product-section-heading product-section-heading-narrow">
          <h2>Câu hỏi thường gặp</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <details key={item.question} className="faq-item" open={index === 0}>
              <summary><span>{item.question}</span><span className="faq-plus" aria-hidden="true">+</span></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="landing-cta">
        <div>
          <h2>Bắt đầu từ ngày quan trọng gần nhất.</h2>
          <p>Mở hướng dẫn, thêm lễ giỗ đầu tiên và để Sổ tay gia tiên cùng bạn ghi nhớ.</p>
        </div>
        <a className="landing-button landing-button-light" href="/huong-dan-su-dung">Dùng thử ngay</a>
      </section>

      <footer className="landing-footer">
        <div className="footer-brand">
          <strong>Sổ tay gia tiên</strong>
          <p>Lịch âm, lễ giỗ và văn khấn dành cho gia đình Việt.</p>
        </div>
        <div className="footer-links">
          <a href="/dieu-khoan-bao-mat">Điều khoản sử dụng</a>
          <a href="/lien-he">Liên hệ</a>
          <a href="/huong-dan-su-dung">Hướng dẫn</a>
        </div>
        <p className="footer-copy">© 2026 Sổ tay gia tiên.</p>
      </footer>
    </main>
  );
}
