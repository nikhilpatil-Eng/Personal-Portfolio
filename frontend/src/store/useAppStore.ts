import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Theme, ContactFormStatus } from '@/types'

interface AppState {
  // Theme
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  
  // Contact Form
  contactFormStatus: ContactFormStatus
  setContactFormStatus: (status: Partial<ContactFormStatus>) => void
  resetContactFormStatus: () => void
  
  // Loading
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  
  // Navigation
  activeSection: string
  setActiveSection: (section: string) => void
  
  // UI State
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  toggleMobileMenu: () => void
  
  // Notifications
  notifications: Array<{
    id: string
    type: 'success' | 'error' | 'info' | 'warning'
    message: string
    duration?: number
  }>
  addNotification: (notification: Omit<AppState['notifications'][0], 'id'>) => void
  removeNotification: (id: string) => void
  clearNotifications: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Theme
      theme: 'light',
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set((state) => ({ 
        theme: state.theme === 'light' ? 'dark' : 'light' 
      })),
      
      // Contact Form
      contactFormStatus: {
        loading: false,
        success: false,
        error: ''
      },
      setContactFormStatus: (status) => set((state) => ({
        contactFormStatus: { ...state.contactFormStatus, ...status }
      })),
      resetContactFormStatus: () => set({
        contactFormStatus: {
          loading: false,
          success: false,
          error: ''
        }
      }),
      
      // Loading
      isLoading: false,
      setIsLoading: (loading) => set({ isLoading: loading }),
      
      // Navigation
      activeSection: 'home',
      setActiveSection: (section) => set({ activeSection: section }),
      
      // UI State
      mobileMenuOpen: false,
      setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
      toggleMobileMenu: () => set((state) => ({ 
        mobileMenuOpen: !state.mobileMenuOpen 
      })),
      
      // Notifications
      notifications: [],
      addNotification: (notification) => {
        const id = Date.now().toString()
        const newNotification = { ...notification, id }
        
        set((state) => ({
          notifications: [...state.notifications, newNotification]
        }))
        
        // Auto-remove notification after duration
        const duration = notification.duration || 5000
        setTimeout(() => {
          get().removeNotification(id)
        }, duration)
      },
      removeNotification: (id) => set((state) => ({
        notifications: state.notifications.filter(n => n.id !== id)
      })),
      clearNotifications: () => set({ notifications: [] })
    }),
    {
      name: 'portfolio-store',
      partialize: (state) => ({
        theme: state.theme,
        activeSection: state.activeSection
      })
    }
  )
)

// Selectors for better performance
export const useTheme = () => useAppStore((state) => state.theme)
export const useContactForm = () => useAppStore((state) => state.contactFormStatus)
export const useLoading = () => useAppStore((state) => state.isLoading)
export const useNotifications = () => useAppStore((state) => state.notifications)
