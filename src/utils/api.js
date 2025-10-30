import axios from 'axios'

// Base URL selection:
// - On HTTPS origins (e.g., Vercel), use same-origin serverless proxy at `/api` to avoid mixed content.
// - On non-HTTPS (local/dev), force HTTP to talk directly to the target backend.
const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:9090/api'

const API_BASE_URL = (() => {
    if (typeof window !== 'undefined' && window.location.protocol === 'https:') {
        return '/api'
    }
    try {
        const url = new URL(configuredBaseUrl)
        url.protocol = 'http:'
        return url.toString().replace(/\/$/, '')
    } catch {
        return configuredBaseUrl.replace(/^https:/i, 'http:')
    }
})()

// Create axios instance
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Deployment marker: remove after verification
if (typeof window !== 'undefined') {
    console.log('[FE DEPLOY] api.js loaded', {
        ts: new Date().toISOString(),
        location: window.location.origin,
        protocol: window.location.protocol,
        baseURL: API_BASE_URL,
        envBase: import.meta.env.VITE_API_BASE_URL || null,
    })
}

// Request interceptor to add auth token
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Response interceptor for error handling
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Clear auth data on unauthorized
            localStorage.removeItem('authToken')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('user')
        }
        return Promise.reject(error)
    }
)

/**
 * Base API function using axios
 */
const api = {
    get: (endpoint, config = {}) => apiClient.get(endpoint, config),
    post: (endpoint, data, config = {}) => apiClient.post(endpoint, data, config),
    put: (endpoint, data, config = {}) => apiClient.put(endpoint, data, config),
    patch: (endpoint, data, config = {}) => apiClient.patch(endpoint, data, config),
    delete: (endpoint, config = {}) => apiClient.delete(endpoint, config),
}

// Export only the base API instance for use in components
export { api }
