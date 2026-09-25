import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cabaran Guru Muda: Misi DSKP",
  description: "Checkpoint 4: jelajah sekolah, bantu tiga orang guru dan kumpulkan tiga bintang dalam Misi DSKP.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms">
      <body className="antialiased">{children}</body>
    </html>
  );
}
