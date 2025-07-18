"use client"

import type React from "react"
import { useState } from "react"
import styles from "./settings.module.scss"

export const SettingsForm: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<string>("/placeholder.svg?height=120&width=120")
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")
  const [passwordChangeMessage, setPasswordChangeMessage] = useState("")

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfilePicture(event.target.result as string)
        }
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault()
    setPasswordChangeMessage("")

    if (newPassword !== confirmNewPassword) {
      setPasswordChangeMessage("New passwords do not match.")
      return
    }
    if (newPassword.length < 6) {
      setPasswordChangeMessage("New password must be at least 6 characters long.")
      return
    }
    // Simulate API call for password change
    console.log("Changing password:", { oldPassword, newPassword })
    setPasswordChangeMessage("Password changed successfully!")
    setOldPassword("")
    setNewPassword("")
    setConfirmNewPassword("")
  }

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate saving profile picture
    console.log("Saving profile picture:", profilePicture)
    alert("Profile settings saved!")
  }

  return (
    <div className={styles["settings-container"]}>
      <h1 className={styles["settings-header"]}>Account Settings</h1>

      <div className={styles["settings-card"]}>
        <h2 className={styles["settings-section-title"]}>Profile Picture</h2>
        <form onSubmit={handleProfileSave}>
          <div className={styles["file-upload-group"]}>
            <img
              src={profilePicture || "/placeholder.svg"}
              alt="Profile Preview"
              className={styles["profile-picture-preview"]}
            />
            <label htmlFor="profile-picture-upload" className={styles["file-input-label"]}>
              Upload New Picture
            </label>
            <input
              id="profile-picture-upload"
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className={styles["file-input"]}
            />
          </div>
          <button type="submit" className={styles["save-button"]}>
            Save Profile
          </button>
        </form>
      </div>

      <div className={styles["settings-card"]}>
        <h2 className={styles["settings-section-title"]}>Change Password</h2>
        <form onSubmit={handlePasswordChange}>
          <div className={styles["form-group"]}>
            <label htmlFor="old-password">Old Password</label>
            <input
              type="password"
              id="old-password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="new-password">New Password</label>
            <input
              type="password"
              id="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="confirm-new-password">Confirm New Password</label>
            <input
              type="password"
              id="confirm-new-password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />
          </div>
          {passwordChangeMessage && (
            <p className={passwordChangeMessage.includes("successfully") ? "success-message" : "error-message"}>
              {passwordChangeMessage}
            </p>
          )}
          <button type="submit" className={styles["save-button"]}>
            Change Password
          </button>
        </form>
      </div>
    </div>
  )
}
