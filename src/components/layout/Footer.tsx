import Link from "next/link";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "UI/UX",
  "Branding",
  "SEO",
  "Motion",
  "Performance",
];

const socials = [
  {label: "X", href: "https://twitter.com", icon: XIcon},
  {label: "Instagram", href: "https://instagram.com", icon: InstagramIcon},
  {label: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon,},
  {label: "GitHub", href: "https://github.com", icon: GitHubIcon},
  {label: "Email", href: "https://gmail.com", icon: EmailIcon},
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="mb-5 flex items-center gap-3">
            <div className="flex items-center h-18 w-18 justify-center">
              <img src="/logo final.png" className="h-auto w-auto object-contain" />
            </div>
            <span className="text-2xl font-bold">Pixel Bridge</span>
          </Link>

          <p className="max-w-md text-sm leading-7 text-white/60">
            We craft modern digital experiences focused on performance,
            creativity, and scalable user-first products.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

          <div className="grid grid-cols-2 gap-3 text-sm">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/60 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-semibold">Core Skills</h3>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 backdrop-blur-md"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white hover:text-black"
                >
                  <Icon sx={{ fontSize: 18 }} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Pixel Bridge. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy
            </Link>

            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}