import { PresentationCard } from "@/components/presentations/PresentationCard"
import styles from "@/styles/presentations-page.module.scss"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ESPwithme - English Presentations",
  description:
    "Download and learn from our collection of English presentations on various topics, from public speaking to academic writing.",
  keywords: ["English presentations", "public speaking", "academic writing", "business English", "ESL presentations"],
  openGraph: {
    title: "ESPwithme - English Presentations",
    description:
      "Download and learn from our collection of English presentations on various topics, from public speaking to academic writing.",
    url: "https://www.espwithme.com/presentations",
  },
}

// Prezentatsiyalar uchun mock ma'lumotlar
const presentationsData = [
  {
    id: "1",
    title: "Effective Public Speaking",
    description:
      "Learn techniques for delivering impactful presentations and overcoming stage fright. This presentation covers structuring your speech, engaging your audience, and using visual aids effectively.",
    thumbnailUrl: "/placeholder.svg?height=180&width=320&text=Public+Speaking",
    downloadUrl:
      "https://blob.v0.dev/some-unique-id/Creative%20Writing%20-%20Bachelor%20of%20Arts%20in%20English%20_%20by%20Slidesgo.pptx", // Sizning haqiqiy blob URL manzilingizni bu yerga qo'ying
  },
  {
    id: "2",
    title: "Business Communication Skills",
    description:
      "Master essential communication skills for the workplace, including email etiquette, meeting participation, and negotiation.",
    thumbnailUrl: "/placeholder.svg?height=180&width=320&text=Business+Comm",
    downloadUrl: "https://abdulazizdev.uz/resume/Abdulazizbek_Abdusodiqov_Resume.pdf",
  },
  {
    id: "3",
    title: "Academic Writing Workshop",
    description:
      "A comprehensive guide to academic writing, covering research, essay structure, citation, and avoiding plagiarism.",
    thumbnailUrl: "/placeholder.svg?height=180&width=320&text=Academic+Writing",
    downloadUrl: "https://abdulazizdev.uz/resume/Abdulazizbek_Abdusodiqov_Resume.pdf",
  },
  {
    id: "4",
    title: "Interview Preparation Strategies",
    description:
      "Prepare for job interviews with confidence. This presentation offers tips on common interview questions, body language, and follow-up.",
    thumbnailUrl: "/placeholder.svg?height=180&width=320&text=Interview+Prep",
    downloadUrl: "https://abdulazizdev.uz/resume/Abdulazizbek_Abdusodiqov_Resume.pdf",
  },
]

export default function PresentationsPage() {
  return (
    <div className={styles["presentations-page-container"]}>
      <h1 className={styles["page-header"]}>Our Presentations</h1>
      <div className={styles["presentations-grid"]}>
        {presentationsData.map((presentation) => (
          <PresentationCard key={presentation.id} presentation={presentation} />
        ))}
      </div>
    </div>
  )
}
