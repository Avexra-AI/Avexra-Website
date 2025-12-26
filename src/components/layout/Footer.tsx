import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-slate-200 pt-16 pb-10">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row justify-between gap-16">

          {/* LEFT */}
          <div className="flex flex-col gap-6 max-w-md">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/icons/logo.jpg"
                alt="Avexra AI"
                width={48}
                height={48}
              />
              <span className="text-2xl font-bold">
                Avexra <span className="text-primary">AI</span>
              </span>
            </Link>

            <p className="text-slate-500 text-sm leading-relaxed">
              Engineering intelligent, agentic systems for enterprises.
              We build scalable AI automation, analytics, and custom platforms.
            </p>

            {/* CONTACT ROW */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              <ContactItem
                icon="mail"
                text="info@avexra.ai"
                href="mailto:info@avexra.ai"
              />
              <ContactItem
                icon="phone"
                text="+1-703-935-1919"
                href="tel:+17039351919"
              />
              <ContactItem
                icon="location"
                text="San Francisco, CA, USA"
                href="https://maps.google.com/?q=San+Francisco+CA"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex gap-20">
            <FooterLinks
              title="Company"
              links={[
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ]}
            />
            <FooterLinks
              title="Legal"
              links={[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms" },
              ]}
            />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © 2025 Avexra AI. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <SocialIcon
              type="instagram"
              href="https://instagram.com/avexraai"
            />
            <SocialIcon
              type="linkedin"
              href="https://linkedin.com/company/avexra-ai"
            />
            <SocialIcon
              type="x"
              href="https://x.com/avexraai"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-semibold text-sm text-slate-900">{title}</h4>
      {links.map((l) => (
        <Link
          key={l.label}
          href={l.href}
          className="text-slate-500 text-sm hover:text-primary transition-colors"
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}

function ContactItem({
  icon,
  text,
  href,
}: {
  icon: "mail" | "phone" | "location";
  text: string;
  href?: string;
}) {
  const content = (
    <span className="flex items-center gap-2 hover:text-primary transition-colors">
      <span className="text-primary">{iconMap[icon]}</span>
      {text}
    </span>
  );

  if (!href) return content;

  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto") ||
    href.startsWith("tel");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}

function SocialIcon({
  type,
  href,
}: {
  type: "instagram" | "linkedin" | "x";
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={type}
      className="text-slate-400 hover:text-primary transition-colors"
    >
      {socialMap[type]}
    </a>
  );
}

/* ---------------- ICON MAPS ---------------- */

const iconMap: Record<string, ReactNode> = {
  mail: <MailIcon />,
  phone: <PhoneIcon />,
  location: <LocationIcon />,
};

const socialMap: Record<string, ReactNode> = {
  instagram: <InstagramIcon />,
  linkedin: <LinkedInIcon />,
  x: <XIcon />,
};

/* ---------------- ICONS ---------------- */

function MailIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M3 5h18l-9 7-9-7v14h18V5z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M22 16.9V21a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 5.2 2 2 0 0 1 5 3h4.1a2 2 0 0 1 2 1.7c.1.8.3 1.6.6 2.4a2 2 0 0 1-.5 2.1L10 10.9a16 16 0 0 0 6.2 6.2l1.7-1.7a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.4.6a2 2 0 0 1 1.6 1.9z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

/* ---- BRAND ICONS ---- */

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 9h4v12H3V9zm2-6a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm6 6h3.8v1.6h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6v6.2h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.6h-4V9z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.2 2H21l-6.5 7.4L22 22h-6.8l-4.7-6.1L5.9 22H3l7-8L2 2h6.9l4.2 5.7L18.2 2z" />
    </svg>
  );
}
