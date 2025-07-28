"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Provider, useSelector } from "react-redux"
import { store, type RootState } from "@/lib/store"
import { ThemeProvider } from "@/components/theme/ThemeProvider"
import { Sidebar } from "@/components/sidebar/Sidebar"
import { Navbar } from "@/components/navbar/Navbar"
import { AuthNavbar } from "@/components/navbar/AuthNavbar"
import { loadUserFromStorage } from "@/lib/authSlice"
import { usePathname, useRouter } from "next/navigation"
import { Toaster } from "@/components/ui/toaster"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ThemeProvider>
            <ClientLayoutInner>{children}</ClientLayoutInner>
            <Toaster />
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  )
}

function ClientLayoutInner({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)
  const pathname = usePathname()
  const router = useRouter()

  const protectedRoutes = ["/", "/books", "/video-lessons", "/audio-lessons", "/presentations", "/market", "/settings"]
  const authRoutes = ["/auth/login", "/auth/register"]

  useEffect(() => {
    store.dispatch(loadUserFromStorage())

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false)
      } else {
        setIsSidebarOpen(true)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      if (pathname === "/landing" || authRoutes.includes(pathname)) {
        router.push("/")
      }
    } else {
      if (protectedRoutes.includes(pathname)) {
        router.push("/landing")
      }
    }
  }, [isAuthenticated, pathname, router])

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  if (
    (isAuthenticated && (pathname === "/landing" || authRoutes.includes(pathname))) ||
    (!isAuthenticated && protectedRoutes.includes(pathname))
  ) {
    return null
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {isAuthenticated ? <Navbar toggleSidebar={toggleSidebar} /> : <AuthNavbar />}
      <div style={{ display: "flex", flexGrow: 1 }}>
        {isAuthenticated && <Sidebar isOpen={isSidebarOpen} />}
        <main
          style={{
            flexGrow: 1,
            // padding: "2em",
            paddingTop:"2em",
            // paddingBottom:"2em",
            backgroundColor: "var(--color-background)",
            color: "var(--color-text)",
            transition: "margin-left 0.3s ease, background-color 0.3s ease, color 0.3s ease",
            // marginLeft: isAuthenticated && isSidebarOpen ? "250px" : "0",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  )
}
