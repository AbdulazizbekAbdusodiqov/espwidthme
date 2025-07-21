import { VideoCard } from "@/components/videos/VideoCard"
import styles from "@/styles/video-lessons-page.module.scss"

// Video darslar uchun mock ma'lumotlar
const videosData = [
  {
    id: "1",
    title: "English Grammar: Present Simple",
    description: "Learn the basics of Present Simple tense with examples and exercises.",
    thumbnailUrl: "/placeholder.svg?height=180&width=320&text=Present+Simple",
    videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE", // Haqiqiy YouTube embed URL misoli
  },
  {
    id: "2",
    title: "Vocabulary: Daily Routines",
    description: "Expand your vocabulary with common words and phrases for daily activities.",
    thumbnailUrl: "/placeholder.svg?height=180&width=320&text=Daily+Routines",
    videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
  },
  {
    id: "3",
    title: "Pronunciation: Vowel Sounds",
    description: "Master English vowel sounds with clear explanations and practice drills.",
    thumbnailUrl: "/placeholder.svg?height=180&width=320&text=Vowel+Sounds",
    videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
  },
  {
    id: "4",
    title: "Conversation Practice: Ordering Food",
    description: "Practice ordering food in a restaurant with this interactive conversation lesson.",
    thumbnailUrl: "/placeholder.svg?height=180&width=320&text=Ordering+Food",
    videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
  },
  {
    id: "5",
    title: "Idioms: Common English Idioms",
    description: "Discover and understand common English idioms to sound more natural.",
    thumbnailUrl: "/placeholder.svg?height=180&width=320&text=Idioms",
    videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
  },
  {
    id: "6",
    title: "Listening Comprehension: News Report",
    description: "Improve your listening skills by analyzing a short news report.",
    thumbnailUrl: "/placeholder.svg?height=180&width=320&text=News+Report",
    videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
  },
]

export default function VideoLessonsPage() {
  return (
    <div className={styles["video-lessons-page-container"]}>
      <h1 className={styles["page-header"]}>Our Video Lessons</h1>
      <div className={styles["videos-grid"]}>
        {videosData.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}
