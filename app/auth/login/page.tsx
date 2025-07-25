import { LoginForm } from "@/components/auth/LoginForm"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ESPwithme - Login",
  description: "Log in to your ESPwithme account to access your personalized English learning dashboard and resources.",
  keywords: ["login", "sign in", "account access", "ESPwithme login"],
  openGraph: {
    title: "ESPwithme - Login",
    description:
      "Log in to your ESPwithme account to access your personalized English learning dashboard and resources.",
    url: "https://www.espwithme.uz/auth/login",
  },
}

export default function LoginPage() {
  return <LoginForm />
}
