import type { Metadata } from "next";

import { SiteFooter, SiteTopBar } from "../components/subpage-chrome";

export const metadata: Metadata = {
  title: "Hướng dẫn sử dụng - Sổ tay gia tiên",
  description:
    "Hướng dẫn sử dụng Sổ tay gia tiên để lập gia phả, quản lý ngày giỗ và kết nối dòng họ.",
};

const guideCards = [
  {
    icon: "⌘",
    title: "Lập Gia Phả",
    description: "Xây dựng cây gia phả chi tiết, kết nối các thế hệ.",
    items: [
      "Thêm thành viên mới.",
      "Liên kết các mối quan hệ huyết thống.",
      "Chỉnh sửa thông tin cá nhân.",
    ],
  },
  {
    icon: "◫",
    title: "Quản Lý Ngày Giỗ",
    description: "Không bao giờ quên những ngày kỷ niệm quan trọng.",
    items: [
      "Cài đặt nhắc nhở tự động.",
      "Đồng bộ lịch âm dương.",
      "Thêm ghi chú cho các nghi lễ.",
    ],
  },
  {
    icon: "✦",
    title: "Lưu Trữ Ký Ức",
    description: "Lưu giữ hình ảnh và những câu chuyện gia đình.",
    items: [
      "Tải lên hình ảnh và tài liệu.",
      "Viết lại những câu chuyện lịch sử.",
      "Gắn thẻ thành viên trong ảnh.",
    ],
  },
  {
    icon: "◈",
    title: "Kết Nối Dòng Họ",
    description: "Cùng nhau xây dựng và gìn giữ truyền thống.",
    items: [
      "Mời họ hàng cùng tham gia.",
      "Chia sẻ quyền quản lý gia phả.",
      "Trao đổi thông tin nội bộ.",
    ],
  },
];

export default function GuidePage() {
  return (
    <main className="subpage-shell">
      <SiteTopBar currentPath="/huong-dan-su-dung" />

      <div className="subpage-main guide-page">
        <section className="guide-hero">
          <h1>Hướng dẫn sử dụng</h1>
          <p>
            Chào mừng bạn đến với Sổ tay gia tiên. Dưới đây là hướng dẫn chi
            tiết để bạn có thể dễ dàng lưu giữ và truyền lại những giá trị
            truyền thống của gia đình.
          </p>
          <div className="guide-stamp">GIA TỘC</div>
        </section>

        <section className="guide-grid">
          {guideCards.map((card) => (
            <article key={card.title} className="guide-card">
              <div className="guide-card-heading">
                <span className="guide-icon" aria-hidden="true">
                  {card.icon}
                </span>
                <h2>{card.title}</h2>
              </div>
              <p>{card.description}</p>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="guide-support">
          <h3>Cần hỗ trợ thêm?</h3>
          <p>Đội ngũ của chúng tôi luôn sẵn sàng lắng nghe và giúp đỡ bạn.</p>
          <a className="button button-secondary" href="/lien-he">
            Trung Tâm Hỗ Trợ
          </a>
        </section>
      </div>

      <SiteFooter currentPath="/huong-dan-su-dung" />
    </main>
  );
}
