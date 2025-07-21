"use client"

import type React from "react"
import Image from "next/image"
import styles from "./book-card.module.scss"

interface BookCardProps {
  book: {
    id: string
    name: string
    author: string
    genre: string
    imageUrl: string
    downloadUrl: string // Added downloadUrl to props
  }
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const handleDownload = () => {
    window.open(book.downloadUrl, "_blank") // Open URL in a new tab to trigger download
  }

  return (
    <div className={styles["book-card"]}>
      <div className={styles["book-image"]}>
        <Image src={book.imageUrl || "/placeholder.svg"} alt={book.name} width={150} height={200} />
      </div>
      <h2 className={styles["book-name"]}>{book.name}</h2>
      <div className={styles["book-info"]}>
        <span>Author:</span>
        <p>{book.author}</p>
      </div>
      <div className={styles["book-info"]}>
        <span>Genre:</span>
        <p>{book.genre}</p>
      </div>
      <button className={styles["download-button"]} onClick={handleDownload}>
        Download
      </button>
    </div>
  )
}
