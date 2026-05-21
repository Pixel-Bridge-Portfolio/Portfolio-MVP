"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export default function MobileMenu({ open, onClose, navItems }: MobileMenuProps) {
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) closeButtonRef.current?.focus();
  }, [open]);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        display: { xs: "block", md: "none" },
        "& .MuiDrawer-paper": {
          width: "85%",
          maxWidth: 360,
          p: 2.5,
          borderLeft: "1px solid #e5e7eb",
          backgroundColor: "#ffffff",
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Box>
          <Typography sx={{ fontWeight: 700, color: "#111111" }}>Navigation</Typography>
          <Typography sx={{ color: "#6b7280", fontSize: "0.85rem" }}>Explore the website</Typography>
        </Box>
        <IconButton ref={closeButtonRef} onClick={onClose} aria-label="Close mobile menu">
          <CloseIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
        {navItems.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              style={{
                border: `1px solid ${active ? "#d1d5db" : "#e5e7eb"}`,
                background: active ? "#f9fafb" : "#ffffff",
                color: active ? "#111111" : "#374151",
                borderRadius: 14,
                padding: "12px 14px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontWeight: 600,
              }}
            >
              <Icon sx={{ fontSize: 20 }} />
              {item.label}
            </Link>
          );
        })}
      </Box>
    </Drawer>
  );
}
