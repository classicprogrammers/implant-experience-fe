# API Utilities

This directory contains the base API configuration using Axios.

## Files

- `api.js` - Contains the base API instance with interceptors

## Usage

### Basic API Call

```javascript
import { api } from '../utils/api'

// Using axios-based API methods
const users = await api.get('/users')
const newUser = await api.post('/users', { name: 'John', email: 'john@example.com' })
const updatedUser = await api.put('/users/123', { name: 'Jane' })
const deleted = await api.delete('/users/123')
```

### Component Usage Example

```javascript
import { useState } from 'react'
import { api } from '../utils/api'

function LoginPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Auth functions inside the component
  const login = async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials)
      return response.data
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed')
    }
  }

  const setAuthData = (data) => {
    localStorage.setItem('authToken', data.token)
    localStorage.setItem('refreshToken', data.refreshToken)
    localStorage.setItem('user', JSON.stringify(data.user))
  }

  const handleLogin = async () => {
    setLoading(true)
    try {
      const response = await login(credentials)
      if (response.success) {
        setAuthData(response.data)
        // Handle success
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button onClick={handleLogin} disabled={loading}>
      {loading ? 'Loading...' : 'Login'}
    </button>
  )
}
```

### Environment Variables

Make sure your `.env` file contains:

```
VITE_API_BASE_URL=http://localhost:9090/api
```

## Features

- **Axios-based**: Uses Axios for HTTP requests
- **Auto token handling**: Automatically adds auth tokens to requests
- **Error handling**: Built-in error handling and 401 response handling
- **Component-based**: Auth functions are defined inside components for better control

## Available API Methods

- `api.get(endpoint, config)` - GET request
- `api.post(endpoint, data, config)` - POST request
- `api.put(endpoint, data, config)` - PUT request
- `api.delete(endpoint, config)` - DELETE request
