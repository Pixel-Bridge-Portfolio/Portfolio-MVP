import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Providers from "@/components/common/Providers";
import AppShell from "@/components/layout/AppShell";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Pixel Bridge",
  description: "Pixel Bridge Portfolio MVP",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full" suppressHydrationWarning>
        <AppRouterCacheProvider>
          <Providers>
            <AppShell>
            {children}
            </AppShell>
            </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
