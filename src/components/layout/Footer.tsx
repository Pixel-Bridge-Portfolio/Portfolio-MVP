import Link from "next/link";
import Image from "next/image";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/work" },
  { label: "Team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const skillLinks = [
  { label: "Backend", href: "/work?skill=backend" },
  { label: "Frontend", href: "/work?skill=frontend" },
  { label: "Graphic Design", href: "/work?skill=graphic-design" },
  { label: "Branding", href: "/work?skill=branding" },
  { label: "Video", href: "/work?skill=video" },
  { label: "Communications", href: "/work?skill=communications" },
  { label: "Social Media", href: "/work?skill=social-media" },
  { label: "AI", href: "/work?skill=ai" },
  { label: "Product Design", href: "/work?skill=product-design" },
];

const socials = [
  { label: "X", href: "https://twitter.com", icon: XIcon },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
  { label: "GitHub", href: "https://github.com", icon: GitHubIcon },
  { label: "Email", href: "mailto:hello@pixelbridge.studio", icon: EmailIcon },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: "1px solid rgba(255,255,255,0.12)", backgroundColor: "#111111", mt: 0 }}>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr 1fr" },
            gap: 3,
          }}
        >
          <Box sx={{ maxWidth: 520 }}>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <Image src="/logo final.png" alt="Pixel Bridge logo" width={36} height={36} />
              <Typography sx={{ fontWeight: 700, fontSize: "1.05rem", color: "#ffffff" }}>
                Pixel Bridge
              </Typography>
            </Link>
            <Typography sx={{ mt: 1.25, color: "#c7cdd4", lineHeight: 1.7, fontSize: "0.95rem" }}>
              We bridge design, development, and strategy to deliver digital outcomes that feel clear, practical, and premium.
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ color: "#ffffff", fontWeight: 700, fontSize: "0.9rem", mb: 1.2 }}>Quick Links</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.9 }}>
              {quickLinks.map((link) => (
                <Link key={link.label} href={link.href} style={{ color: "#d8dee6", fontSize: "0.9rem" }}>
                  {link.label}
                </Link>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography sx={{ color: "#ffffff", fontWeight: 700, fontSize: "0.9rem", mb: 1.2 }}>Our Skills</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
              {skillLinks.map((skill) => (
                <Link
                  key={skill.label}
                  href={skill.href}
                  style={{
                    color: "#e5ebf2",
                    fontSize: "0.8rem",
                    border: "1px solid rgba(255,255,255,0.22)",
                    padding: "6px 10px",
                    borderRadius: 999,
                  }}
                >
                  {skill.label}
                </Link>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 3,
            pt: 2,
            borderTop: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 1.5,
          }}
        >
          <Typography sx={{ color: "#a6afbb", fontSize: "0.82rem" }}>
            Copyright 2026 Pixel Bridge. Built with love by Pixel Bridge.
          </Typography>
          <Stack direction="row" spacing={1}>
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <IconButton
                  key={social.label}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  sx={{ border: "1px solid rgba(255,255,255,0.25)", color: "#e5e7eb" }}
                >
                  <Icon sx={{ fontSize: 18 }} />
                </IconButton>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
