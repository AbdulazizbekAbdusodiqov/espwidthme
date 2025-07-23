/* lib/api.ts */

import axios from "axios"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

// Mock API responses for demonstration
api.interceptors.request.use((config) => {
  // Simulate network delay
  return new Promise((resolve) => setTimeout(() => resolve(config), 500))
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors, e.g., redirect to login
      console.error("Unauthorized access, redirecting to login...")
      // window.location.href = '/auth/login'; // Example redirect
    }
    return Promise.reject(error)
  },
)

export default api
