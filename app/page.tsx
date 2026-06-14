import Image from "next/image";

import { StructuredData } from "./components/structured-data";
import { absoluteUrl, siteConfig } from "./lib/seo";

const navigation = [
  { label: "Tổng quan", href: "#tong-quan" },
  { label: "Tính năng", href: "#tinh-nang" },
  { label: "Hướng dẫn", href: "/huong-dan-su-dung" },
];

const overviewCards = [
  {
    title: "Ngày giỗ luôn đúng nhịp",
    description:
      "Nhắc việc theo từng dịp để người giữ việc hương khói không phải ghi nhớ một mình.",
    tone: "story",
  },
  {
    title: "Gia phả dễ mở rộng",
    description:
      "Thêm thế hệ mới, chỉnh lại quan hệ và tiếp nối thông tin cũ trong cùng một cấu trúc rõ ràng.",
    tone: "outline",
  },
  {
    title: "Tư liệu ở cùng một nơi",
    description:
      "Ảnh, ghi chú và văn khấn không còn nằm rải rác giữa nhiều nhóm chat hay cuốn sổ riêng.",
    tone: "accent",
  },
];

const features = [
  {
    title: "Thông báo ngày giỗ và lễ",
    description:
      "Nhắc đúng dịp để cả nhà chủ động chuẩn bị, kể cả khi có nhiều mốc truyền thống cần theo dõi.",
    status: "Sẵn sàng",
    className: "feature-card feature-card-primary",
  },
  {
    title: "Đọc văn khấn tự động",
    description:
      "Chọn bài phù hợp theo từng dịp lễ và nghe lại ngay khi cần một nhịp đọc trang trọng, rõ ràng.",
    status: "Sẵn sàng",
    className: "feature-card feature-card-image",
  },
  {
    title: "Lập gia phả trực quan",
    description:
      "Thiết lập từng nhánh họ dễ nhìn hơn để con cháu sau này vẫn hiểu mạch gia tộc.",
    status: "Đang hoàn thiện",
    className: "feature-card feature-card-soft",
  },
  {
    title: "Không gian kết nối dòng họ",
    description:
      "Mời thêm người thân, chia sẻ tư liệu và thống nhất thông tin trong một nơi riêng tư hơn.",
    status: "Sắp mở",
    className: "feature-card feature-card-outline",
  },
];

const onboardingSteps = [
  {
    title: "Tạo hồ sơ gốc",
    description:
      "Bắt đầu từ người đại diện gia đình, sau đó thêm những thông tin nền tảng quan trọng nhất.",
  },
  {
    title: "Mở rộng các nhánh họ",
    description:
      "Bổ sung cha mẹ, anh chị em và thế hệ sau để sơ đồ gia phả hình thành một cách tự nhiên.",
  },
  {
    title: "Bật lịch nhắc cần thiết",
    description:
      "Chọn những dịp cần ghi nhớ để ứng dụng đồng hành cùng cả nhà trong suốt năm.",
  },
];

