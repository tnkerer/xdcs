import { Metadata } from "next";

import "./globals.scss";

export const metadata: Metadata = {
  title: 'XDCS',
  description: 'XDCS Official Website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
