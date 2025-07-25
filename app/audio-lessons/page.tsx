import { AudioCard } from "@/components/audios/AudioCard"
import styles from "@/styles/audio-lessons-page.module.scss"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ESPwithme - Audio Lessons",
  description:
    "Improve your English listening and speaking skills with our diverse collection of audio lessons and podcasts.",
  keywords: [
    "English audio lessons",
    "listening practice",
    "pronunciation audio",
    "ESL audio",
    "learn English with audio",
  ],
  openGraph: {
    title: "ESPwithme - Audio Lessons",
    description:
      "Improve your English listening and speaking skills with our diverse collection of audio lessons and podcasts.",
    url: "https://www.espwithme.uz/audio-lessons",
  },
}

// Audio darslar uchun mock ma'lumotlar
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

export default function AudioLessonsPage() {
  return (
    <div className={styles["audio-lessons-page-container"]}>
      <h1 className={styles["page-header"]}>Our Audio Lessons</h1>
      <div className={styles["audios-grid"]}>
        {audiosData.map((audio) => (
          <AudioCard key={audio.id} audio={audio} />
        ))}
      </div>
    </div>
  )
}
