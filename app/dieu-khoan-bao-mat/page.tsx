import type { Metadata } from "next";

import { StructuredData } from "../components/structured-data";
import { SiteFooter, SiteTopBar } from "../components/subpage-chrome";
import { absoluteUrl, buildMetadata, siteConfig } from "../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Chính sách bảo mật và Điều khoản sử dụng",
  description:
    "Chính sách bảo mật và Điều khoản sử dụng của Sổ tay gia tiên, áp dụng cho lịch âm, lễ giỗ, văn khấn và giọng đọc AI.",
  path: "/dieu-khoan-bao-mat",
  keywords: [
    "chính sách bảo mật sổ tay gia tiên",
    "điều khoản sử dụng sổ tay gia tiên",
    "bảo vệ dữ liệu cá nhân",
  ],
});

type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

const privacySections: LegalSection[] = [
  {
    heading: "1. Phạm vi và vai trò của chúng tôi",
    paragraphs: [
      "Chính sách này áp dụng khi bạn sử dụng ứng dụng Sổ tay gia tiên, trang web sotaygiatien.io.vn và các dịch vụ liên quan. Trương Tuấn Anh là bên kiểm soát dữ liệu cá nhân đối với các hoạt động xử lý được mô tả tại đây.",
      "Chúng tôi xử lý dữ liệu theo Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15, Nghị định 356/2025/NĐ-CP và quy định pháp luật Việt Nam có liên quan.",
    ],
  },
  {
    heading: "2. Dữ liệu chúng tôi xử lý",
    bullets: [
      "Dữ liệu tài khoản: mã người dùng Firebase, tên, email, ảnh đại diện và nhà cung cấp đăng nhập Google hoặc Apple.",
      "Dữ liệu hồ sơ bạn nhập: họ tên, địa chỉ, quê quán, số điện thoại và thông tin cá nhân hóa bài khấn.",
      "Dữ liệu lễ giỗ và sự kiện: loại sự kiện, tên người liên quan, mối quan hệ, địa điểm, ngày âm, ngày dương và tùy chọn lặp lại.",
      "Nội dung văn khấn: bài khấn riêng, bản chỉnh sửa cục bộ và văn bản bạn yêu cầu tạo giọng đọc.",
      "Dữ liệu dịch vụ: số dư nén hương, lịch sử quyền lợi hoặc giao dịch do cửa hàng ứng dụng và RevenueCat cung cấp.",
      "Dữ liệu kỹ thuật và bảo mật: mã phiên đăng nhập, App Check, loại thiết bị, phiên bản ứng dụng, địa chỉ IP, thời điểm yêu cầu và nhật ký lỗi cần thiết để bảo vệ, chẩn đoán dịch vụ.",
      "Dữ liệu trên thiết bị: tùy chọn giao diện, cấu hình thông báo, bài khấn cục bộ, tệp âm thanh tạm và bộ nhớ đệm.",
    ],
  },
  {
    heading: "3. Cách chúng tôi thu thập dữ liệu",
    bullets: [
      "Từ bạn khi đăng nhập, tạo hồ sơ, thêm sự kiện, chỉnh sửa văn khấn hoặc liên hệ hỗ trợ.",
      "Tự động từ ứng dụng và hệ thống bảo mật khi bạn truy cập hoặc gửi yêu cầu tới máy chủ.",
      "Từ Google, Apple, Firebase, RevenueCat và cửa hàng ứng dụng khi bạn sử dụng đăng nhập hoặc giao dịch tương ứng.",
    ],
  },
  {
    heading: "4. Mục đích và căn cứ xử lý",
    bullets: [
      "Cung cấp tài khoản, đồng bộ hồ sơ và dữ liệu lễ giỗ theo yêu cầu của bạn.",
      "Hiển thị lịch âm, lên lịch thông báo trên thiết bị và cá nhân hóa nội dung văn khấn.",
      "Gửi văn bản tới máy chủ TTS khi bạn chủ động chọn giọng AI, tạo âm thanh và trừ số nén hương tương ứng.",
      "Xác nhận quyền lợi, khôi phục giao dịch và hỗ trợ tính năng mua hàng khi được mở.",
      "Bảo vệ tài khoản, ngăn lạm dụng, sửa lỗi và duy trì độ ổn định của dịch vụ.",
      "Giải quyết yêu cầu hỗ trợ, khiếu nại và thực hiện nghĩa vụ pháp lý.",
    ],
    paragraphs: [
      "Tùy hoạt động cụ thể, căn cứ xử lý có thể là sự đồng ý của bạn, việc thực hiện thỏa thuận cung cấp dịch vụ, bảo vệ quyền và lợi ích hợp pháp, hoặc tuân thủ nghĩa vụ pháp luật. Bạn có thể rút lại sự đồng ý, nhưng việc rút lại không làm mất tính hợp pháp của hoạt động xử lý đã thực hiện trước đó.",
    ],
  },
  {
    heading: "5. Giọng đọc và tệp âm thanh",
    paragraphs: [
      "Giọng đọc cục bộ được tạo bằng khả năng có sẵn trên thiết bị. Khi bạn chọn giọng AI, văn bản bài khấn và mã tài khoản cần thiết được gửi tới máy chủ của chúng tôi hoặc nhà cung cấp hạ tầng để tạo âm thanh. Chúng tôi không thu âm giọng nói và ứng dụng không yêu cầu quyền micro cho tính năng này.",
      "Tệp âm thanh có thể được lưu tạm trên thiết bị để phát lại và giảm số lần tạo mới. Bạn có thể xóa bộ nhớ đệm bằng cách xóa dữ liệu ứng dụng hoặc xóa tài khoản theo chức năng được cung cấp.",
    ],
  },
  {
    heading: "6. Bên nhận dữ liệu",
    paragraphs: [
      "Chúng tôi không bán dữ liệu cá nhân và hiện không tích hợp mạng quảng cáo trong ứng dụng. Dữ liệu chỉ được chia sẻ trong phạm vi cần thiết với các nhóm bên nhận sau.",
    ],
    bullets: [
      "Google Firebase: xác thực, cơ sở dữ liệu, App Check và hạ tầng liên quan.",
      "Google và Apple: cung cấp đăng nhập khi bạn chọn phương thức tương ứng.",
      "RevenueCat, Apple App Store và Google Play: quản lý sản phẩm, quyền lợi, giao dịch và khôi phục giao dịch.",
      "Nhà cung cấp máy chủ, lưu trữ và TTS: xử lý yêu cầu kỹ thuật và tạo âm thanh giọng AI.",
      "Cố vấn, nhà cung cấp hỗ trợ hoặc cơ quan có thẩm quyền khi cần bảo vệ quyền hợp pháp, xử lý sự cố hoặc tuân thủ yêu cầu hợp lệ.",
    ],
  },
  {
    heading: "7. Lưu trữ và chuyển dữ liệu",
    paragraphs: [
      "Dữ liệu tài khoản và sự kiện được lưu trong Firebase trong thời gian tài khoản hoạt động hoặc cho đến khi bạn xóa dữ liệu. Bài khấn riêng, bản chỉnh sửa, cấu hình thông báo và tệp âm thanh đệm có thể chỉ nằm trên thiết bị. Nhật ký bảo mật và bản sao lưu có thể được giữ thêm trong thời gian hợp lý để điều tra sự cố, khôi phục hệ thống hoặc đáp ứng nghĩa vụ pháp lý.",
      "Một số nhà cung cấp có thể xử lý dữ liệu tại máy chủ ngoài Việt Nam. Khi phát sinh chuyển dữ liệu cá nhân xuyên biên giới, chúng tôi thực hiện các yêu cầu và biện pháp bảo vệ theo pháp luật áp dụng.",
    ],
  },
  {
    heading: "8. Quyền của bạn",
    bullets: [
      "Được biết về hoạt động xử lý và yêu cầu truy cập dữ liệu cá nhân của mình.",
      "Yêu cầu sửa dữ liệu không chính xác hoặc tự cập nhật thông tin trong ứng dụng.",
      "Rút lại sự đồng ý, phản đối hoặc yêu cầu hạn chế xử lý khi pháp luật cho phép.",
      "Yêu cầu cung cấp, xóa dữ liệu hoặc xóa tài khoản, trừ phần phải lưu theo nghĩa vụ pháp lý.",
      "Khiếu nại, tố cáo, khởi kiện hoặc yêu cầu bồi thường theo quy định pháp luật.",
      "Tắt thông báo trong ứng dụng hoặc trong phần cài đặt của thiết bị.",
    ],
    paragraphs: [
      "Bạn có thể xóa tài khoản tại Cài đặt, Bảo mật tài khoản. Chức năng này xóa hồ sơ và sự kiện trên Firebase, hủy thông báo đã lên lịch, xóa bài khấn cục bộ và bộ nhớ đệm âm thanh trên thiết bị đang dùng. Dữ liệu giao dịch do Apple, Google hoặc RevenueCat quản lý có thể tiếp tục được lưu theo nghĩa vụ riêng của các bên đó.",
      "Để thực hiện quyền khác, hãy gửi email từ địa chỉ gắn với tài khoản. Chúng tôi có thể cần xác minh danh tính và sẽ phản hồi trong thời hạn pháp luật quy định.",
    ],
  },
  {
    heading: "9. Bảo mật dữ liệu",
    paragraphs: [
      "Chúng tôi sử dụng xác thực Firebase, kiểm soát truy cập, App Check, kết nối mã hóa và các biện pháp kỹ thuật phù hợp để hạn chế truy cập trái phép, mất mát hoặc lạm dụng dữ liệu. Không hệ thống nào an toàn tuyệt đối. Bạn nên bảo vệ thiết bị, tài khoản Google hoặc Apple và thông tin đăng nhập của mình.",
    ],
  },
  {
    heading: "10. Dữ liệu của trẻ em",
    paragraphs: [
      "Dịch vụ không hướng riêng tới trẻ em. Người chưa có đầy đủ năng lực để tự mình đồng ý với việc xử lý dữ liệu phải sử dụng dịch vụ với sự đồng ý và giám sát của cha, mẹ hoặc người giám hộ theo pháp luật. Nếu phát hiện dữ liệu trẻ em được cung cấp không phù hợp, hãy liên hệ để chúng tôi xử lý.",
    ],
  },
  {
    heading: "11. Thay đổi chính sách",
    paragraphs: [
      "Chúng tôi có thể cập nhật chính sách khi tính năng, nhà cung cấp hoặc pháp luật thay đổi. Bản mới sẽ ghi ngày cập nhật và được đăng tại trang này. Nếu thay đổi ảnh hưởng đáng kể đến quyền của bạn, chúng tôi sẽ thông báo trong ứng dụng hoặc bằng phương thức phù hợp trước khi áp dụng khi pháp luật yêu cầu.",
    ],
  },
  {
    heading: "12. Liên hệ về dữ liệu cá nhân",
    bullets: [
      "Bên kiểm soát dữ liệu: Trương Tuấn Anh",
      "Email: tuananh.k58@gmail.com",
      "Website: https://sotaygiatien.io.vn",
    ],
  },
];

