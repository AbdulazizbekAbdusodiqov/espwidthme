"use client"
import { BookCard } from "@/components/books/BookCard"
import styles from "@/styles/books-page.module.scss"
import { useBooks } from "@/hooks/useBooks"

interface Book {
  id: string
  title: string
  author: string
  category: string
  image: string
  file: string
}


export default function BooksPageClient() {
  const { books, loading, error } = useBooks()

  if (loading) {
    return (
      <div className={styles["books-page-container"]}>
        <h1 className={styles["page-header"]}>Our Books Collection</h1>
        <p>Loading books...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles["books-page-container"]}>
        <h1 className={styles["page-header"]}>Our Books Collection</h1>
        <p className="error-message">{error}</p>
      </div>
    )
  }

  return (
    <div className={styles["books-page-container"]}>
      <h1 className={styles["page-header"]}>Our Books Collection</h1>
      <div className={styles["books-grid"]}>
        {books.map((book: Book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}
