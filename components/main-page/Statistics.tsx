"use client"

import type React from "react"
import { Award, CalendarDays, Video, Book, Headphones } from "lucide-react"
import styles from "./main-page.module.scss"

export const Statistics: React.FC = () => {
  const studentStats = {
    points: 1250,
    loginDays: 45,
    videosWatched: 23,
    booksDownloaded: 15,
    audiosListened: 30,
  }

  return (
    <div className={styles["main-page-container"]}>
      <h1 className={styles.header}>Welcome to ESPwithme!</h1>

      <div className={styles["stats-grid"]}>
        <div className={styles["stat-card"]}>
          <Award className={styles.icon} />
          <div className={styles.value}>{studentStats.points}</div>
          <div className={styles.label}>Total Points</div>
        </div>
        <div className={styles["stat-card"]}>
          <CalendarDays className={styles.icon} />
          <div className={styles.value}>{studentStats.loginDays}</div>
          <div className={styles.label}>Login Days</div>
        </div>
      </div>

      <div className={styles["learning-stats-section"]}>
        <h2 className={styles["learning-stats-title"]}>Your Learning Progress</h2>
        <div className={styles["learning-stats-list"]}>
          <div className={styles["learning-stat-item"]}>
            <span className={styles["stat-label"]}>
              <Video /> Videos Watched
            </span>
            <span className={styles["stat-value"]}>{studentStats.videosWatched}</span>
          </div>
          <div className={styles["learning-stat-item"]}>
            <span className={styles["stat-label"]}>
              <Book /> Books Downloaded
            </span>
            <span className={styles["stat-value"]}>{studentStats.booksDownloaded}</span>
          </div>
          <div className={styles["learning-stat-item"]}>
            <span className={styles["stat-label"]}>
              <Headphones /> Audio Lessons Listened
            </span>
            <span className={styles["stat-value"]}>{studentStats.audiosListened}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
