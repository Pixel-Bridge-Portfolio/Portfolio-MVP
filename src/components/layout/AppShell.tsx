import { ReactNode } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      <main className="pt-16">{children}</main>

      <Footer />
    </div>
  );
}
