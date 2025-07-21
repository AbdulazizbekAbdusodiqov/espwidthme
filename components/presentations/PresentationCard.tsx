"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { CheckCircle, Download } from "lucide-react"
import styles from "./presentation-card.module.scss"

interface PresentationCardProps {
  presentation: {
    id: string
    title: string
    description: string
    thumbnailUrl: string
    downloadUrl: string // Yuklab olish URL manzili
  }
}

export const PresentationCard: React.FC<PresentationCardProps> = ({ presentation }) => {
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    const completionStatus = localStorage.getItem(`presentation_completed_${presentation.id}`)
    if (completionStatus === "true") {
      setIsCompleted(true)
    }
  }, [presentation.id])

  const handleDownload = () => {
    window.open(presentation.downloadUrl, "_blank") // URL ni yangi tabda ochish
    // Yuklab olish tugmasi bosilganda prezentatsiyani tugallangan deb belgilash
    setIsCompleted(true)
    localStorage.setItem(`presentation_completed_${presentation.id}`, "true")
    console.log(`Prezentatsiya ${presentation.title} yuklab olindi va tugallandi!`)
  }

  return (
    <div className={styles["presentation-card"]}>
      {/* Thumbnail va ma'lumotlar endi link emas, shuning uchun presentation-link-wrapper olib tashlandi */}
      <div className={styles["presentation-thumbnail"]}>
        <Image
          src={presentation.thumbnailUrl || "/placeholder.svg"}
          alt={presentation.title}
          width={320}
          height={180}
        />
        {isCompleted && (
          <div className={styles["completion-indicator"]}>
            <CheckCircle size={30} />
          </div>
        )}
      </div>
      <h2 className={styles["presentation-title"]}>{presentation.title}</h2>
      <p className={styles["presentation-description"]}>{presentation.description}</p>

      {isCompleted && (
        <div className={styles["completed-text"]}>
          <CheckCircle size={18} /> Prezentatsiya Tugallandi
        </div>
      )}
      <div className={styles["button-group"]}>
        <button className={styles["download-button"]} onClick={handleDownload}>
          <Download size={18} /> Download
        </button>
      </div>
    </div>
  )
}
