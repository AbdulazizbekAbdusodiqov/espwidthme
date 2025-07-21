import { RegisterForm } from "@/components/auth/RegisterForm"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ESPwithme - Register",
  description: "Create your free ESPwithme account to start your English learning journey today!",
  keywords: ["register", "sign up", "create account", "free English learning", "ESPwithme register"],
  openGraph: {
    title: "ESPwithme - Register",
    description: "Create your free ESPwithme account to start your English learning journey today!",
    url: "https://www.espwithme.com/auth/register",
  },
}

export default function RegisterPage() {
  return <RegisterForm />
}
