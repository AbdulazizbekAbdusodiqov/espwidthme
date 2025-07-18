"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Book, Video, Headphones, Presentation, ShoppingCart, Settings } from "lucide-react"
import styles from "./sidebar.module.scss"

const navItems = [
  { name: "Main page", href: "/", icon: Home },
  { name: "Books", href: "/books", icon: Book },
  { name: "Video lessons", href: "/video-lessons", icon: Video },
  { name: "Audio lessons", href: "/audio-lessons", icon: Headphones },
  { name: "Presentations", href: "/presentations", icon: Presentation },
  { name: "Market", href: "/market", icon: ShoppingCart },
  { name: "Settings", href: "/settings", icon: Settings },
]

interface SidebarProps {
  isOpen: boolean
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const pathname = usePathname()

  return (
    <aside className={`${styles["sidebar-container"]} ${isOpen ? styles.open : styles.collapsed}`}>
      {/* <div className={styles.logo}>ESPwithme</div> */}
      <nav>
        <ul className={styles["nav-list"]}>
          {navItems.map((item) => (
            <li key={item.name} className={styles["nav-item"]}>
              <Link href={item.href} className={pathname === item.href ? styles.active : ""}>
                <item.icon />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* ThemeToggle is now in Navbar */}
    </aside>
  )
}
