import { RegisterForm } from "@/components/auth/RegisterForm"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ESPwithme - Register",
  description: "Create your free ESPwithme account to start your English learning journey today!",
  keywords: ["register", "sign up", "create account", "free English learning", "ESPwithme register"],
  openGraph: {
    title: "ESPwithme - Register",
    description:
      "Create your ESPwithme account to access personalized English learning resources and track your progress.",
    url: "https://www.espwithme.uz/auth/register",
  },
}

export default function RegisterPage() {
  return <RegisterForm />
}
