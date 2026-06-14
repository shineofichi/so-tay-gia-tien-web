import type { Metadata } from "next";

import { StructuredData } from "../components/structured-data";
import { SiteFooter, SiteTopBar } from "../components/subpage-chrome";
import { absoluteUrl, buildMetadata, siteConfig } from "../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Chính sách quyền riêng tư",
  description:
    "Chính sách quyền riêng tư của Sổ tay gia tiên về thu thập, sử dụng, lưu trữ dữ liệu người dùng và quyền riêng tư của gia đình.",
  path: "/dieu-khoan-bao-mat",
  keywords: [
    "chính sách quyền riêng tư",
    "bảo mật dữ liệu gia phả",
    "quyền riêng tư sổ tay gia tiên",
  ],
});

type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

const privacySections: LegalSection[] = [
  {
    heading: "1. Phạm vi áp dụng",
    paragraphs: [
      "Chính sách này áp dụng cho người dùng cài đặt và sử dụng ứng dụng Sổ Tay Gia Tiên trên thiết bị Android và các nền tảng được ứng dụng hỗ trợ.",
    ],
  },
  {
    heading: "2. Thông tin chúng tôi có thể thu thập",
    paragraphs: [
      "Tùy theo cách bạn sử dụng ứng dụng, chúng tôi có thể thu thập các nhóm thông tin sau.",
    ],
    bullets: [
      "Thông tin tài khoản và định danh: thông tin đăng nhập Google, mã định danh tài khoản Firebase/Google, họ tên, email và ảnh đại diện tài khoản Google.",
      "Thông tin hồ sơ do bạn cung cấp: họ và tên, địa chỉ hiện tại, quê quán/gốc tích, số điện thoại nếu bạn chủ động nhập và các thông tin hồ sơ khác mà bạn cập nhật trong ứng dụng.",
      "Dữ liệu nội dung do bạn tạo: dữ liệu sự kiện gia tiên như ngày giỗ, sinh thần, lễ tiết, tên sự kiện, mối quan hệ, địa điểm, ngày âm lịch/ngày dương lịch; nội dung bài văn khấn, bài khấn tùy chỉnh hoặc nội dung bạn chỉnh sửa; các thiết lập nhắc việc và tùy chọn cá nhân hóa.",
      "Dữ liệu phát sinh khi sử dụng tính năng âm thanh: khi bạn dùng tính năng chuyển văn bản thành giọng nói, nội dung văn bản bạn yêu cầu đọc có thể được gửi tới máy chủ TTS để tạo tệp âm thanh trả về cho thiết bị của bạn.",
      "Dữ liệu kỹ thuật và bảo mật: thông tin xác thực cần thiết để đăng nhập và duy trì phiên làm việc, mã bảo mật ứng dụng, mã kiểm tra chống lạm dụng và dữ liệu lỗi hoặc nhật ký kỹ thuật phục vụ vận hành hệ thống.",
      "Dữ liệu liên quan đến quảng cáo: nếu ứng dụng tích hợp Google AdMob hoặc các dịch vụ quảng cáo của Google, một số dữ liệu có thể được thu thập hoặc xử lý để phân phối, đo lường và chống gian lận quảng cáo, bao gồm mã định danh quảng cáo, địa chỉ IP, thông tin thiết bị, dữ liệu chẩn đoán và dữ liệu tương tác với quảng cáo.",
      "Dữ liệu lưu cục bộ trên thiết bị: tùy chọn giao diện, cài đặt ứng dụng, nội dung bài khấn tùy chỉnh hoặc bản nháp, tùy chọn bật tắt thông báo nhắc việc, tệp âm thanh tạm thời hoặc bộ nhớ đệm.",
    ],
  },
  {
    heading: "3. Mục đích sử dụng thông tin",
    bullets: [
      "Cung cấp, vận hành và duy trì ứng dụng.",
      "Cho phép bạn đăng nhập, xác thực tài khoản và đồng bộ dữ liệu giữa các thiết bị.",
      "Lưu trữ và hiển thị hồ sơ người dùng, dữ liệu sự kiện gia tiên và nội dung bài khấn.",
      "Tạo và gửi thông báo nhắc lịch giỗ, sinh thần, lễ tiết hoặc các nhắc việc liên quan.",
      "Tạo âm thanh đọc văn khấn khi bạn chủ động sử dụng tính năng TTS.",
      "Hiển thị, phân phối, đo lường và tối ưu quảng cáo trong ứng dụng thông qua Google AdMob hoặc các dịch vụ quảng cáo liên quan.",
      "Cải thiện hiệu năng, tính ổn định, độ an toàn và trải nghiệm sử dụng của ứng dụng.",
      "Phát hiện, ngăn chặn hành vi lạm dụng, truy cập trái phép hoặc rủi ro bảo mật.",
      "Tuân thủ yêu cầu pháp luật, quy định của cơ quan nhà nước có thẩm quyền hoặc giải quyết tranh chấp khi cần thiết.",
    ],
  },
  {
    heading: "4. Cơ sở xử lý dữ liệu",
    bullets: [
      "Việc xử lý là cần thiết để cung cấp chức năng của ứng dụng theo yêu cầu của bạn.",
      "Bạn tự nguyện cung cấp thông tin hoặc cấp quyền cho thiết bị.",
      "Việc xử lý là cần thiết nhằm đảm bảo an toàn, bảo mật, phòng chống gian lận và vận hành dịch vụ.",
      "Việc xử lý là cần thiết để đáp ứng nghĩa vụ pháp lý khi có yêu cầu hợp lệ.",
    ],
  },
  {
    heading: "5. Chia sẻ thông tin với bên thứ ba",
    paragraphs: [
      "Chúng tôi không bán thông tin cá nhân của bạn. Tuy nhiên, chúng tôi có thể chia sẻ dữ liệu trong phạm vi cần thiết với các bên sau.",
    ],
    bullets: [
      "Google/Firebase: để đăng nhập, xác thực người dùng, lưu trữ dữ liệu và vận hành các dịch vụ nền tảng liên quan.",
      "Google AdMob và các đối tác quảng cáo của Google: để hiển thị quảng cáo, đo lường hiệu quả quảng cáo, giới hạn tần suất, chống gian lận và hỗ trợ vận hành hệ thống quảng cáo.",
      "Nhà cung cấp hạ tầng hoặc máy chủ TTS: để xử lý yêu cầu chuyển văn bản thành giọng nói khi bạn sử dụng tính năng này.",
      "Nhà cung cấp dịch vụ kỹ thuật, lưu trữ hoặc bảo mật: trong phạm vi cần thiết để vận hành ứng dụng an toàn và ổn định.",
      "Cơ quan có thẩm quyền hoặc bên thứ ba theo yêu cầu pháp luật: khi chúng tôi có nghĩa vụ phải cung cấp theo quy định hiện hành hoặc để bảo vệ quyền, tài sản, an toàn của chúng tôi, của người dùng hoặc của cộng đồng.",
    ],
  },
  {
    heading: "6. Quyền truy cập thiết bị và thông báo",
    bullets: [
      "Quyền thông báo để gửi nhắc lịch giỗ, sinh thần, lễ tiết và các thông báo liên quan.",
      "Quyền truy cập mạng Internet để đăng nhập, đồng bộ dữ liệu, tải nội dung và sử dụng tính năng TTS.",
      "Trong một số trường hợp, quyền hoặc cơ chế hệ thống liên quan đến quảng cáo và định danh thiết bị có thể được sử dụng để hỗ trợ hiển thị quảng cáo phù hợp, đo lường hiệu quả hoặc quản lý lựa chọn về quyền riêng tư theo chính sách của Google và của hệ điều hành.",
    ],
    paragraphs: [
      "Bạn có thể từ chối hoặc thu hồi quyền thông qua cài đặt của thiết bị. Tuy nhiên, một số tính năng của ứng dụng có thể không hoạt động đầy đủ nếu quyền cần thiết bị tắt.",
    ],
  },
  {
    heading: "7. Lưu trữ và thời gian lưu giữ dữ liệu",
    bullets: [
      "Thông tin của bạn có thể được lưu trên thiết bị của bạn dưới dạng dữ liệu cục bộ hoặc bộ nhớ đệm.",
      "Thông tin của bạn có thể được lưu trên hệ thống lưu trữ đám mây hoặc máy chủ do chúng tôi hoặc nhà cung cấp dịch vụ vận hành.",
      "Chúng tôi lưu giữ dữ liệu trong thời gian cần thiết để cung cấp tính năng của ứng dụng, duy trì lịch sử và dữ liệu do bạn tạo, thực hiện nghĩa vụ pháp lý, giải quyết khiếu nại, tranh chấp hoặc bảo đảm an toàn hệ thống.",
      "Khi dữ liệu không còn cần thiết cho các mục đích nêu trên, chúng tôi sẽ xóa, ẩn danh hoặc giới hạn việc lưu giữ theo quy trình nội bộ và yêu cầu pháp luật áp dụng.",
    ],
  },
  {
    heading: "8. Bảo mật dữ liệu",
    paragraphs: [
      "Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức phù hợp nhằm bảo vệ dữ liệu của bạn trước nguy cơ truy cập trái phép, mất mát, sử dụng sai mục đích hoặc tiết lộ không phù hợp. Tuy nhiên, không có hệ thống truyền tải hoặc lưu trữ dữ liệu nào bảo đảm an toàn tuyệt đối.",
    ],
  },
  {
    heading: "9. Quyền và lựa chọn của người dùng",
    bullets: [
      "Yêu cầu truy cập, xem hoặc cập nhật thông tin cá nhân.",
      "Yêu cầu chỉnh sửa thông tin không chính xác.",
      "Yêu cầu xóa dữ liệu hoặc ngừng xử lý trong một số trường hợp phù hợp.",
      "Rút lại sự đồng ý đối với các xử lý dựa trên sự đồng ý của bạn.",
      "Tắt thông báo hoặc xóa dữ liệu cục bộ trên thiết bị của bạn.",
    ],
    paragraphs: [
      "Bạn có thể thực hiện một phần các quyền này trực tiếp trong ứng dụng. Đối với các yêu cầu khác, vui lòng liên hệ theo thông tin ở cuối chính sách.",
      "Đối với quảng cáo, tùy thiết bị và khu vực áp dụng, bạn cũng có thể quản lý hoặc đặt lại mã định danh quảng cáo, cũng như thay đổi các tùy chọn liên quan đến cá nhân hóa quảng cáo trong phần cài đặt của thiết bị hoặc theo cơ chế đồng ý mà Google cung cấp.",
    ],
  },
  {
    heading: "10. Dữ liệu của trẻ em",
    paragraphs: [
      "Ứng dụng không được thiết kế riêng cho trẻ em dưới độ tuổi tối thiểu theo pháp luật áp dụng. Chúng tôi không cố ý thu thập thông tin cá nhân của trẻ em trái với quy định pháp luật. Nếu bạn cho rằng chúng tôi đã thu thập dữ liệu của trẻ em không phù hợp, vui lòng liên hệ để chúng tôi xem xét và xử lý.",
    ],
  },
  {
    heading: "11. Chuyển dữ liệu qua biên giới",
    paragraphs: [
      "Do chúng tôi sử dụng các nền tảng và hạ tầng công nghệ của bên thứ ba như Google/Firebase hoặc máy chủ dịch vụ liên quan, dữ liệu của bạn có thể được lưu trữ hoặc xử lý tại nhiều quốc gia hoặc vùng lãnh thổ ngoài nơi bạn cư trú. Trong trường hợp đó, chúng tôi sẽ áp dụng các biện pháp hợp lý nhằm bảo đảm dữ liệu được bảo vệ phù hợp với quy định pháp luật áp dụng.",
    ],
  },
  {
    heading: "12. Liên kết và dịch vụ của bên thứ ba",
    paragraphs: [
      "Ứng dụng có thể tích hợp hoặc liên kết với dịch vụ của bên thứ ba. Việc bạn sử dụng các dịch vụ đó sẽ chịu sự điều chỉnh bởi chính sách quyền riêng tư và điều khoản của bên thứ ba tương ứng. Chúng tôi khuyến nghị bạn đọc kỹ các chính sách này trước khi sử dụng.",
      "Đối với Google AdMob, bạn nên tham khảo thêm chính sách quyền riêng tư, chính sách quảng cáo và tài liệu về dữ liệu người dùng của Google để hiểu cách Google xử lý dữ liệu trong hệ sinh thái quảng cáo của họ.",
    ],
  },
  {
    heading: "13. Thay đổi chính sách quyền riêng tư",
    paragraphs: [
      "Chúng tôi có thể cập nhật Chính sách quyền riêng tư này theo từng thời điểm để phản ánh thay đổi về tính năng, mô hình xử lý dữ liệu hoặc yêu cầu pháp lý. Khi có thay đổi quan trọng, chúng tôi sẽ cập nhật ngày có hiệu lực ở đầu văn bản và có thể thông báo cho bạn bằng phương thức phù hợp.",
      "Việc bạn tiếp tục sử dụng ứng dụng sau khi chính sách được cập nhật đồng nghĩa với việc bạn chấp nhận bản cập nhật đó, trong phạm vi pháp luật cho phép.",
    ],
  },
  {
    heading: "14. Thông tin liên hệ",
    bullets: [
      "Đơn vị hoặc cá nhân phụ trách: Trương Tuấn Anh",
      "Email: tuananh.k58@gmail.com",
    ],
  },
];

