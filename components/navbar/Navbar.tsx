"use client"

import type React from "react"
import { useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
import { Menu, LogOut } from "lucide-react"
import { logout } from "@/lib/authSlice"
import type { AppDispatch } from "@/lib/store"
import styles from "./navbar.module.scss"
import { ThemeToggle } from "@/components/theme/ThemeProvider" // Import ThemeToggle

interface NavbarProps {
  toggleSidebar: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const dispatch: AppDispatch = useDispatch()
  const router = useRouter()

  const handleLogout = () => {
    dispatch(logout())
    router.push("/auth/login")
  }

  return (
    <nav className={styles["navbar-container"]}>
      <div className={styles["left-section"]}>
        <button onClick={toggleSidebar} className={styles["sidebar-toggle-button"]} aria-label="Toggle Sidebar">
          <Menu />
        </button>
        <div className={styles["navbar-logo"]}>ESPwithme</div>
      </div>
      <div className={styles["right-section"]}>
        <ThemeToggle /> {/* Add ThemeToggle back here */}
        <button onClick={handleLogout} className={styles["logout-button"]}>
          <LogOut size={18} style={{ marginRight: "0.5em", color:'gray' }} /> 
        </button>
      </div>
    </nav>
  )
}
