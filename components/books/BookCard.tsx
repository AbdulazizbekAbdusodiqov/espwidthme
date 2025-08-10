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
    console.log(`${process.env.NEXT_PUBLIC_API_URL?.split('api/api')[0]}storage/${book.file}`);
    
    const downloadUrl = `${process.env.NEXT_PUBLIC_API_URL?.split('api/api')[0]}storage/${book.file}`;
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = book.title; // Set the file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