const termsSections: LegalSection[] = [
  {
    heading: "1. Chấp nhận điều khoản",
    paragraphs: [
      "Khi cài đặt, tạo tài khoản hoặc sử dụng Sổ tay gia tiên, bạn xác nhận đã đọc và đồng ý với Điều khoản sử dụng này cùng Chính sách bảo mật. Nếu không đồng ý, bạn không nên tiếp tục sử dụng dịch vụ.",
      "Nếu bạn sử dụng dịch vụ thay mặt cho tổ chức hoặc người khác, bạn xác nhận mình có thẩm quyền chấp nhận các điều khoản này thay cho họ.",
    ],
  },
  {
    heading: "2. Dịch vụ được cung cấp",
    paragraphs: [
      "Sổ tay gia tiên hỗ trợ xem lịch âm, lưu ngày lễ giỗ và sự kiện, lên lịch nhắc trên thiết bị, đọc hoặc chỉnh sửa văn khấn, tạo bài khấn riêng và phát giọng đọc cục bộ hoặc giọng AI. Tính năng có thể khác nhau theo nền tảng, phiên bản, khu vực và trạng thái tài khoản.",
      "Thông tin lịch âm và văn khấn mang tính hỗ trợ. Bạn chịu trách nhiệm kiểm tra ngày tháng, nội dung nghi lễ và điều chỉnh cho phù hợp với gia đình, địa phương hoặc tín ngưỡng của mình.",
    ],
  },
  {
    heading: "3. Tài khoản và an toàn đăng nhập",
    bullets: [
      "Bạn phải cung cấp thông tin chính xác và cập nhật khi cần.",
      "Bạn chịu trách nhiệm bảo vệ thiết bị và tài khoản Google hoặc Apple dùng để đăng nhập.",
      "Không được cho thuê, bán, chuyển giao tài khoản hoặc dùng tài khoản của người khác khi chưa được phép.",
      "Hãy thông báo ngay nếu nghi ngờ tài khoản bị truy cập trái phép.",
    ],
  },
  {
    heading: "4. Nội dung của bạn",
    paragraphs: [
      "Bạn giữ quyền đối với nội dung mình nhập, bao gồm thông tin sự kiện và bài khấn riêng. Bạn cấp cho chúng tôi quyền có giới hạn để lưu trữ, xử lý, truyền và hiển thị nội dung đó chỉ nhằm vận hành, bảo vệ và cải thiện dịch vụ theo lựa chọn của bạn.",
      "Bạn cam kết có quyền cung cấp nội dung và dữ liệu cá nhân của người khác mà bạn nhập vào ứng dụng. Bạn không được nhập nội dung trái pháp luật, xâm phạm quyền riêng tư, quyền sở hữu trí tuệ hoặc quyền hợp pháp của bên thứ ba.",
    ],
  },
  {
    heading: "5. Sử dụng được phép",
    bullets: [
      "Không truy cập trái phép, dò quét, phá vỡ bảo mật hoặc can thiệp hoạt động của dịch vụ.",
      "Không tự động gửi số lượng lớn yêu cầu, lạm dụng TTS, gian lận số dư nén hương hoặc né tránh giới hạn kỹ thuật.",
      "Không phát tán mã độc, nội dung lừa đảo, xúc phạm, bất hợp pháp hoặc xâm phạm quyền của người khác.",
      "Không sao chép, dịch ngược, bán lại hoặc khai thác thương mại dịch vụ ngoài phạm vi pháp luật cho phép hay khi chưa có văn bản đồng ý.",
    ],
  },
  {
    heading: "6. Giọng AI và nén hương",
    paragraphs: [
      "Giọng đọc cục bộ có thể được cung cấp miễn phí. Mỗi lần tạo giọng AI mới có thể sử dụng một số nén hương được hiển thị trong ứng dụng trước khi thực hiện. Nén hương là đơn vị sử dụng trong dịch vụ, không phải tiền, tài sản ảo hoặc phương tiện thanh toán và không được quy đổi thành tiền mặt.",
      "Giá, số nén hương, gói thuê bao, thời hạn và quyền lợi được hiển thị tại thời điểm giao dịch. Giao dịch được xử lý bởi Apple App Store, Google Play và RevenueCat, đồng thời chịu điều khoản thanh toán, hủy và hoàn tiền của cửa hàng tương ứng. Tính năng mua có thể chưa mở ở một số phiên bản.",
      "Trừ khi pháp luật hoặc chính sách của cửa hàng yêu cầu khác, nén hương đã dùng cho một yêu cầu tạo giọng AI thành công không được hoàn lại. Nếu lỗi hệ thống làm trừ số dư nhưng không trả kết quả, hãy liên hệ hỗ trợ để được kiểm tra.",
    ],
  },
  {
    heading: "7. Quyền sở hữu trí tuệ",
    paragraphs: [
      "Ứng dụng, mã nguồn, giao diện, logo, thiết kế, dữ liệu mẫu và nội dung do chúng tôi cung cấp thuộc quyền của chúng tôi hoặc bên cấp phép. Bạn được cấp quyền cá nhân, có giới hạn, không độc quyền, không chuyển nhượng để sử dụng dịch vụ theo các điều khoản này.",
      "Một số bài văn khấn có thể dựa trên tư liệu truyền thống hoặc nguồn được phép sử dụng. Quyền đối với phần biên soạn, trình bày và nội dung riêng vẫn được bảo lưu theo pháp luật.",
    ],
  },
  {
    heading: "8. Dịch vụ bên thứ ba",
    paragraphs: [
      "Dịch vụ phụ thuộc một phần vào Google, Apple, Firebase, RevenueCat, cửa hàng ứng dụng và nhà cung cấp hạ tầng. Việc sử dụng các dịch vụ đó có thể chịu điều khoản riêng của họ. Chúng tôi không kiểm soát và không chịu trách nhiệm cho sự cố chỉ thuộc hệ thống của bên thứ ba, trong phạm vi pháp luật cho phép.",
    ],
  },
  {
    heading: "9. Thay đổi và gián đoạn dịch vụ",
    paragraphs: [
      "Chúng tôi có thể sửa đổi, bổ sung, tạm dừng hoặc ngừng một tính năng để bảo trì, bảo mật, tuân thủ pháp luật hoặc phát triển sản phẩm. Chúng tôi sẽ cố gắng thông báo hợp lý khi thay đổi ảnh hưởng đáng kể đến dịch vụ trả phí hoặc dữ liệu của bạn.",
      "Dịch vụ được cung cấp theo khả năng hiện có. Chúng tôi không cam kết dịch vụ luôn không gián đoạn, không có lỗi hoặc phù hợp với mọi nhu cầu, nhưng sẽ nỗ lực khắc phục sự cố hợp lý.",
    ],
  },
  {
    heading: "10. Tạm ngừng và chấm dứt",
    paragraphs: [
      "Bạn có thể ngừng sử dụng hoặc xóa tài khoản bất cứ lúc nào. Chúng tôi có thể hạn chế hoặc chấm dứt quyền truy cập nếu bạn vi phạm điều khoản, gây rủi ro bảo mật, lạm dụng dịch vụ hoặc khi pháp luật yêu cầu. Khi phù hợp, chúng tôi sẽ thông báo và cho bạn cơ hội khắc phục trước khi chấm dứt.",
      "Các điều khoản về nội dung, sở hữu trí tuệ, trách nhiệm, giải quyết tranh chấp và những điều khoản theo bản chất cần tiếp tục sẽ vẫn có hiệu lực sau khi tài khoản chấm dứt.",
    ],
  },
  {
    heading: "11. Giới hạn trách nhiệm",
    paragraphs: [
      "Trong phạm vi pháp luật cho phép, chúng tôi không chịu trách nhiệm đối với tổn thất gián tiếp phát sinh từ việc bạn dựa vào thông tin lịch, nội dung văn khấn, thiết lập thông báo hoặc việc dịch vụ gián đoạn ngoài khả năng kiểm soát hợp lý. Không nội dung nào trong điều khoản này loại trừ trách nhiệm không thể loại trừ theo pháp luật bảo vệ quyền lợi người tiêu dùng.",
    ],
  },
  {
    heading: "12. Pháp luật và giải quyết tranh chấp",
    paragraphs: [
      "Điều khoản này được điều chỉnh bởi pháp luật Việt Nam. Khi phát sinh vấn đề, hai bên ưu tiên trao đổi thiện chí qua email hỗ trợ. Nếu không giải quyết được, tranh chấp được đưa ra cơ quan hoặc tòa án có thẩm quyền theo pháp luật.",
    ],
  },
  {
    heading: "13. Cập nhật và liên hệ",
    paragraphs: [
      "Chúng tôi có thể cập nhật điều khoản để phản ánh thay đổi của dịch vụ hoặc pháp luật. Bản cập nhật sẽ được đăng tại trang này và ghi ngày áp dụng. Nếu thay đổi ảnh hưởng đáng kể đến quyền của bạn, chúng tôi sẽ thông báo bằng phương thức phù hợp.",
    ],
    bullets: [
      "Đơn vị cung cấp: Trương Tuấn Anh",
      "Email hỗ trợ: tuananh.k58@gmail.com",
      "Website: https://sotaygiatien.io.vn",
    ],
  },
];

