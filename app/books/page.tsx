import { BookCard } from "@/components/books/BookCard"
import styles from "@/styles/books-page.module.scss" // Updated import path

// Mock data for books
const booksData = [
  {
    id: "1",
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    imageUrl: "/placeholder.svg?height=200&width=150&text=Gatsby",
    downloadUrl: "https://abdulazizdev.uz/resume/Abdulazizbek_Abdusodiqov_Resume.pdf", // Added download URL
  },
  {
    id: "2",
    name: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    imageUrl: "/placeholder.svg?height=200&width=150&text=1984",
    downloadUrl: "https://abdulazizdev.uz/resume/Abdulazizbek_Abdusodiqov_Resume.pdf", // Added download URL
  },
  {
    id: "3",
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    imageUrl: "/placeholder.svg?height=200&width=150&text=Mockingbird",
    downloadUrl: "https://abdulazizdev.uz/resume/Abdulazizbek_Abdusodiqov_Resume.pdf", // Added download URL
  },
  {
    id: "4",
    name: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    imageUrl: "/placeholder.svg?height=200&width=150&text=Pride",
    downloadUrl: "https://abdulazizdev.uz/resume/Abdulazizbek_Abdusodiqov_Resume.pdf", // Added download URL
  },
  {
    id: "5",
    name: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    imageUrl: "/placeholder.svg?height=200&width=150&text=Hobbit",
    downloadUrl: "https://abdulazizdev.uz/resume/Abdulazizbek_Abdusodiqov_Resume.pdf", // Added download URL
  },
  {
    id: "6",
    name: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    imageUrl: "/placeholder.svg?height=200&width=150&text=Dune",
    downloadUrl: "https://abdulazizdev.uz/resume/Abdulazizbek_Abdusodiqov_Resume.pdf", // Added download URL
  },
]

export default function BooksPage() {
  return (
    <div className={styles["books-page-container"]}>
      <h1 className={styles["page-header"]}>Our Books Collection</h1>
      <div className={styles["books-grid"]}>
        {booksData.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}
