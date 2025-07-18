"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { registerUser } from "@/lib/authSlice"
import type { RootState, AppDispatch } from "@/lib/store"
import styles from "./auth.module.scss"

export const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    phone: "",
    email: "",
    password: "",
    password_confirmation: "",
  })
  const [passwordError, setPasswordError] = useState("")
  const dispatch: AppDispatch = useDispatch()
  const { loading, error, isAuthenticated } = useSelector((state: RootState) => state.auth)
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/") // Redirect to main page on successful registration
    }
  }, [isAuthenticated, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setPasswordError("")

    if (formData.password !== formData.password_confirmation) {
      setPasswordError("Passwords do not match")
      return
    }

    dispatch(registerUser(formData))
  }

  return (
    <div className={styles["auth-container"]}>
      <div className={styles["auth-card"]}>
        <h1 className={styles["auth-title"]}>Register</h1>
        <p className={styles["auth-subtitle"]}>Create your account to start learning English</p>
        <form onSubmit={handleSubmit}>
          <div className={styles["form-group"]}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              required
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className={styles["submit-button"]} disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className={styles["link-text"]}>
          Already have an account? <Link href="/auth/login">Login here</Link>
        </p>
      </div>
    </div>
  )
}
