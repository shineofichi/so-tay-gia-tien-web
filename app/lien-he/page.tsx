import type { Metadata } from "next";

import { StructuredData } from "../components/structured-data";
import { SiteFooter, SiteTopBar } from "../components/subpage-chrome";
import { absoluteUrl, buildMetadata, siteConfig } from "../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Liên hệ",
  description:
    "Liên hệ Sổ tay gia tiên để nhận hỗ trợ, góp ý và tư vấn cách lập gia phả, quản lý ngày giỗ cho gia đình.",
  path: "/lien-he",
  keywords: [
    "liên hệ sổ tay gia tiên",
    "hỗ trợ lập gia phả",
    "tư vấn quản lý ngày giỗ",
  ],
});

const contactChannels = [
  {
    label: "Đường dây hỗ trợ",
    value: "+84 386 960 463",
    href: "tel:+84386960463",
    note: "Phù hợp khi gia đình cần trao đổi nhanh về cách bắt đầu.",
  },
  {
    label: "Thư điện tử",
    value: "lienhe@sotaygiatien.io.vn",
    href: "mailto:lienhe@sotaygiatien.io.vn",
    note: "Phù hợp cho góp ý chi tiết, phản hồi lỗi hoặc đề xuất tính năng.",
  },
];

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": absoluteUrl("/lien-he#webpage"),
      url: absoluteUrl("/lien-he"),
      name: `Liên hệ | ${siteConfig.name}`,
      description:
        "Trang liên hệ của Sổ tay gia tiên dành cho hỗ trợ, góp ý và tư vấn sử dụng.",
      inLanguage: "vi-VN",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Trang chủ",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Liên hệ",
          item: absoluteUrl("/lien-he"),
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": absoluteUrl("/lien-he#contact"),
      name: siteConfig.name,
      url: siteConfig.url,
      contactPoint: contactChannels.map((channel) => ({
        "@type": "ContactPoint",
        contactType: channel.label,
        telephone: channel.href.startsWith("tel:") ? channel.value : undefined,
        email: channel.href.startsWith("mailto:") ? channel.value : undefined,
        availableLanguage: ["vi"],
      })),
    },
  ],
};

export default function ContactPage() {
  return (
    <main className="subpage-shell">
      <StructuredData data={contactSchema} />
      <SiteTopBar currentPath="/lien-he" />

      <div className="subpage-main contact-page">
        <section className="subpage-hero contact-hero">
          <p className="subpage-kicker">Liên hệ</p>
          <h1>Một nơi để gia đình góp ý, hỏi đáp và bắt đầu đúng cách.</h1>
          <p>
            Mọi phản hồi đều giúp Sổ tay gia tiên tiến gần hơn tới một trải
            nghiệm đủ rõ ràng, đủ trang trọng và đủ dễ dùng cho nhiều thế hệ.
          </p>
        </section>

        <section className="contact-grid">
          <article className="contact-panel contact-info">
            <h2>Kênh hỗ trợ hiện có</h2>
            <p className="contact-intro">
              Chọn kênh phù hợp với nhu cầu của gia đình để nhận phản hồi thuận
              tiện hơn.
            </p>

            <div className="contact-channel-list">
              {contactChannels.map((channel) => (
                <div key={channel.label} className="contact-item">
                  <p className="contact-item-label">{channel.label}</p>
                  <a href={channel.href}>{channel.value}</a>
                  <p>{channel.note}</p>
                </div>
              ))}
            </div>

            <div className="contact-note">
              <h3>Góp ý hữu ích nhất khi có đủ ngữ cảnh</h3>
              <p>
                Nếu bạn gặp lỗi, hãy mô tả tình huống, thao tác trước đó và
                điều bạn mong muốn ứng dụng thực hiện.
              </p>
            </div>
          </article>

          <article className="contact-panel contact-form-panel">
            <h2>Gửi lời nhắn</h2>

            <form className="contact-form">
              <div className="contact-form-grid">
                <label className="contact-field">
                  <span>Họ và tên</span>
                  <input placeholder="Nguyễn Văn A" type="text" />
                </label>

                <label className="contact-field">
                  <span>Email</span>
                  <input placeholder="email@example.com" type="email" />
                </label>
              </div>

              <label className="contact-field">
                <span>Chủ đề</span>
                <input placeholder="Ví dụ: Cần hỗ trợ lập gia phả ban đầu" type="text" />
              </label>

              <label className="contact-field">
                <span>Lời nhắn</span>
                <textarea
                  placeholder="Hãy chia sẻ nhu cầu hoặc vấn đề bạn đang gặp phải."
                  rows={6}
                />
              </label>

              <div className="contact-submit">
                <button className="button button-primary" type="submit">
                  Gửi lời nhắn
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
