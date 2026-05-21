import { ReactNode } from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#ffffff", color: "#111111" }}>
      <Navbar />
      <Box component="main" sx={{ pt: "72px" }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
