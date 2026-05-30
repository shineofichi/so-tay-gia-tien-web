import Image from "next/image";

const navigation = [
  { label: "Tổng quan", href: "#tong-quan" },
  { label: "Tính năng", href: "#tinh-nang" },
  { label: "Hướng dẫn", href: "/huong-dan-su-dung" },
];

const features = [
  {
    title: "Thông báo ngày giỗ & lễ",
    description:
      "Tự động nhắc các ngày kỷ niệm, giỗ chạp và nghi lễ truyền thống quan trọng của gia đình.",
    icon: "✢",
    status: "available",
  },
  {
    title: "Đọc văn khấn tự động",
    description:
      "Cung cấp sẵn các bài văn khấn chuẩn chỉnh cho từng dịp lễ, tết và hỗ trợ đọc tự động tiện lợi.",
    icon: "☷",
    status: "available",
  },
  {
    title: "Lập Gia Phả Thông Minh",
    description:
      "Trực quan và dễ dàng thiết lập cây gia phả, ghi chú chi tiết từng thế hệ với giao diện hiện đại.",
    icon: "⌘",
    status: "coming-soon",
  },
  {
    title: "Mạng Lưới Dòng Họ",
    description:
      "Không gian riêng tư để các thành viên trong gia đình và dòng họ giữ liên lạc, chia sẻ và gắn kết.",
    icon: "◫",
    status: "coming-soon",
  },
];

const faqs = [
  {
    question: "Dữ liệu của tôi có được bảo mật không?",
    answer:
      "Hoàn toàn bảo mật. Hệ thống sử dụng nhiều lớp bảo vệ để giữ an toàn cho thông tin gia phả, ngày giỗ và tư liệu riêng của gia đình.",
  },
  {
    question: "Làm thế nào để bắt đầu lập gia phả?",
    answer:
      "Bạn chỉ cần tạo tài khoản, nhập thông tin của bản thân rồi thêm cha mẹ, anh chị em và các thế hệ liên quan. Sơ đồ gia phả sẽ được hình thành trực quan theo từng nhánh.",
  },
  {
    question: "Tôi có thể chia sẻ gia phả với các thành viên khác không?",
    answer:
      "Có. Bạn có thể mời người thân cùng tham gia quản lý hoặc chỉ xem nội dung theo quyền phù hợp của từng thành viên.",
  },
  {
    question: "Ứng dụng có mất phí không?",
    answer:
      "Phiên bản cơ bản phù hợp để bắt đầu gìn giữ gia phả đã sẵn sàng cho mọi gia đình. Những tính năng mở rộng sẽ được bổ sung ở các gói nâng cao.",
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="#tong-quan">
          <Image
            src="/logo.png"
            alt="Logo Sổ tay gia tiên"
            width={56}
            height={56}
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

        <a className="button button-primary" href="#huong-dan">
          Bắt đầu ngay
        </a>
      </header>

      <section className="hero" id="tong-quan">
        <div className="hero-copy">
          <h1>Sổ tay gia tiên: Gìn giữ cội nguồn, kết nối tương lai</h1>
          <p>
            Ứng dụng giúp bạn lập gia phả, quản lý ngày giỗ và gắn kết các thế
            hệ trong một trải nghiệm trang trọng, dễ dùng và hiện đại.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#tinh-nang">
              Bắt đầu lập gia phả ngay
            </a>
          </div>
        </div>

        <div className="hero-art">
          <Image
            src="/hero-tree.jpg"
            alt="Minh họa cây gia phả với cảm hứng truyền thống Việt Nam"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 46vw"
          />
        </div>
      </section>

      <section className="section" id="tinh-nang">
        <div className="section-heading">
          <h2>Tính năng cốt lõi</h2>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={`feature-card ${feature.status}`}
            >
              <div className="feature-icon" aria-hidden="true">
                {feature.icon}
              </div>
              {feature.status === "coming-soon" ? (
                <span className="feature-badge">Đang phát triển</span>
              ) : null}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading">
          <h2>Câu hỏi thường gặp</h2>
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
                  ▾
                </span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <div>
            <strong>Sổ tay gia tiên</strong>
            <p>Gìn giữ cội nguồn, kết nối tương lai.</p>
          </div>
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
