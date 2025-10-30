import React, { useState } from 'react'
import './user.css'
import { useToast } from '../../../contexts/ToastContext'
import { api } from '../../../utils/api'

function AddUserPage() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState({ username: '', email: '' })
    const { success, error: errorToast } = useToast()

    const validate = () => {
        const nextErrors = { username: '', email: '' }
        if (!username.trim()) {
            nextErrors.username = 'Username is required'
        }
        const emailTrimmed = email.trim()
        if (!emailTrimmed) {
            nextErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
            nextErrors.email = 'Enter a valid email address'
        }
        setErrors(nextErrors)
        return !nextErrors.username && !nextErrors.email
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validate()) return
        try {
            setIsSubmitting(true)
            await api.post('/admin/users', {
                username: username.trim(),
                email: email.trim(),
            })
            success('User added successfully', 2500)
            setUsername('')
            setEmail('')
            setErrors({ username: '', email: '' })
        } catch (err) {
            const apiMsg = err?.response?.data?.message || 'Failed to add user'
            errorToast(apiMsg, 3000)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="sa-add-user-page">
            <div className="sa-add-user-container sa-card">
                <h1 className="sa-add-user-title">Add a User</h1>

                <form className="sa-add-user-form" onSubmit={handleSubmit}>
                    <div className="sa-field">
                        <label className="sa-label">Username:</label>
                        <input
                            type="text"
                            className="sa-input"
                            placeholder="input your user in here"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            disabled={isSubmitting}
                        />
                        {errors.username && <div className="sa-error-text">{errors.username}</div>}
                    </div>

                    <div className="sa-field">
                        <label className="sa-label">Email:</label>
                        <input
                            type="email"
                            className="sa-input"
                            placeholder="input your email in here"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isSubmitting}
                        />
                        {errors.email && <div className="sa-error-text">{errors.email}</div>}
                    </div>

                    <div className="sa-actions">
                        <button type="submit" className="sa-primary-btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Adding...' : 'Add User'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUserPage


