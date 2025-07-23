"use client"

import { useState, useEffect, useCallback } from "react"
// Update the import path if your api file is located elsewhere, for example:
import api from "../lib/api"

interface Book {
  id: string
  title: string
  author: string
  category: string
  image: string
  file: string
}

interface UseBooksResult {
  books: Book[]
  loading: boolean
  error: string | null
  refetchBooks: () => void
}

export function useBooks(): UseBooksResult {
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchBooks = useCallback(async () => {
    try {
      setLoading(true)
      setError(null) // Har safar yuklashdan oldin xatoni tozalash
      const response = await api.get("/book/index") // API manzilini /api/book ga o'zgartirdik
      console.log("Fetched books data (from hook):", response.data.data)
      setBooks(response.data.data)
    } catch (err) {
      console.error("Error fetching books (from hook):", err)
      setError("Failed to load books. Please try again later.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])

  return { books, loading, error, refetchBooks: fetchBooks }
}
