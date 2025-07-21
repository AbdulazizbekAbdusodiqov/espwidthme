"use client"
import { useState, useEffect, useRef } from "react"
import { useParams } from "next/navigation"
import { CheckCircle } from "lucide-react"
import styles from "@/styles/video-player-page.module.scss"

// TypeScript uchun global YT obyektini e'lon qilish
declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

// Mock data for video lessons (bu ma'lumotlar kelajakda API dan keladi)
const videosData = [
  {
    id: "1",
    title: "English Grammar: Present Simple",
    description:
      "Learn the basics of Present Simple tense with examples and exercises. This video covers the formation, usage, and common mistakes related to the Present Simple tense. Perfect for beginners and those looking to refresh their grammar.",
    thumbnailUrl: "/placeholder.svg?height=180&width=320&text=Present+Simple",
    videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE", // Haqiqiy YouTube embed URL misoli
  },
  {
    id: "2",
    title: "Vocabulary: Daily Routines",
    description:
      "Expand your vocabulary with common words and phrases for daily activities. This lesson helps you describe your day from morning to night, including verbs and nouns related to everyday life.",
    thumbnailUrl: "/placeholder.svg?height=180&width=320&text=Daily+Routines",
    videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
  },
  {
    id: "3",
    title: "Pronunciation: Vowel Sounds",
    description:
      "Master English vowel sounds with clear explanations and practice drills. Improve your clarity and confidence in speaking English by focusing on key vowel sounds.",
    thumbnailUrl: "/placeholder.svg?height=180&width=320&text=Vowel+Sounds",
    videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
  },
  {
    id: "4",
    title: "Conversation Practice: Ordering Food",
    description:
      "Practice ordering food in a restaurant with this interactive conversation lesson. Learn useful phrases and etiquette for dining out in English-speaking countries.",
    thumbnailUrl: "/placeholder.svg?height=180&width=320&text=Ordering+Food",
    videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
  },
  {
    id: "5",
    title: "Idioms: Common English Idioms",
    description:
      "Discover and understand common English idioms to sound more natural. This video explains the meaning and usage of popular idioms, helping you enrich your English expression.",
    thumbnailUrl: "/placeholder.svg?height=180&width=320&text=Idioms",
    videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
  },
  {
    id: "6",
    title: "Listening Comprehension: News Report",
    description:
      "Improve your listening skills by analyzing a short news report. This lesson focuses on understanding spoken English in a formal context and identifying key information.",
    thumbnailUrl: "/placeholder.svg?height=180&width=320&text=News+Report",
    videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
  },
]

export default function VideoPlayerPage() {
  const { id } = useParams()
  const video = videosData.find((v) => v.id === id)
  const playerRef = useRef<HTMLDivElement>(null)
  const youtubePlayer = useRef<any>(null)
  const [isCompleted, setIsCompleted] = useState(false)
  const [showCompletionOverlay, setShowCompletionOverlay] = useState(false)

  useEffect(() => {
    if (!video) return // Video topilmasa hech narsa qilmaymiz

    // localStorage dan tugallanish holatini yuklash
    const completionStatus = localStorage.getItem(`video_completed_${video.id}`)
    if (completionStatus === "true") {
      setIsCompleted(true)
    }

    // YouTube IFrame Player API ni yuklash
    const loadYouTubeAPI = () => {
      if (!window.YT) {
        const tag = document.createElement("script")
        tag.src = "https://www.youtube.com/iframe_api"
        const firstScriptTag = document.getElementsByTagName("script")[0]
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

        window.onYouTubeIframeAPIReady = () => {
          initializePlayer()
        }
      } else {
        initializePlayer()
      }
    }

    const initializePlayer = () => {
      if (window.YT && playerRef.current && !youtubePlayer.current) {
        youtubePlayer.current = new window.YT.Player(playerRef.current, {
          videoId: video.videoUrl.split("/").pop()?.split("?")[0], // Embed URL dan video ID ni ajratib olish
          playerVars: {
            autoplay: 1,
            controls: 1,
            modestbranding: 1,
            rel: 0,
            showinfo: 0, // Video ma'lumotlarini yashirish
            iv_load_policy: 3, // Annotatsiyalarni o'chirish
          },
          events: {
            onReady: (event: any) => {
              event.target.playVideo()
            },
            onStateChange: (event: any) => {
              if (event.data === window.YT.PlayerState.ENDED) {
                setIsCompleted(true)
                localStorage.setItem(`video_completed_${video.id}`, "true")
                setShowCompletionOverlay(true) // Overlayni ko'rsatish
                console.log(`Video ${video.title} tugallandi!`)
                // Bu yerda ball berish logikasini ishga tushirishingiz mumkin
              } else if (event.data === window.YT.PlayerState.PLAYING) {
                setShowCompletionOverlay(false) // O'ynayotganda overlayni yashirish
              }
            },
          },
        })
      }
    }

    loadYouTubeAPI()

    // Komponent o'chirilganda playerni tozalash
    return () => {
      if (youtubePlayer.current) {
        youtubePlayer.current.destroy()
        youtubePlayer.current = null
      }
    }
  }, [id, video]) // id va video o'zgarganda useEffect qayta ishga tushadi

  if (!video) {
    return (
      <div className={styles["video-player-page-container"]}>
        <h1 className={styles["page-header"]}>Video Not Found</h1>
        <p>The video you are looking for does not exist.</p>
      </div>
    )
  }

  return (
    <div className={styles["video-player-page-container"]}>
      <h1 className={styles["page-header"]}>{video.title}</h1>

      <div className={styles["video-player-wrapper"]}>
        <div ref={playerRef} className={styles["youtube-iframe"]}></div>
        {showCompletionOverlay && isCompleted && (
          <div className={styles["completion-overlay"]}>
            <CheckCircle size={80} />
            <span>Video Tugallandi!</span>
          </div>
        )}
      </div>

      <div className={styles["video-details"]}>
        <h2 className={styles["video-details-title"]}>Description</h2>
        <p className={styles["video-details-description"]}>{video.description}</p>
        {isCompleted && (
          <div className={styles["completion-status"]}>
            <CheckCircle size={24} />
            <span>Bu video tugallangan.</span>
          </div>
        )}
      </div>
    </div>
  )
}
