import type React from "react"
import "../styles/globals.scss"
import ClientLayout from "./ClientLayout"
import type { Metadata } from "next" // Metadata turini import qildik

// Global metadata
export const metadata: Metadata = {
  title: "ESPwithme - Unlock Your English Potential",
  description:
    "Your ultimate platform for interactive English lessons, comprehensive resources, and engaging gamified learning. Start your journey to fluency today!",
  keywords: [
    "English learning",
    "ESL",
    "EFL",
    "English lessons",
    "grammar",
    "vocabulary",
    "pronunciation",
    "online learning",
    "language platform",
  ],
  openGraph: {
    title: "ESPwithme - Unlock Your English Potential",
    description:
      "Your ultimate platform for interactive English lessons, comprehensive resources, and engaging gamified learning. Start your journey to fluency today!",
    url: "https://www.espwithme.uz", // To'g'ri domen
    siteName: "ESPwithme",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=ESPwithme+OpenGraph", // Loyihangiz uchun Open Graph rasm URL manzilini kiriting
        width: 1200,
        height: 630,
        alt: "ESPwithme English Learning Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ESPwithme - Unlock Your English Potential",
    description:
      "Your ultimate platform for interactive English lessons, comprehensive resources, and engaging gamified learning. Start your journey to fluency today!",
    creator: "@espwithme", // Twitter profilingizni kiriting
    images: ["/placeholder.svg?height=675&width=1200&text=ESPwithme+TwitterCard"], // Twitter Card rasm URL manzilini kiriting
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <head>
        <link rel="icon" href="/espwithme.ico" type="image/x-icon" />
      </head>
      <ClientLayout>{children}</ClientLayout>
    </>
  )
}
