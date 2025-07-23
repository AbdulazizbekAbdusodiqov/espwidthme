"use client"

import type React from "react"
import Image from "next/image"
import styles from "./book-card.module.scss"

interface BookCardProps {
  book: {
    id: string
    title: string
    author: string
    category: string
    image: string
    file: string // Added downloadUrl to props
  }
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const handleDownload = () => {
    window.open(book.file, "_blank") // Open URL in a new tab to trigger download
  }

  return (
    <div className={styles["book-card"]}>
      <div className={styles["book-image"]}>
        <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}/storage/${book.image}` || "/placeholder.svg"} alt={book.title} width={150} height={200} />
      </div>
      <h2 className={styles["book-name"]}>{book.title}</h2>
      <div className={styles["book-info"]}>
        <span>Author:</span>
        <p>{book.author }</p>
      </div>
      <div className={styles["book-info"]}>
        <span>Category:</span>
        <p>{book.category || "reading"}</p>
      </div>
      <button className={styles["download-button"]} onClick={handleDownload}>
        Download
      </button>
    </div>
  )
}
