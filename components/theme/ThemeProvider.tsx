"use client"

import type React from "react"
import { createContext, useState, useEffect, useContext, useCallback } from "react"
import styles from "./theme.module.scss"
import { Sun, Moon, Monitor } from "lucide-react"

type Theme = "light" | "dark" | "system"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>("system")

  const applyTheme = useCallback((selectedTheme: Theme) => {
    const root = document.documentElement
    root.classList.remove("light", "dark")

    if (selectedTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
    } else {
      root.classList.add(selectedTheme)
    }
    localStorage.setItem("theme", selectedTheme)
    setThemeState(selectedTheme)
  }, [])

  useEffect(() => {
    const storedTheme = (localStorage.getItem("theme") as Theme) || "system"
    applyTheme(storedTheme)

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system")
      }
    }
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [applyTheme, theme])

  const setTheme = useCallback(
    (newTheme: Theme) => {
      applyTheme(newTheme)
    },
    [applyTheme],
  )

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const nextTheme = () => {
    if (theme === "light") return "dark"
    if (theme === "dark") return "system"
    return "light"
  }

  const getIcon = () => {
    if (theme === "light") return <Sun size={16} />
    if (theme === "dark") return <Moon size={16} />
    return <Monitor size={16} />
  }

  const getLabel = () => {
    if (theme === "light") return "Light"
    if (theme === "dark") return "Dark"
    return "System"
  }

  return (
    <button onClick={() => setTheme(nextTheme())} className={styles["theme-toggle"]}>
      {getIcon()}
      {/* <span>{getLabel()}</span> */}
    </button>
  )
}
