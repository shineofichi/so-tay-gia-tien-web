import type { Metadata } from "next";
import Image from "next/image";

import { SiteFooter, SiteTopBar } from "../components/subpage-chrome";

export const metadata: Metadata = {
  title: "Liên hệ - Sổ tay gia tiên",
  description:
    "Liên hệ Sổ tay gia tiên để nhận hỗ trợ, góp ý và kết nối về hành trình lưu giữ di sản gia tộc.",
};

export default function ContactPage() {
  return (
    <main className="subpage-shell contact-shell">
      <SiteTopBar currentPath="/lien-he" showLogo />

      <div className="subpage-main contact-page">
        <section className="contact-hero">
          <Image
            src="/logo.png"
            alt="Biểu tượng Sổ tay gia tiên"
            width={96}
            height={96}
          />
          <h1>Liên Hệ</h1>
          <p>
            Chúng tôi luôn trân trọng mọi ý kiến đóng góp và sẵn sàng hỗ trợ
            bạn trên hành trình lưu giữ di sản gia tộc.
          </p>
        </section>

        <section className="contact-grid">
          <article className="contact-panel contact-info">
            <h2>Thông Tin Khác</h2>

            <div className="contact-item">
              <span aria-hidden="true">☎</span>
              <div>
                <h3>Đường dây nóng</h3>
                <a href="tel:+84386960463">+84 386 960 463</a>
              </div>
            </div>

            <div className="contact-item">
              <span aria-hidden="true">✉</span>
              <div>
                <h3>Thư điện tử</h3>
                <a href="mailto:lienhe@sotaygiatien.io.vn">
                  lienhe@sotaygiatien.io.vn
                </a>
              </div>
            </div>

            <div className="contact-social">
              <h3>Kết nối với chúng tôi</h3>
              <a href="/">◎</a>
            </div>
          </article>

          <article className="contact-panel contact-form-panel">
            <h2>Gửi Lời Nhắn</h2>

            <form className="contact-form">
              <div className="contact-form-grid">
                <label className="contact-field">
                  <span>Họ và tên</span>
                  <input placeholder="Vui lòng nhập họ tên" type="text" />
                </label>

                <label className="contact-field">
                  <span>Email</span>
                  <input placeholder="email@example.com" type="email" />
                </label>
              </div>

              <label className="contact-field">
                <span>Chủ đề</span>
                <input placeholder="Vấn đề bạn cần hỗ trợ" type="text" />
              </label>

              <label className="contact-field">
                <span>Lời nhắn</span>
                <textarea
                  placeholder="Xin vui lòng để lại chi tiết lời nhắn tại đây..."
                  rows={5}
                />
              </label>

              <div className="contact-submit">
                <button className="button button-primary" type="submit">
                  Gửi Thông Điệp
                </button>
              </div>
            </form>
          </article>
        </section>
      </div>

      <SiteFooter currentPath="/lien-he" />
    </main>
  );
}
