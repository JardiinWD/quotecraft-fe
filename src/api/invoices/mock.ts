import { useAuthStore } from '@/stores'
import axios from 'axios'
import { IMockApi } from '@/api/types'

// ----------- API ISTANCE
const mockInvoicesApi = axios.create({
  baseURL: `https://${import.meta.env.VITE_MOCKAPI_URL_SECRET}.mockapi.io/${import.meta.env.VITE_MOCKAPI_API_PREFIX}`,
  headers: {
    'Content-Type': 'application/json'
  }
})

// ----------- API LAYER
export const MockInvoicesApi: IMockApi = {
  handleResourceErrors: async (
    error: Error | string | unknown,
    context: string
  ) => {
    console.error(`An error occured in ${context} --> ${error}`)
    return {
      data: [],
      error: error,
      status: 'error'
    }
  },
  getResource: async (resource: string, options = {}) => {
    try {
      // 1. Check if the resource is a string
      if (typeof resource !== 'string')
        throw new Error('The resource must be a string')
      // 2. Invoke the API and return the response
      const response = await mockInvoicesApi.get(`/${resource}`, {
        method: 'GET',
        ...options
      })
      // 3. Check if the response is empty
      if (!response.data || !response) throw new Error('The response is empty')
      // 4. Return the response
      return {
        data: response.data,
        error: null,
        status: 'success'
      }
    } catch (error) {
      return await MockInvoicesApi.handleResourceErrors(
        error instanceof Error
          ? error.message
          : 'An error occurred while fetching the data',
        'getResource'
      )
    }
  },
  getResourceById: async (resource: string, id: string, options = {}) => {
    try {
      // 1. Check if the resource is a string
      if (typeof resource !== 'string')
        throw new Error('The resource must be a string')
      // 2. Check if the id is a string
      if (typeof id !== 'string') throw new Error('The id must be a string')
      // 3. Invoke the API and return the response
      const response = await mockInvoicesApi.get(`/${resource}/${id}`, {
        method: 'GET',
        ...options
      })
      // 4. Check if the response is empty
      if (!response.data || !response) throw new Error('The response is empty')
      // 5. Return the response
      return {
        data: response.data,
        error: null,
        status: 'success'
      }
    } catch (error) {
      return await MockInvoicesApi.handleResourceErrors(
        error instanceof Error
          ? error.message
          : 'An error occurred while fetching the data',
        'getResourceById'
      )
    }
  }
}

// ----------- AXIOS INTERCEPTOR

// Add a request interceptor to include the access token in the headers
mockInvoicesApi.interceptors.request.use(
  async (config) => {
    // Retrieve the token from the Zustand store
    const { userData } = useAuthStore.getState()
    // Get the access token from allUserData if it exists
    const accessToken = userData?.accessToken || ''
    // If the access token exists, add it to the Authorization header
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`

    return config
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error)
  }
)
