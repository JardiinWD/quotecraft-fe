
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
    // --> State
    // userData: IAuthData | null
    userData: null
    isLoggedIn: boolean // TODO: To be replaced with userData logic, for now it's a boolean and mocked
    expirationDate: Date | null
    // --> Actions
    clearUserId: () => void
}

const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            // --> State
            userData: null,
            isLoggedIn: true,
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
