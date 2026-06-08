import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sambalpur Academic Portal",
  description: "Academic support platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
