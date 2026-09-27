import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Floreza Technologies | Engineering the Future",
  description: "World-class software, platforms, and digital solutions. Floreza Technologies brings global expertise to your next ambitious project.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
