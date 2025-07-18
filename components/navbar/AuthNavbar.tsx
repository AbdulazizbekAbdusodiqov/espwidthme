"use client"

import type React from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme/ThemeProvider"
import styles from "./navbar.module.scss"

export const AuthNavbar: React.FC = () => {
  return (
    <nav className={styles["navbar-container"]}>
      <div className={styles["left-section"]}>
        <Link href="/landing" className={styles["navbar-logo"]}>
          ESPwithme
        </Link>
      </div>
      <div className={styles["right-section"]}>
        <ThemeToggle />
        <Link href="/auth/login" className={styles["auth-link-button"]}>
          Login
        </Link>
        <Link href="/auth/register" className={`${styles["auth-link-button"]} ${styles.secondary}`}>
          Sign Up
        </Link>
      </div>
    </nav>
  )
}
