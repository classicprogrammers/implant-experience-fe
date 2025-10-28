import axios from 'axios'

// Temporarily force all API requests to use HTTP (will revert to HTTPS on production SSL)
const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:9090/api'

const API_BASE_URL = (() => {
    try {
        const url = new URL(configuredBaseUrl)
        url.protocol = 'http:'
        return url.toString().replace(/\/$/, '')
    } catch {
        // Fallback: naive replace if URL constructor fails
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
