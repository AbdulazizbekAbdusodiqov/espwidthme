import { Statistics } from "@/components/main-page/Statistics"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ESPwithme - Your Dashboard",
  description: "View your English learning progress, points, and statistics on your personalized dashboard.",
  keywords: ["dashboard", "progress tracking", "learning statistics", "ESPwithme", "esp with me", "esp withme", "espwith me"],
  openGraph: {
    title: "ESPwithme - Your Dashboard",
    description: "View your English learning progress, points, and statistics on your personalized dashboard.",
    url: "https://www.espwithme.uz/",
  },
}

export default function MainPage() {
  return <Statistics />
}
