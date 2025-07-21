import { MarketPlaceholder } from "@/components/market/MarketPlaceholder"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ESPwithme - Market (Coming Soon)",
  description: "Discover exclusive English learning resources, tools, and more in our upcoming ESPwithme Market.",
  keywords: ["English learning tools", "ESL resources", "language learning market", "coming soon"],
  openGraph: {
    title: "ESPwithme - Market (Coming Soon)",
    description: "Discover exclusive English learning resources, tools, and more in our upcoming ESPwithme Market.",
    url: "https://www.espwithme.com/market",
  },
}

export default function MarketPage() {
  return <MarketPlaceholder />
}
