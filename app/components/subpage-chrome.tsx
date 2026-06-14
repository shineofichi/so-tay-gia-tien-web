import Image from "next/image";
import Link from "next/link";

const headerLinks = [
  { label: "Tổng quan", href: "/#tong-quan" },
  { label: "Tính năng", href: "/#tinh-nang" },
  { label: "Hướng dẫn", href: "/huong-dan-su-dung" },
  { label: "Liên hệ", href: "/lien-he" },
];

const footerLinks = [
  { label: "Điều khoản", href: "/dieu-khoan-bao-mat" },
  { label: "Hướng dẫn", href: "/huong-dan-su-dung" },
  { label: "Liên hệ", href: "/lien-he" },
];

function isActive(currentPath: string, href: string) {
  const [path] = href.split("#");

  if (path === "/" && currentPath === "/") {
    return true;
  }

  return path !== "/" && currentPath === path;
}

type SiteTopBarProps = {
  currentPath: string;
  showLogo?: boolean;
};

export function SiteTopBar({
  currentPath,
  showLogo = true,
}: SiteTopBarProps) {
  return (
    <header className="subpage-header">
      <div className="subpage-header-inner">
        <Link className="subpage-brand" href="/">
          {showLogo ? (
            <Image
              src="/logo.png"
              alt="Logo Sổ tay gia tiên"
              width={46}
              height={46}
            />
          ) : null}
          <span>Sổ tay gia tiên</span>
        </Link>

        <nav className="subpage-nav" aria-label="Điều hướng trang">
          {headerLinks.map((item) => (
            <Link
              key={item.href}
              className={isActive(currentPath, item.href) ? "active" : ""}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="button button-primary subpage-cta" href="/#bat-dau">
          Bắt đầu ngay
        </Link>
      </div>
    </header>
  );
}

type SiteFooterProps = {
  currentPath: string;
};

export function SiteFooter({ currentPath }: SiteFooterProps) {
  return (
    <footer className="subpage-footer">
      <div className="subpage-footer-inner">
        <div className="subpage-footer-brand">
          <strong>Sổ tay gia tiên</strong>
          <p>Không gian lưu giữ gia phả, ngày giỗ và ký ức gia đình.</p>
        </div>

        <div className="subpage-footer-links">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              className={isActive(currentPath, item.href) ? "active" : ""}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <p className="subpage-footer-copy">
          © 2026 Sổ tay gia tiên. Gìn giữ cội nguồn, kết nối tương lai.
        </p>
      </div>
    </footer>
  );
}