function sectionId(prefix: string, heading: string) {
  return `${prefix}-${heading
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;
}

const legalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/dieu-khoan-bao-mat#webpage"),
      url: absoluteUrl("/dieu-khoan-bao-mat"),
      name: `Chính sách bảo mật và Điều khoản sử dụng | ${siteConfig.name}`,
      description:
        "Chính sách bảo mật và Điều khoản sử dụng của Sổ tay gia tiên.",
      dateModified: "2026-07-11",
      inLanguage: "vi-VN",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: absoluteUrl("/") },
        {
          "@type": "ListItem",
          position: 2,
          name: "Chính sách và điều khoản",
          item: absoluteUrl("/dieu-khoan-bao-mat"),
        },
      ],
    },
  ],
};

function LegalBlocks({
  sections,
  prefix,
}: {
  sections: LegalSection[];
  prefix: string;
}) {
  return sections.map((item) => (
    <section key={item.heading} className="legal-block" id={sectionId(prefix, item.heading)}>
      <h3>{item.heading}</h3>
      {item.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {item.bullets ? <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
    </section>
  ));
}

export default function LegalPage() {
  return (
    <main className="subpage-shell">
      <StructuredData data={legalSchema} />
      <SiteTopBar currentPath="/dieu-khoan-bao-mat" />

      <div className="subpage-main legal-page">
        <section className="legal-hero-v2">
          <p className="subpage-kicker">Chính sách và điều khoản</p>
          <h1>Dữ liệu của bạn. Điều khoản rõ ràng.</h1>
          <p>Cập nhật ngày 11/07/2026. Áp dụng cho ứng dụng và website Sổ tay gia tiên.</p>
          <nav className="legal-document-switcher" aria-label="Chọn văn bản pháp lý">
            <a href="#chinh-sach-bao-mat">Chính sách bảo mật</a>
            <a href="#dieu-khoan-su-dung">Điều khoản sử dụng</a>
          </nav>
        </section>

        <div className="legal-layout legal-layout-v2">
          <aside className="legal-sidebar legal-sidebar-v2">
            <strong>Trong trang này</strong>
            <a className="active" href="#chinh-sach-bao-mat">Chính sách bảo mật</a>
            {privacySections.map((section) => (
              <a key={section.heading} href={`#${sectionId("privacy", section.heading)}`}>{section.heading}</a>
            ))}
            <a className="legal-sidebar-group" href="#dieu-khoan-su-dung">Điều khoản sử dụng</a>
            {termsSections.map((section) => (
              <a key={section.heading} href={`#${sectionId("terms", section.heading)}`}>{section.heading}</a>
            ))}
          </aside>

          <article className="legal-content legal-content-v2">
            <section className="legal-document-intro" id="chinh-sach-bao-mat">
              <span>Văn bản 1</span>
              <h2>Chính sách bảo mật</h2>
              <p>
                Văn bản này giải thích dữ liệu nào được xử lý, vì sao cần xử lý, dữ liệu được chia sẻ với ai và cách bạn thực hiện quyền của mình.
              </p>
            </section>
            <LegalBlocks sections={privacySections} prefix="privacy" />

            <section className="legal-document-intro legal-document-intro-terms" id="dieu-khoan-su-dung">
              <span>Văn bản 2</span>
              <h2>Điều khoản sử dụng</h2>
              <p>
                Văn bản này quy định quyền, trách nhiệm và các giới hạn áp dụng khi bạn sử dụng Sổ tay gia tiên.
              </p>
            </section>
            <LegalBlocks sections={termsSections} prefix="terms" />

            <aside className="legal-review-note">
              <strong>Lưu ý rà soát</strong>
              <p>
                Nội dung được xây dựng theo tính năng hiện có và pháp luật Việt Nam tại ngày cập nhật. Chủ sản phẩm nên nhờ luật sư rà soát trước khi phát hành thương mại hoặc mở thanh toán chính thức.
              </p>
            </aside>
          </article>
        </div>
      </div>

      <SiteFooter currentPath="/dieu-khoan-bao-mat" />
    </main>
  );
}
