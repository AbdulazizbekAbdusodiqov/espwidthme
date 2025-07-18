"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { loginUser } from "@/lib/authSlice"
import type { RootState, AppDispatch } from "@/lib/store"
import styles from "./auth.module.scss"

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch: AppDispatch = useDispatch()
  const { loading, error, isAuthenticated } = useSelector((state: RootState) => state.auth)
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/") // Redirect to main page on successful login
      // router.push("/") // Redirect to main page on successful login
    }
  }, [isAuthenticated, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(loginUser({ username, password }))
  }

  return (
    <div className={styles["auth-container"]}>
      <div className={styles["auth-card"]}>
        <h1 className={styles["auth-title"]}>Login</h1>
        <p className={styles["auth-subtitle"]}>Enter your credentials to access your account</p>
        <form onSubmit={handleSubmit}>
          <div className={styles["form-group"]}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className={styles["submit-button"]} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className={styles["link-text"]}>
          Don't have an account? <Link href="/auth/register">Register here</Link>
        </p>
      </div>
    </div>
  )
}