const faqs = [
  {
    question: "Dữ liệu của tôi có được bảo mật không?",
    answer:
      "Có. Thông tin gia phả, ngày giỗ và tư liệu gia đình được lưu trong một hệ thống chú trọng quyền riêng tư và kiểm soát truy cập.",
  },
  {
    question: "Làm thế nào để bắt đầu lập gia phả?",
    answer:
      "Bạn chỉ cần tạo hồ sơ đầu tiên, thêm cha mẹ hoặc con cháu, rồi mở rộng dần theo từng nhánh họ mà gia đình đang lưu giữ.",
  },
  {
    question: "Tôi có thể chia sẻ gia phả với người thân không?",
    answer:
      "Có. Bạn có thể mời thêm thành viên để cùng cập nhật hoặc chỉ xem theo quyền phù hợp với từng người.",
  },
  {
    question: "Ứng dụng có phù hợp cho gia đình mới bắt đầu không?",
    answer:
      "Phù hợp. Luồng sử dụng được thiết kế để bắt đầu từ những thông tin cơ bản rồi mở rộng dần khi gia đình đã sẵn sàng.",
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
      image: absoluteUrl("/hero-tree.jpg"),
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "VND",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <main className="page-shell">
      <StructuredData data={homeSchema} />
      <header className="site-header">
        <a className="brand" href="#tong-quan">
          <Image
            src="/logo.png"
            alt="Logo Sổ tay gia tiên"
            width={52}
            height={52}
            priority
          />
          <span>Sổ tay gia tiên</span>
        </a>

        <nav className="site-nav" aria-label="Điều hướng chính">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="button button-primary" href="#bat-dau">
          Bắt đầu ngay
        </a>
      </header>

      <section className="hero" id="tong-quan">
        <div className="hero-copy">
          <p className="hero-kicker">Gia phả số cho gia đình Việt</p>
          <h1>Gìn giữ cội nguồn bằng một cuốn sổ chung cho cả gia đình.</h1>
          <p className="hero-summary">
            Lập gia phả, nhắc ngày giỗ và lưu ký ức gia đình trong một nơi riêng
            tư, dễ tiếp nối.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#bat-dau">
              Bắt đầu ngay
            </a>
            <a className="button button-secondary" href="#tinh-nang">
              Xem tính năng
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-art">
            <Image
              src="/hero-tree.jpg"
              alt="Cây gia phả lấy cảm hứng từ kiến trúc truyền thống Việt Nam"
              fill
              loading="eager"
              priority
              sizes="(max-width: 900px) 100vw, 44vw"
            />
          </div>
          <div className="hero-frame" aria-hidden="true" />
        </div>
      </section>

      <section className="overview-section">
        <div className="overview-copy">
          <h2>Một nơi để cả nhà tiếp nối ký ức chung.</h2>
          <p>
            Thông tin ngày giỗ, quan hệ họ hàng và những ghi chép quan trọng
            thường nằm rải rác ở nhiều nơi. Sổ tay gia tiên gom lại thành một
            nhịp lưu giữ rõ ràng hơn, để mỗi thế hệ đều có thể nối tiếp.
          </p>
        </div>

        <div className="overview-grid">
          {overviewCards.map((item) => (
            <article
              key={item.title}
              className={`overview-card overview-card-${item.tone}`}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-spacious" id="tinh-nang">
        <div className="section-heading section-heading-left">
          <h2>Những gì đã sẵn sàng hôm nay</h2>
          <p>
            Trải nghiệm được chia theo đúng việc gia đình cần làm trước, rồi mở
            rộng dần sang những tính năng cộng tác sâu hơn.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className={feature.className}>
              <div className="feature-meta">
                <span className="feature-status">{feature.status}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="journey-section" id="bat-dau">
        <div className="journey-visual">
          <div className="journey-image">
            <Image
              src="/hero-tree.jpg"
              alt="Chi tiết thân cây tượng trưng cho các nhánh gia tộc tiếp nối"
              fill
              sizes="(max-width: 900px) 100vw, 38vw"
            />
          </div>
        </div>

        <div className="journey-copy">
          <h2>Bắt đầu từ một nhánh, rồi mở rộng dần theo ký ức của cả nhà.</h2>
          <div className="journey-list">
            {onboardingSteps.map((step, index) => (
              <article key={step.title} className="journey-item">
                <div className="journey-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading">
          <h2>Câu hỏi thường gặp</h2>
          <p>
            Những điều người dùng thường cần biết trước khi bắt đầu lưu giữ gia
            phả và lịch nhắc trong gia đình.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <details
              key={item.question}
              className="faq-item"
              open={index === 0}
            >
              <summary>
                <span>{item.question}</span>
                <span className="faq-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-panel">
          <div>
            <h2>Sẵn sàng lưu giữ lâu dài hơn?</h2>
            <p>
              Bắt đầu từ thông tin quan trọng nhất hôm nay để con cháu sau này
              luôn có một nơi để tìm lại.
            </p>
          </div>
          <a className="button button-primary" href="/huong-dan-su-dung">
            Xem hướng dẫn
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <strong>Sổ tay gia tiên</strong>
          <p>Gìn giữ cội nguồn, kết nối các thế hệ trong một nhịp lưu giữ rõ ràng.</p>
        </div>

        <div className="footer-links">
          <a href="/dieu-khoan-bao-mat">Điều khoản sử dụng</a>
          <a href="/lien-he">Liên hệ</a>
          <a href="/huong-dan-su-dung">Hướng dẫn</a>
        </div>

        <p className="footer-copy">
          © 2026 Sổ tay gia tiên. Gìn giữ cội nguồn, kết nối tương lai.
        </p>
      </footer>
    </main>
  );
}
