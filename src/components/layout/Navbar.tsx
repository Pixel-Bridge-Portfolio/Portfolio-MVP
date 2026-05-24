"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import MobileMenu from "./MobileMenu";
import { motionTransition } from "@/lib/animations";

const navItems = [
  { label: "Home", href: "/", icon: HomeOutlinedIcon },
  { label: "About", href: "/about", icon: InfoOutlinedIcon },
  { label: "Services", href: "/services", icon: DesignServicesOutlinedIcon },
  { label: "Work", href: "/work", icon: WorkOutlineOutlinedIcon },
  { label: "Team", href: "/team", icon: GroupsOutlinedIcon },
  { label: "Blog", href: "/blog", icon: ArticleOutlinedIcon },
  { label: "Contact", href: "/contact", icon: MailOutlineOutlinedIcon },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#000000",
          borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.16)" : "1px solid rgba(255,255,255,0.10)",
          color: "#ffffff",
        }}
      >
        <Toolbar sx={{ mx: "auto", width: "100%", maxWidth: 1200, minHeight: "72px !important" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, flexGrow: 1 }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Image src="/icon.png" alt="Pixel Bridge logo" width={34} height={34} />
              <Typography sx={{ fontWeight: 700, fontSize: "1.05rem", letterSpacing: "0.01em", color: "#ffffff" }}>
                Pixel Bridge
              </Typography>
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}>
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`nav-link-underline${active ? " active" : ""}`}
                  style={{
                    padding: "8px 12px",
                    borderRadius: 999,
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: active ? "#ffffff" : "#d1d5db",
                    border: "1px solid transparent",
                    transition: motionTransition.navUnderline,
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </Box>

          <IconButton
            aria-label="Open mobile menu"
            onClick={() => setMobileOpen(true)}
            sx={{
              display: { xs: "inline-flex", md: "none" },
              ml: 0.5,
              border: "1px solid rgba(255,255,255,0.28)",
              color: "#ffffff",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} navItems={navItems} />
    </>
  );
}
