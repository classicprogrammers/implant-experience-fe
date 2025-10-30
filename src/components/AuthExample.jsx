import { useState } from 'react'
import { authAPI, storage } from '../utils/api'

function AuthExample() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Example: Login function
  const handleLogin = async () => {
    setLoading(true)
    setError('')
    
    try {
      const response = await authAPI.login({
        email: 'admin@implant-experience.com',
        password: 'Admin123!'
      })
      
      if (response.success) {
        // Store auth data
        storage.setAuthData(response.data)
        setUser(response.data.user)
        console.log('Login successful!')
      }
    } catch (error) {
      setError(error.message)
      console.error('Login failed:', error)
    } finally {
      setLoading(false)
    }
  }

  // Example: Get profile function
  const handleGetProfile = async () => {
    setLoading(true)
    setError('')
    
    try {
      const response = await authAPI.getProfile()
      setUser(response.data)
      console.log('Profile loaded:', response.data)
    } catch (error) {
      setError(error.message)
      console.error('Failed to get profile:', error)
    } finally {
      setLoading(false)
    }
  }

  // Example: Logout function
  const handleLogout = async () => {
    setLoading(true)
    setError('')
    
    try {
      await authAPI.logout()
      storage.clearAuthData()
      setUser(null)
      console.log('Logout successful!')
    } catch (error) {
      setError(error.message)
      console.error('Logout failed:', error)
    } finally {
      setLoading(false)
    }
  }

  // Check if user is authenticated
  const isAuthenticated = storage.isAuthenticated()

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Auth API Example</h2>
      
      {error && (
        <div style={{ 
          color: 'red', 
          backgroundColor: '#fee', 
          padding: '10px', 
          borderRadius: '4px',
          marginBottom: '10px'
        }}>
          {error}
        </div>
      )}

      <div style={{ marginBottom: '20px' }}>
        <p><strong>Status:</strong> {isAuthenticated ? 'Authenticated' : 'Not authenticated'}</p>
        {user && (
          <div>
            <p><strong>User:</strong> {user.fullName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button 
          onClick={handleLogin} 
          disabled={loading || isAuthenticated}
          style={{ padding: '10px 20px' }}
        >
          {loading ? 'Loading...' : 'Login'}
        </button>
        
        <button 
          onClick={handleGetProfile} 
          disabled={loading || !isAuthenticated}
          style={{ padding: '10px 20px' }}
        >
          {loading ? 'Loading...' : 'Get Profile'}
        </button>
        
        <button 
          onClick={handleLogout} 
          disabled={loading || !isAuthenticated}
          style={{ padding: '10px 20px' }}
        >
          {loading ? 'Loading...' : 'Logout'}
        </button>
      </div>
    </div>
  )
}

export default AuthExample
