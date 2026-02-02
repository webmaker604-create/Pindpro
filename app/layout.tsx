import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "PindPro — Pinnatööd, mis kestavad",
  description:
    "Teostame kauakestvaid epopõrandaid ja pinnatöid. Korrektne ettevalmistus, puhas teostus ja kokkulepetest kinnipidamine.",
  icons: {
    icon: "/icon.svg",
  },
}

export const viewport: Viewport = {
  themeColor: "#12324a",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="et">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
