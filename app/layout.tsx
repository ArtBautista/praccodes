import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/Provider";

const arimo = Arimo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Odyssey [ADMIN]",
  description: "Odyssey: LMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={arimo.className}>{children}</body>
      </AuthProvider>
    </html>
  );
}
