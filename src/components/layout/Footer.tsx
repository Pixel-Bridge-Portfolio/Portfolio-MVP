import Link from "next/link";
import Image from "next/image";
import { Box, Chip, Container, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";

const skills = ["Backend", "Frontend", "Branding", "Video", "AI", "Product Design"];

const socials = [
  { label: "X", href: "https://twitter.com", icon: XIcon },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
  { label: "GitHub", href: "https://github.com", icon: GitHubIcon },
  { label: "Email", href: "mailto:hello@pixelbridge.studio", icon: EmailIcon },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: "1px solid rgba(255,255,255,0.12)", backgroundColor: "#111111", mt: 5 }}>
      <Container maxWidth="lg" sx={{ py: 4.5 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Box sx={{ maxWidth: 560 }}>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <Image src="/logo final.png" alt="Pixel Bridge logo" width={36} height={36} />
              <Typography sx={{ fontWeight: 700, fontSize: "1.05rem", color: "#ffffff" }}>
                Pixel Bridge
              </Typography>
            </Link>
            <Typography sx={{ mt: 1.25, color: "#c7cdd4", lineHeight: 1.7, fontSize: "0.95rem" }}>
              We build practical digital products with a cross-disciplinary team
              that connects strategy, design, and engineering.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "flex-start", lg: "flex-end" },
              gap: 1.5,
            }}
          >
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  size="small"
                  sx={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", color: "#f9fafb" }}
                />
              ))}
            </Box>

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
            Copyright 2026 Pixel Bridge. Built by the Pixel Bridge team.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="/privacy" style={{ color: "#cfd6de", fontSize: "0.82rem" }}>
              Privacy
            </Link>
            <Link href="/terms" style={{ color: "#cfd6de", fontSize: "0.82rem" }}>
              Terms
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
