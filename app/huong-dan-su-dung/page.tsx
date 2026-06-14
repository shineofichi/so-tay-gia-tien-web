import type { Metadata } from "next";

import { StructuredData } from "../components/structured-data";
import { SiteFooter, SiteTopBar } from "../components/subpage-chrome";
import { absoluteUrl, buildMetadata, siteConfig } from "../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Hướng dẫn sử dụng",
  description:
    "Hướng dẫn sử dụng Sổ tay gia tiên để lập gia phả, quản lý ngày giỗ, lưu tư liệu và kết nối dòng họ cho gia đình Việt.",
  path: "/huong-dan-su-dung",
  keywords: [
    "hướng dẫn sử dụng sổ tay gia tiên",
    "cách lập gia phả",
    "quản lý ngày giỗ",
  ],
});

const guideCards = [
  {
    label: "Khởi tạo",
    title: "Lập gia phả từ người đại diện",
    description:
      "Bắt đầu với hồ sơ gốc, sau đó nối dần cha mẹ, con cháu và những nhánh họ quan trọng.",
    items: [
      "Thêm thành viên mới theo từng thế hệ.",
      "Liên kết quan hệ huyết thống rõ ràng.",
      "Bổ sung ghi chú để người sau dễ tiếp nối.",
    ],
  },
  {
    label: "Nhắc việc",
    title: "Quản lý ngày giỗ và lịch lễ",
    description:
      "Thiết lập các mốc cần nhớ để gia đình luôn chủ động cho những dịp quan trọng.",
    items: [
      "Bật nhắc việc theo nhu cầu của gia đình.",
      "Theo dõi lịch âm dương thuận tiện hơn.",
      "Gắn thêm ghi chú cho từng dịp lễ.",
    ],
  },
  {
    label: "Tư liệu",
    title: "Lưu giữ ảnh và câu chuyện",
    description:
      "Những ký ức quý được đặt cùng gia phả để thế hệ sau hiểu rõ hơn về từng người thân.",
    items: [
      "Tải lên ảnh và tư liệu gia đình.",
      "Viết lại các câu chuyện quan trọng.",
      "Sắp xếp nội dung theo từng thành viên.",
    ],
  },
  {
    label: "Cộng tác",
    title: "Mời thêm người thân cùng cập nhật",
    description:
      "Không gian chung giúp gia đình đồng nhất thông tin mà vẫn giữ được sự riêng tư cần thiết.",
    items: [
      "Mời thêm người thân cùng tham gia.",
      "Phân quyền xem hoặc chỉnh sửa linh hoạt.",
      "Giữ luồng cập nhật gọn và nhất quán hơn.",
    ],
  },
];

const guideSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/huong-dan-su-dung#webpage"),
      url: absoluteUrl("/huong-dan-su-dung"),
      name: `Hướng dẫn sử dụng | ${siteConfig.name}`,
      description:
        "Hướng dẫn sử dụng Sổ tay gia tiên để lập gia phả, quản lý ngày giỗ, lưu tư liệu và kết nối dòng họ.",
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
          name: "Hướng dẫn sử dụng",
          item: absoluteUrl("/huong-dan-su-dung"),
        },
      ],
    },
    {
      "@type": "HowTo",
      name: "Cách bắt đầu với Sổ tay gia tiên",
      description:
        "Các bước cơ bản để lập gia phả, quản lý ngày giỗ và mời thêm người thân cùng sử dụng.",
      step: guideCards.map((card, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: card.title,
        text: `${card.description} ${card.items.join(" ")}`,
      })),
    },
  ],
};

export default function GuidePage() {
  return (
    <main className="subpage-shell">
      <StructuredData data={guideSchema} />
      <SiteTopBar currentPath="/huong-dan-su-dung" />

      <div className="subpage-main guide-page">
        <section className="subpage-hero">
          <p className="subpage-kicker">Hướng dẫn sử dụng</p>
          <h1>Bắt đầu từ những thông tin quen thuộc nhất của gia đình.</h1>
          <p>
            Luồng sử dụng được thiết kế để bạn nhập từ phần cốt lõi trước, rồi
            mở rộng dần sang lịch nhắc, tư liệu và cộng tác giữa các thế hệ.
          </p>
        </section>

        <section className="guide-grid">
          {guideCards.map((card) => (
            <article key={card.title} className="guide-card">
              <span className="guide-card-label">{card.label}</span>
              <h2>{card.title}</h2>
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
          <div>
            <h2>Cần hỗ trợ thêm?</h2>
            <p>
              Nếu gia đình cần tư vấn cách bắt đầu hoặc muốn góp ý thêm cho sản
              phẩm, đội ngũ luôn sẵn sàng lắng nghe.
            </p>
          </div>
          <a className="button button-primary" href="/lien-he">
            Liên hệ hỗ trợ
          </a>
        </section>
      </div>

      <SiteFooter currentPath="/huong-dan-su-dung" />
    </main>
  );
}
