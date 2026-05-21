"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MenuIcon from '@mui/icons-material/Menu';

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

import MobileMenu from "../layout/MobileMenu";

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 
          ${isScrolled
          ? "border-b border-white/10 bg-black/40 shadow-lg backdrop-blur-2xl"
          : "bg-white/5 backdrop-blur-md"
        }`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          <Link href="/" className="flex items-center gap-2 text-base font-semibold tracking-wide text-white">
            <div className="flex items-center h-10 w-10 justify-center">
              <img src="/logo final.png" className="h-full w-full object-contain" alt="Pixel Bridge logo" />
            </div>
            <span className="text-lg font-semibold tracking-wide text-white">Pixel Bridge</span>
          </Link>

          <nav className="hidden items-center gap-1.5 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link key={item.label} href={item.href} className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300
                  ${isActive ? "text-white" : "text-white/70 hover:text-white"}`}>

                  {item.label}
                  <span
                    className={`absolute inset-x-2 -bottom-1 h-0.75 rounded-full bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0"
                      }`}
                  />
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label="Open mobile menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 md:hidden"
          >
            <MenuIcon sx={{ fontSize: 20 }} />
          </button>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={navItems}
      />
    </>
  );
}


