import type { Metadata } from "next";

export const siteConfig = {
  name: "Sổ tay gia tiên",
  shortName: "Sổ tay gia tiên",
  url: "https://sotaygiatien.io.vn",
  title: "Sổ tay gia tiên | Lịch âm, lễ giỗ và văn khấn cho gia đình Việt",
  description:
    "Sổ tay gia tiên giúp xem lịch âm, lưu ngày lễ giỗ, tìm văn khấn và nghe giọng đọc AI trong một ứng dụng dễ sử dụng.",
  keywords: [
    "sổ tay gia tiên",
    "lịch âm",
    "lịch âm Việt Nam",
    "quản lý ngày giỗ",
    "ngày giỗ gia đình",
    "văn khấn",
    "giọng đọc văn khấn",
    "ứng dụng văn khấn",
    "gia đình Việt",
    "nhắc ngày lễ giỗ",
  ],
  locale: "vi_VN",
  ogImage: "/app-home.png",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: 1600,
          height: 1200,
          alt: "Trang chủ ứng dụng Sổ tay gia tiên",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
  };
}
