import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './OCRPage.css'
import { api } from '../../utils/api'

function OCRPage() {
    const [formData, setFormData] = useState({
        udi_di: '',
        brand: '',
        model: '',
        implant_date: '',
        body_site: '',
        laterality: ''
    })
    const [uploadedFile, setUploadedFile] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [ocrSuccess, setOcrSuccess] = useState(false)
    const [validationErrors, setValidationErrors] = useState({})
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setFormData({
            ...formData,
            [name]: value
        })

        // Clear validation error for this field when user starts typing
        if (validationErrors[name]) {
            setValidationErrors({
                ...validationErrors,
                [name]: ''
            })
        }

        // Clear general error
        if (error) {
            setError('')
        }
    }

    const handleFileUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            setUploadedFile(file)
        }
    }

    const handleVerify = async () => {
        if (!uploadedFile) {
            setError('Please upload a file first.')
            return
        }

        setIsLoading(true)
        setError('')
        setSuccess('')

        const data = new FormData()
        data.append('file', uploadedFile) // Send the actual file, not just the name

        try {
            const response = await api.post('ocr/upload-and-extract', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(response.data)
            if (response.data.success) {
                const ocrData = response.data.data
                setSuccess('File uploaded and processed successfully!')
                setOcrSuccess(true)

                // Auto-fill form with OCR extracted device data
                if (ocrData && ocrData.extracted_fields) {
                    const extractedData = ocrData.extracted_fields
                    setFormData({
                        udi_di: extractedData.udi_di || '',
                        brand: extractedData.brand || '',
                        model: extractedData.model || '',
                        implant_date: extractedData.implant_date || '',
                        body_site: extractedData.body_site || '',
                        laterality: extractedData.laterality || ''
                    })
                }
            } else {
                setError(response.data.message || 'Failed to upload file')
                setOcrSuccess(false)
            }
        } catch (error) {
            console.error('Error uploading file:', error)
            setOcrSuccess(false)
            let errorMessage = 'An error occurred while uploading the file'

            if (error.response?.data?.message) {
                errorMessage = error.response.data.message
            } else if (error.response?.data?.error) {
                errorMessage = error.response.data.error
            } else if (error.message) {
                errorMessage = error.message
            }

            setError(errorMessage)
        } finally {
            setIsLoading(false)
        }
    }

    const validateForm = () => {
        const errors = {}

        // UDI-DI validation - must be exactly 14 characters
        if (!formData.udi_di) {
            errors.udi_di = 'UDI-DI is required'
        } else if (formData.udi_di.length !== 14) {
            errors.udi_di = 'UDI-DI must be exactly 14 characters'
        }

        // Brand validation
        if (!formData.brand || !formData.brand.trim()) {
            errors.brand = 'Brand is required'
        }

        // Model validation
        if (!formData.model || !formData.model.trim()) {
            errors.model = 'Model is required'
        }

        // Laterality validation - if provided, must be one of the allowed values
        if (formData.laterality && !['left', 'right', 'bilateral', 'unspecified'].includes(formData.laterality)) {
            errors.laterality = 'Laterality must be one of: left, right, bilateral, unspecified'
        }

        return errors
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')
        setSuccess('')
        setValidationErrors({})

        // Client-side validation
        const errors = validateForm()
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors)
            setError('Please fix the validation errors below')
            setIsLoading(false)
            return
        }

        try {
            console.log('Registering implant with data:', formData)

            // Call the /devices API to create the device
            const response = await api.post('/devices', formData)

            if (response.data.success) {
                console.log('Device created successfully:', response.data.data)
                setSuccess('Device registered successfully!')

                // Navigate to dashboard after a short delay to show success message
                setTimeout(() => {
                    navigate('/dashboard')
                }, 1500)
            } else {
                setError(response.data.message || 'Failed to register device')
            }
        } catch (error) {
            console.error('Registration failed:', error)

            // Handle validation errors from API
            if (error.response?.data?.errors && Array.isArray(error.response.data.errors)) {
                const apiErrors = {}
                error.response.data.errors.forEach(err => {
                    if (err.path) {
                        apiErrors[err.path] = err.msg
                    }
                })
                setValidationErrors(apiErrors)
                setError(error.response.data.message || 'Validation errors')
            } else {
                let errorMessage = 'An error occurred during device registration'

                if (error.response?.data?.message) {
                    errorMessage = error.response.data.message
                } else if (error.response?.data?.error) {
                    errorMessage = error.response.data.error
                } else if (error.message) {
                    errorMessage = error.message
                }

                setError(errorMessage)
            }
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
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18"
                                    stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* OCR Upload Section */}
                        <div className="ocr-upload-section">
                            <h2 className="section-title">OCR Upload</h2>

                            {/* Show uploaded file name + preview */}
                            {uploadedFile ? (
                                <div className="upload-area">
                                    <div className='flex justify-between items-center'>
                                        <div className="uploaded-file-info">
                                            <p><strong>Selected File:</strong> {uploadedFile.name}</p>
                                        </div>
                                        <button
                                            type="button"
                                            className="remove-file-button bg-transparent text-[red] p-4"
                                            onClick={() => {
                                                setUploadedFile(null)
                                                setOcrSuccess(false)
                                            }}
                                            title="Remove file"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="18" y1="6" x2="6" y2="18" />
                                                <line x1="6" y1="6" x2="18" y2="18" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ) : (
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
                                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 2H6C5.47 2 4.96 2.21 4.59 2.59C4.21 2.96 4 3.47 4 4V20C4 20.53 4.21 21.04 4.59 21.41C4.96 21.79 5.47 22 6 22H18C18.53 22 19.04 21.79 19.41 21.41C19.79 21.04 20 20.53 20 20V8L14 2Z"
                                                    stroke="currentColor" strokeWidth="2"
                                                    strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M14 2V8H20"
                                                    stroke="currentColor" strokeWidth="2"
                                                    strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="upload-text">
                                            <p className="upload-title">Upload Implant Card</p>
                                            <p className="upload-formats">(JPEG, PNG, PDF)</p>
                                        </div>
                                    </label>
                                </div>
                            )}
                            <button className="verify-button" onClick={handleVerify} disabled={isLoading || ocrSuccess || ocrSuccess}>
                                {ocrSuccess ? 'Verified' : (isLoading ? 'Verifying...' : 'Verify')}
                            </button>
                        </div>

                        {error && (
                            <div className="error-message" style={{
                                color: '#ef4444',
                                backgroundColor: '#fef2f2',
                                border: '1px solid #fecaca',
                                padding: '12px',
                                borderRadius: '6px',
                                marginBottom: '16px',
                                fontSize: '14px'
                            }}>
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="success-message" style={{
                                color: '#059669',
                                backgroundColor: '#f0fdf4',
                                border: '1px solid #bbf7d0',
                                padding: '12px',
                                borderRadius: '6px',
                                marginBottom: '16px',
                                fontSize: '14px'
                            }}>
                                {success}
                            </div>
                        )}

                        {/* Manual Form Section */}
                        <div className="upload-area manual-form-section">
                            <div className="manual-form-section">
                                <h3 className="section-title text-start border-0">Manual Form</h3>


                                <form onSubmit={handleRegister} className="ocr-form">
                                    <div className="form-group-new">
                                        <input
                                            type="text"
                                            id="udi_di"
                                            name="udi_di"
                                            value={formData.udi_di}
                                            onChange={handleInputChange}
                                            placeholder="Enter UDI * (14 characters)"
                                            required
                                            maxLength="14"
                                            className={validationErrors.udi_di ? 'error' : ''}
                                        />
                                        {validationErrors.udi_di && (
                                            <span className="field-error" style={{
                                                color: '#ef4444',
                                                fontSize: '12px',
                                                marginTop: '4px',
                                                display: 'block'
                                            }}>
                                                {validationErrors.udi_di}
                                            </span>
                                        )}
                                    </div>

                                    <div className="form-group-new">
                                        <input
                                            type="text"
                                            id="brand"
                                            name="brand"
                                            value={formData.brand}
                                            onChange={handleInputChange}
                                            placeholder="Enter Brand *"
                                            required
                                            className={validationErrors.brand ? 'error' : ''}
                                        />
                                        {validationErrors.brand && (
                                            <span className="field-error" style={{
                                                color: '#ef4444',
                                                fontSize: '12px',
                                                marginTop: '4px',
                                                display: 'block'
                                            }}>
                                                {validationErrors.brand}
                                            </span>
                                        )}
                                    </div>

                                    <div className="form-group-new">
                                        <input
                                            type="text"
                                            id="model"
                                            name="model"
                                            value={formData.model}
                                            onChange={handleInputChange}
                                            placeholder="Enter Model *"
                                            required
                                            className={validationErrors.model ? 'error' : ''}
                                        />
                                        {validationErrors.model && (
                                            <span className="field-error" style={{
                                                color: '#ef4444',
                                                fontSize: '12px',
                                                marginTop: '4px',
                                                display: 'block'
                                            }}>
                                                {validationErrors.model}
                                            </span>
                                        )}
                                    </div>

                                    <div className="form-group-new">
                                        <input
                                            type="date"
                                            id="implant_date"
                                            name="implant_date"
                                            value={formData.implant_date}
                                            onChange={handleInputChange}
                                            placeholder="Implant Date"
                                        />
                                    </div>

                                    <div className="form-group-new">
                                        <input
                                            type="text"
                                            id="body_site"
                                            name="body_site"
                                            value={formData.body_site}
                                            onChange={handleInputChange}
                                            placeholder="Enter Body Site (e.g., kidney)"
                                        />
                                    </div>

                                    <div className="form-group-new">
                                        <select
                                            id="laterality"
                                            name="laterality"
                                            value={formData.laterality}
                                            onChange={handleInputChange}
                                            className={validationErrors.laterality ? 'error' : ''}
                                            style={{
                                                padding: '0.75rem 1.5rem',
                                                border: validationErrors.laterality ? '1px solid #ef4444' : '1px solid #ECEDF2 ',
                                                borderRadius: '8px',
                                                fontSize: '1rem',
                                                width: '100%',
                                                height: '44px',
                                                outline: 'none'
                                            }}
                                        >
                                            <option value="">Select Laterality</option>
                                            <option value="left">Left</option>
                                            <option value="right">Right</option>
                                            <option value="bilateral">Bilateral</option>
                                            <option value="unspecified">Unspecified</option>
                                        </select>
                                        {validationErrors.laterality && (
                                            <span className="field-error" style={{
                                                color: '#ef4444',
                                                fontSize: '12px',
                                                marginTop: '4px',
                                                display: 'block'
                                            }}>
                                                {validationErrors.laterality}
                                            </span>
                                        )}
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
        </div>
    )
}

export default OCRPage
