import type { Metadata } from "next";

export const siteConfig = {
  name: "Sổ tay gia tiên",
  shortName: "Sổ tay gia tiên",
  url: "https://sotaygiatien.io.vn",
  title: "Sổ tay gia tiên | Lập gia phả và quản lý ngày giỗ cho gia đình Việt",
  description:
    "Sổ tay gia tiên giúp gia đình Việt lập gia phả, quản lý ngày giỗ, lưu giữ ký ức và kết nối các thế hệ trong một nơi riêng tư, dễ tiếp nối.",
  keywords: [
    "sổ tay gia tiên",
    "lập gia phả",
    "gia phả online",
    "quản lý ngày giỗ",
    "ngày giỗ gia đình",
    "văn khấn",
    "ứng dụng gia phả",
    "gia đình Việt",
    "lưu giữ ký ức gia đình",
  ],
  locale: "vi_VN",
  ogImage: "/hero-tree.jpg",
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
          width: 1024,
          height: 1024,
          alt: "Minh họa cây gia phả của Sổ tay gia tiên",
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
