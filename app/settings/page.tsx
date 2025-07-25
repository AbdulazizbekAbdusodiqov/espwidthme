import type { Metadata } from "next"
import { SettingsForm } from "@/components/settings/SettingsForm"

export const metadata: Metadata = {
  title: "ESPwithme - Settings",
  description: "Manage your ESPwithme account settings, preferences, and privacy options.",
  openGraph: {
    title: "ESPwithme - Settings",
    description: "Manage your ESPwithme account settings, preferences, and privacy options.",
    url: "https://www.espwithme.uz/settings",
  },
}

export default function SettingsPage() {
  return <SettingsForm />
}