function sectionId(heading: string) {
  return heading
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/đ/g, "d")
    .replace(/\s+/g, "-");
}

const legalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/dieu-khoan-bao-mat#webpage"),
      url: absoluteUrl("/dieu-khoan-bao-mat"),
      name: `Chính sách quyền riêng tư | ${siteConfig.name}`,
      description:
        "Chính sách quyền riêng tư của Sổ tay gia tiên về thu thập, sử dụng và bảo vệ dữ liệu người dùng.",
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
          name: "Chính sách quyền riêng tư",
          item: absoluteUrl("/dieu-khoan-bao-mat"),
        },
      ],
    },
  ],
};

export default function LegalPage() {
  return (
    <main className="subpage-shell">
      <StructuredData data={legalSchema} />
      <SiteTopBar currentPath="/dieu-khoan-bao-mat" />

      <div className="subpage-main legal-page">
        <section className="subpage-hero legal-hero">
          <p className="subpage-kicker">Chính sách quyền riêng tư</p>
          <h1>Thông tin quan trọng được trình bày rõ ràng để gia đình dễ theo dõi.</h1>
          <p>
            Ngày có hiệu lực: 30/05/2026. Chính sách này mô tả cách Sổ tay gia
            tiên thu thập, sử dụng, lưu trữ, chia sẻ và bảo vệ thông tin người
            dùng.
          </p>
        </section>

        <div className="legal-layout">
          <aside className="legal-sidebar">
            <a className="active" href="#tong-quan">
              Tổng quan
            </a>
            {privacySections.map((section) => (
              <a key={section.heading} href={`#${sectionId(section.heading)}`}>
                {section.heading}
              </a>
            ))}
          </aside>

          <article className="legal-content">
            <section className="legal-block" id="tong-quan">
              <h2>Chính sách quyền riêng tư</h2>
              <p>
                <strong>Ứng dụng:</strong> Sổ Tay Gia Tiên
              </p>
              <p>
                Chính sách quyền riêng tư này mô tả cách ứng dụng Sổ Tay Gia
                Tiên thu thập, sử dụng, lưu trữ, chia sẻ và bảo vệ thông tin của
                người dùng khi bạn cài đặt hoặc sử dụng ứng dụng.
              </p>
              <p>
                Khi sử dụng ứng dụng, bạn xác nhận đã đọc và đồng ý với nội dung
                của chính sách quyền riêng tư này.
              </p>
            </section>

            {privacySections.map((item) => (
              <section
                key={item.heading}
                className="legal-block"
                id={sectionId(item.heading)}
              >
                <h3>{item.heading}</h3>
                {item.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {item.bullets ? (
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>
        </div>
      </div>

      <SiteFooter currentPath="/dieu-khoan-bao-mat" />
    </main>
  );
}
