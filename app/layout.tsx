import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Sổ tay gia tiên",
  description:
    "Gìn giữ cội nguồn, kết nối tương lai với ứng dụng lập gia phả và quản lý ngày giỗ cho gia đình Việt.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
