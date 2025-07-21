"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link" // Link komponentini import qildik
import { Play, CheckCircle } from "lucide-react"
import styles from "./video-card.module.scss"

interface VideoCardProps {
  video: {
    id: string
    title: string
    description: string
    thumbnailUrl: string
    videoUrl: string // YouTube embed URL (masalan, "https://www.youtube.com/embed/VIDEO_ID")
  }
}

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [isCompleted, setIsCompleted] = useState(false)

  // Komponent yuklanganda localStorage dan tugallanish holatini tekshirish
  useEffect(() => {
    const completionStatus = localStorage.getItem(`video_completed_${video.id}`)
    if (completionStatus === "true") {
      setIsCompleted(true)
    }
  }, [video.id])

  return (
    <div className={styles["video-card"]}>
      <Link href={`/video-lessons/${video.id}`} className={styles["video-link-wrapper"]}>
        <div className={styles["video-thumbnail"]}>
          <Image src={video.thumbnailUrl || "/placeholder.svg"} alt={video.title} width={320} height={180} />
          <div className={styles["play-icon"]}>
            <Play />
          </div>
          {isCompleted && (
            <div className={styles["completion-indicator"]}>
              <CheckCircle size={30} />
            </div>
          )}
        </div>
        <h2 className={styles["video-title"]}>{video.title}</h2>
        <p className={styles["video-description"]}>{video.description}</p>
      </Link>
      {isCompleted && (
        <div className={styles["completed-text"]}>
          <CheckCircle size={18} /> Video Tugallandi
        </div>
      )}
      <Link href={`/video-lessons/${video.id}`} className={styles["watch-button"]}>
        Watch Now
      </Link>
    </div>
  )
}
