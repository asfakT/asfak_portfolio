import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaMedium, FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const links = [
  { label: 'GitHub', href: 'https://github.com/asfakT', Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/asfak-shahrier/', Icon: FaLinkedinIn },
  { label: 'Medium', href: 'https://medium.com/@shahrierasfak27', Icon: FaMedium },
  { label: 'WhatsApp', href: 'https://wa.me/8801796512473', Icon: FaWhatsapp },
  { label: 'Email', href: 'mailto:shahrierasfak27@gmail.com', Icon: FiMail },
];

// Fixed left rail of contact icons (1180px+ only, so it never crowds the content). Fades out while the page footer is on screen.
export default function SocialRail() {
  const { pathname } = useLocation();
  const [overFooter, setOverFooter] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;
    const io = new IntersectionObserver(([e]) => setOverFooter(e.isIntersecting), { threshold: 0.2 });
    io.observe(footer);
    return () => {
      io.disconnect();
      setOverFooter(false);
    };
  }, [pathname]);

  return (
    <nav
      aria-label="Social links"
      className={`fixed left-[max(14px,calc(2.5vw-18px))] top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-1.5 transition-opacity duration-300 min-[1180px]:flex ${
        overFooter ? 'pointer-events-none opacity-0' : ''
      }`}
    >
      <span aria-hidden="true" className="mb-2 h-14 w-px bg-cream/[0.18]" />
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative grid h-9 w-9 place-items-center rounded-full text-stone transition duration-200 hover:translate-x-0.5 hover:bg-peach/10 hover:text-peach"
        >
          <Icon size={18} />
          <span className="pointer-events-none absolute left-[46px] -translate-x-1 whitespace-nowrap rounded-md border border-cream/[0.12] bg-[#111] px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[1.2px] text-cream opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100">
            {label}
          </span>
        </a>
      ))}
      <span aria-hidden="true" className="mt-2 h-14 w-px bg-cream/[0.18]" />
    </nav>
  );
}
