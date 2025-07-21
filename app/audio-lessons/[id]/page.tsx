"use client"

import { useState, useEffect, useRef } from "react"
import { useParams } from "next/navigation"
import { CheckCircle } from "lucide-react"
import styles from "@/styles/audio-player-page.module.scss"

// Mock data for audio lessons (bu ma'lumotlar kelajakda API dan keladi)
const audiosData = [
  {
    id: "1",
    title: "Beginner English Conversation",
    description:
      "Practice basic English conversations for everyday situations. This audio lesson focuses on greetings, introductions, and simple questions.",
    thumbnailUrl: "/placeholder.svg?height=180&width=320&text=Beginner+Conversation",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // MP3 fayl URL misoli
  },
  {
    id: "2",
    title: "Intermediate Listening Practice",
    description:
      "Improve your listening skills with an intermediate-level audio story. Focus on understanding context and details.",
    thumbnailUrl: "/placeholder.svg?height=180&width=320&text=Intermediate+Listening",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: "3",
    title: "Advanced Pronunciation Drills",
    description: "Refine your pronunciation with advanced drills focusing on tricky sounds and intonation patterns.",
    thumbnailUrl: "/placeholder.svg?height=180&width=320&text=Advanced+Pronunciation",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: "4",
    title: "Business English Phrases",
    description: "Learn essential phrases for business meetings, presentations, and professional communication.",
    thumbnailUrl: "/placeholder.svg?height=180&width=320&text=Business+English",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    id: "5",
    title: "Travel English Guide",
    description:
      "Prepare for your next trip with common English phrases used in airports, hotels, and tourist attractions.",
    thumbnailUrl: "/placeholder.svg?height=180&width=320&text=Travel+English",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
]

export default function AudioPlayerPage() {
  const { id } = useParams()
  const audio = audiosData.find((a) => a.id === id)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isCompleted, setIsCompleted] = useState(false)
  const [showCompletionOverlay, setShowCompletionOverlay] = useState(false)

  useEffect(() => {
    if (!audio) return

    // localStorage dan tugallanish holatini yuklash
    const completionStatus = localStorage.getItem(`audio_completed_${audio.id}`)
    if (completionStatus === "true") {
      setIsCompleted(true)
    }

    const currentAudio = audioRef.current

    const handleEnded = () => {
      setIsCompleted(true)
      localStorage.setItem(`audio_completed_${audio.id}`, "true")
      setShowCompletionOverlay(true)
      console.log(`Audio ${audio.title} tugallandi!`)
      // Bu yerda ball berish logikasini ishga tushirishingiz mumkin
    }

    if (currentAudio) {
      currentAudio.addEventListener("ended", handleEnded)
    }

    return () => {
      if (currentAudio) {
        currentAudio.removeEventListener("ended", handleEnded)
      }
    }
  }, [id, audio])

  if (!audio) {
    return (
      <div className={styles["audio-player-page-container"]}>
        <h1 className={styles["page-header"]}>Audio Not Found</h1>
        <p>The audio lesson you are looking for does not exist.</p>
      </div>
    )
  }

  return (
    <div className={styles["audio-player-page-container"]}>
      <h1 className={styles["page-header"]}>{audio.title}</h1>

      <div className={styles["audio-player-wrapper"]}>
        <audio ref={audioRef} controls className={styles["audio-element"]}>
          <source src={audio.audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        {showCompletionOverlay && isCompleted && (
          <div className={styles["completion-overlay"]}>
            <CheckCircle size={80} />
            <span>Audio Tugallandi!</span>
          </div>
        )}
      </div>

      <div className={styles["audio-details"]}>
        <h2 className={styles["audio-details-title"]}>Description</h2>
        <p className={styles["audio-details-description"]}>{audio.description}</p>
        {isCompleted && (
          <div className={styles["completion-status"]}>
            <CheckCircle size={24} />
            <span>Bu audio tugallangan.</span>
          </div>
        )}
      </div>
    </div>
  )
}
