"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, CheckCircle } from "lucide-react"
import styles from "./audio-card.module.scss"

interface AudioCardProps {
  audio: {
    id: string
    title: string
    description: string
    thumbnailUrl: string
    audioUrl: string // MP3 fayl URL manzili
  }
}

export const AudioCard: React.FC<AudioCardProps> = ({ audio }) => {
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    const completionStatus = localStorage.getItem(`audio_completed_${audio.id}`)
    if (completionStatus === "true") {
      setIsCompleted(true)
    }
  }, [audio.id])

  return (
    <div className={styles["audio-card"]}>
      <Link href={`/audio-lessons/${audio.id}`} className={styles["audio-link-wrapper"]}>
        <div className={styles["audio-thumbnail"]}>
          <Image src={audio.thumbnailUrl || "/placeholder.svg"} alt={audio.title} width={320} height={180} />
          <div className={styles["play-icon"]}>
            <Play />
          </div>
          {isCompleted && (
            <div className={styles["completion-indicator"]}>
              <CheckCircle size={30} />
            </div>
          )}
        </div>
        <h2 className={styles["audio-title"]}>{audio.title}</h2>
        <p className={styles["audio-description"]}>{audio.description}</p>
      </Link>
      {isCompleted && (
        <div className={styles["completed-text"]}>
          <CheckCircle size={18} /> Audio Tugallandi
        </div>
      )}
      <Link href={`/audio-lessons/${audio.id}`} className={styles["listen-button"]}>
        Listen Now
      </Link>
    </div>
  )
}
