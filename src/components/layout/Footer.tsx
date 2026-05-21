import Link from "next/link";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";

const skills = ["Next.js", "React", "TypeScript", "Tailwind", "UI/UX", "Branding"];

const socials = [
  { label: "X", href: "https://twitter.com", icon: XIcon },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
  { label: "GitHub", href: "https://github.com", icon: GitHubIcon },
  { label: "Email", href: "mailto:hello@pixelbridge.dev", icon: EmailIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center">
                <img src="/logo final.png" className="h-full w-full object-contain" alt="Pixel Bridge logo" />
              </div>
              <span className="text-lg font-semibold tracking-wide">Pixel Bridge</span>
            </Link>

            <p className="mt-3 text-sm leading-6 text-white/60">
              We craft modern digital experiences focused on performance, creativity, and scalable products.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <div className="flex flex-wrap gap-1.5 lg:justify-end">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white hover:text-black"
                  >
                    <Icon sx={{ fontSize: 15 }} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-white/50 sm:flex-row">
          <p>&copy; 2026 Pixel Bridge. All rights reserved.</p>

          <div className="flex items-center gap-4">
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
