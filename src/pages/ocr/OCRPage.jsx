import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './OCRPage.css'

function OCRPage() {
    const [formData, setFormData] = useState({
        udi: '',
        brand: '',
        model: '',
        implantDate: '',
        provider: ''
    })
    const [uploadedFile, setUploadedFile] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFileUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            setUploadedFile(file)
        }
    }

    const handleVerify = () => {
        // Handle OCR verification logic here
        console.log('Verifying uploaded file:', uploadedFile)
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            // Handle registration logic here
            console.log('Registering implant with data:', formData)

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000))

            // Navigate back to dashboard or show success
            navigate('/dashboard')
        } catch (error) {
            console.error('Registration failed:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleClose = () => {
        navigate('/dashboard')
    }

    return (
        <div className="ocr-page-wrapper">
            <div className="ocr-page">
                <div className="ocr-container">
                <div className="ocr-card">
                    {/* Close Button */}
                    <button className="close-button" onClick={handleClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* OCR Upload Section */}
                    <div className="ocr-upload-section">
                        <h2 className="section-title">OCR Upload</h2>
                        <div className="upload-area">
                            <input
                                type="file"
                                id="file-upload"
                                accept=".jpeg,.jpg,.png,.pdf"
                                onChange={handleFileUpload}
                                className="file-input"
                            />
                            <label htmlFor="file-upload" className="upload-label">
                                <div className="upload-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="upload-text">
                                    <p className="upload-title">Upload Implant Card</p>
                                    <p className="upload-formats">(JPEG, PNG, PDF)</p>
                                </div>
                            </label>
                        </div>
                        <button className="verify-button" onClick={handleVerify}>
                            Verify
                        </button>
                    </div>

                    {/* Manual Form Section */}
                    <div className="manual-form-section">
                        <h2 className="section-title">Manual Form</h2>
                        <form onSubmit={handleRegister} className="ocr-form">
                            <div className="form-group-new">
                                <label htmlFor="udi">UDI</label>
                                <input
                                    type="text"
                                    id="udi"
                                    name="udi"
                                    value={formData.udi}
                                    onChange={handleInputChange}
                                    placeholder="Enter UDI"
                                />
                            </div>

                            <div className="form-group-new">
                                <label htmlFor="brand">Brand</label>
                                <input
                                    type="text"
                                    id="brand"
                                    name="brand"
                                    value={formData.brand}
                                    onChange={handleInputChange}
                                    placeholder="Enter Brand"
                                />
                            </div>

                            <div className="form-group-new">
                                <label htmlFor="model">Model</label>
                                <input
                                    type="text"
                                    id="model"
                                    name="model"
                                    value={formData.model}
                                    onChange={handleInputChange}
                                    placeholder="Enter Model"
                                />
                            </div>

                            <div className="form-group-new">
                                <label htmlFor="implantDate">Implant Date</label>
                                <input
                                    type="date"
                                    id="implantDate"
                                    name="implantDate"
                                    value={formData.implantDate}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group-new">
                                <label htmlFor="provider">Provider</label>
                                <input
                                    type="text"
                                    id="provider"
                                    name="provider"
                                    value={formData.provider}
                                    onChange={handleInputChange}
                                    placeholder="Enter Provider"
                                />
                            </div>

                            <button
                                type="submit"
                                className="register-button"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Registering...' : 'Register'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default OCRPage
