import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../utils/api'
import AuthHeader from '../../components/auth/AuthHeader'
import AuthFooter from '../../components/auth/AuthFooter'
import '../../App.css'

function VerifyOTP() {
    const [otp, setOtp] = useState(['', '', '', '', '', ''])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [timer, setTimer] = useState(60) // 60 seconds countdown
    const [canResend, setCanResend] = useState(false)
    const inputRefs = useRef([])
    const navigate = useNavigate()

    // Countdown timer
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => {
                    if (prev <= 1) {
                        setCanResend(true)
                        return 0
                    }
                    return prev - 1
                })
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [timer])

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
    }

    const handleOtpChange = (index, value) => {
        // Only allow single digit
        if (value.length > 1) return

        // Only allow numbers
        if (value && !/^\d$/.test(value)) return

        const newOtp = [...otp]
        newOtp[index] = value
        setOtp(newOtp)
        setError('')

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (index, e) => {
        // Handle backspace
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus()
        }
    }

    const handlePaste = (e) => {
        e.preventDefault()
        const pastedData = e.clipboardData.getData('text').slice(0, 6)
        if (/^\d+$/.test(pastedData)) {
            const newOtp = [...otp]
            for (let i = 0; i < 6; i++) {
                newOtp[i] = pastedData[i] || ''
            }
            setOtp(newOtp)
            // Focus last filled input or last input
            const lastIndex = Math.min(pastedData.length - 1, 5)
            inputRefs.current[lastIndex]?.focus()
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const otpString = otp.join('')

        if (otpString.length !== 6) {
            setError('Please enter complete OTP')
            return
        }

        setIsLoading(true)
        setError('')

        try {
            const response = await api.post('/auth/verify-otp', {
                otp: otpString
            })

            if (response.data.success) {
                // Navigate to set password page
                navigate('/set-password')
            } else {
                setError(response.data.message || 'Invalid OTP')
            }
        } catch (error) {
            console.error('OTP verification error:', error)
            let errorMessage = 'Invalid OTP. Please try again.'
            if (error.response?.data?.message) {
                errorMessage = error.response.data.message
            } else if (error.response?.data?.error) {
                errorMessage = error.response.data.error
            }
            setError(errorMessage)
        } finally {
            setIsLoading(false)
        }
    }

    const handleResend = async () => {
        if (!canResend) return

        setIsLoading(true)
        setError('')

        try {
            const response = await api.post('/auth/resend-otp')
            if (response.data.success) {
                setTimer(60)
                setCanResend(false)
                setOtp(['', '', '', '', '', ''])
                inputRefs.current[0]?.focus()
            } else {
                setError(response.data.message || 'Failed to resend OTP')
            }
        } catch (error) {
            console.error('Resend OTP error:', error)
            setError('Failed to resend OTP. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <AuthHeader />
            <div className="auth-page-new">
                <div className="auth-container-new">
                    <div className="auth-card" style={{ boxShadow: 'none' }}>
                        <h1 className="page-title" style={{ marginBottom: '15px', marginTop: '60px', fontSize: '40px' }}>Verify OTP</h1>

                        <form onSubmit={handleSubmit} className="auth-form-new">
                            <div className="otp-instructions" style={{
                                textAlign: 'center',
                                color: '#555555',
                                fontSize: '14px',
                                fontWeight: '400',
                                lineHeight: '1.5'
                            }}>
                                Enter your OTP which has been sent to your email<br />
                                and completely verify your account.
                            </div>
                            {error && (
                                <div className="error-message" style={{
                                    color: '#ef4444',
                                    backgroundColor: '#fef2f2',
                                    border: '1px solid #fecaca',
                                    padding: '12px',
                                    borderRadius: '6px',
                                    marginBottom: '20px',
                                    fontSize: '14px',
                                    textAlign: 'center'
                                }}>
                                    {error}
                                </div>
                            )}

                            {/* OTP Input Fields */}
                            <div className="otp-container" style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 'clamp(8px, 2vw, 16px)',
                                width: '100%'
                            }}>
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={(el) => (inputRefs.current[index] = el)}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength="1"
                                        value={digit}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        onPaste={handlePaste}
                                        className="otp-input"
                                        style={{
                                            width: 'clamp(30px, 8vw, 40px)',
                                            flex: '1',
                                            maxWidth: '40px',
                                            height: '20px',
                                            textAlign: 'center',
                                            fontSize: '20px',
                                            fontWeight: '600',
                                            border: 'none',
                                            borderBottom: '1px solid #838383',
                                            borderRadius: '0',
                                            outline: 'none',
                                            background: 'transparent',
                                            color: '#11142D',
                                            padding: '0',
                                            transition: 'all 0.3s ease',
                                            caretColor: '#838383'
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderBottomColor = '#838383'
                                            e.target.style.borderBottomWidth = '3px'
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderBottomColor = '#838383'
                                            e.target.style.borderBottomWidth = '2px'
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Resend Information */}
                            <div style={{
                                textAlign: 'center',
                                marginBottom: '10px'
                            }}>
                                <p style={{
                                    color: '#555555',
                                    fontSize: '14px',
                                    marginBottom: '8px',
                                    fontWeight: '500'
                                }}>
                                    A code has been sent to your email
                                </p>
                                {!canResend ? (
                                    <p style={{
                                        color: '#11142D',
                                        fontSize: '14px',
                                        fontWeight: '600'
                                    }}>
                                        Resend in {formatTime(timer)}
                                    </p>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={handleResend}
                                        disabled={isLoading}
                                        style={{
                                            background: 'transparent',
                                            border: 'none',
                                            color: '#00ACB2',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            textDecoration: 'underline',
                                            padding: '0'
                                        }}
                                    >
                                        Resend OTP
                                    </button>
                                )}
                            </div>

                            {/* Continue Button */}
                            <button
                                type="submit"
                                className="btn-signin"
                                disabled={isLoading || otp.join('').length !== 6}
                                style={{
                                    marginTop: '0',
                                    display: 'block',
                                    width: '100%',
                                }}
                            >
                                {isLoading ? 'Verifying...' : 'Continue'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <AuthFooter />
        </>
    )
}

export default VerifyOTP

