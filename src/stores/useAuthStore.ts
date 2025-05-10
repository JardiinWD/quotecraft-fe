
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
    // --> State
    // userData: IAuthData | null
    userData: null
    expirationDate: Date | null
    // --> Actions
    clearUserId: () => void
}

const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            // --> State
            userData: null,
            expirationDate: null,
            // --> Actions
            clearUserId: () => set({ userData: null })
        }),
        {
            name: 'Quote Craft - Authentication Store'
        }
    )
)

export default useAuthStore
