import { LandingPageContent } from "@/components/landing/LandingPageContent"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ESPwithme - Your Ultimate English Learning Platform",
  description:
    "Unlock your English potential with interactive lessons, comprehensive resources, and gamified learning. Start your journey to fluency today!",
  keywords: ["English learning platform", "learn English", "ESL platform", "language fluency", "interactive English"],
  openGraph: {
    title: "ESPwithme - Your Ultimate English Learning Platform",
    description:
      "Unlock your English potential with interactive lessons, comprehensive resources, and gamified learning. Start your journey to fluency today!",
    url: "https://www.espwithme.uz/landing",
  },
}

export default function LandingPage() {
  return <LandingPageContent />
}
