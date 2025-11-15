import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import { UIToastProvider } from "@/components/ui/toast";
import { ClientToastProvider } from "@/providers/ClientToastProvider";
import NextThemesProvider from "@/providers/NextThemesProvider";

export const metadata: Metadata = {
  title: "CARE - APEX RESEARCH",
  description:
    "Tinder-like platform to instead find lifelong connections, business partners, social teammates or just friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <NextThemesProvider attribute={"class"} defaultTheme="dark">
          <ClientToastProvider>
            <UIToastProvider>
              <Navbar />
              <main className="h-full">{children}</main>
            </UIToastProvider>
          </ClientToastProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
