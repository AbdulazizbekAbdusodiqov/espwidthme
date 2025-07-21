/* lib/authSlice.ts */

import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"
import api from "./api"
import type { AppDispatch } from "./store"

interface User {
  username: string
  email: string
  first_name?: string
  last_name?: string
  phone?: string,
  password?: string,
  password_confirmation?: string,
}

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
}

// Mock API calls
const mockRegisterApi = async (userData: User) => {
  const response = await api.post("/register", userData)
  console.log(response);
  
  return response.data // Faqat data qismini qaytar
}

// mockLoginApi funksiyasini olib tashlaymiz

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData: User, { rejectWithValue, dispatch }) => {
    try {
      const data: any = await mockRegisterApi(userData)
      // Ro'yxatdan muvaffaqiyatli o'tgandan so'ng avtomatik login
      await dispatch(loginUser({ username: userData.username, password: userData.password! }))
      return data
    } catch (error: any) {
      return rejectWithValue(error.message || "Registration failed")
    }
  }
)

export const loginUser = createAsyncThunk("auth/loginUser", async (credentials: { username: string; password: string }, { rejectWithValue }) => {
  try {
    const response = await api.post("/login", credentials)
    return response.data // Faqat serializable qismini return qilamiz
  } catch (error: any) {
    // AxiosError bo'lsa, error.response.data.message ni olish mumkin
    const message = error.response?.data?.message || error.message || "Login failed"
    return rejectWithValue(message)
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null
      state.isAuthenticated = false
      state.error = null
      localStorage.removeItem("authToken") // Clear token from storage
    },
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
      localStorage.setItem("authToken", action.payload)
    },
    loadUserFromStorage: (state) => {
      const token = localStorage.getItem("authToken")
      if (token) {
        state.token = token
        state.isAuthenticated = true
        // In a real app, you'd decode the token or fetch user info
        state.user = { username: "Guest", email: "guest@example.com" }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
        state.isAuthenticated = true
        localStorage.setItem("authToken", action.payload.token)
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
        state.isAuthenticated = true
        localStorage.setItem("authToken", action.payload.token)
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { logout, setAuthToken, loadUserFromStorage } = authSlice.actions
export default authSlice.reducer
