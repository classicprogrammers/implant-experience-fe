import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './OCRPage.css'
import { api } from '../../utils/api'
import OcrIcon from '../../assets/images/OcrIcon.png'
import UploadIcon from '../../assets/images/PaperUpload.png'
function OCRPage() {
     const [formData, setFormData] = useState({
        udi_di: '',
        brand: '',
        model: '',
        implant_date: '',
        body_site: '',
        laterality: '' 
    })
    // Step 1 form data (Manual)
    const [step1FormData, setStep1FormData] = useState({
        title: '',
        hospital: '',
        procedure_type: '',
        date_surgery: '',
        physician: ''
    })
    // Step 2 form data (Manual)
    const [step2FormData, setStep2FormData] = useState({
        manufacturer: '',
        catalog_number: '',
        lot_number: '',
        udi: '',
        part_description: ''
    })
    const [uploadedFile, setUploadedFile] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [ocrSuccess, setOcrSuccess] = useState(false)
    const [validationErrors, setValidationErrors] = useState({})
    const [activeTab, setActiveTab] = useState('ocr') // 'manual' or 'ocr'
    const [currentStep, setCurrentStep] = useState(3) // 1, 2, or 3
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

    const handleStep1InputChange = (e) => {
        const { name, value } = e.target
        setStep1FormData({
            ...step1FormData,
            [name]: value
        })
    }

    const handleStep2InputChange = (e) => {
        const { name, value } = e.target
        setStep2FormData({
            ...step2FormData,
            [name]: value
        })
    }

    const handleNext = () => {
        if (activeTab === 'manual') {
            if (currentStep === 1) {
                setCurrentStep(2)
            } else if (currentStep === 2) {
                // Move to step 3 (OCR) if coming from manual step 2
                setActiveTab('ocr')
                setCurrentStep(3)
            }
        }
    }

    const getCurrentStepNumber = () => {
        if (activeTab === 'ocr') {
            return 3
        } else {
            return currentStep
        }
    }

    const handleFileUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            setUploadedFile(file)
        }
    }

    const handleVerify = async () => { // eslint-disable-line no-unused-vars
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
                        {/* Progress Bar */}
                        <div className="progress-bar-container">
                            {getCurrentStepNumber() === 1 && (
                                <div className="progress-bar-fill step1" style={{ width: '33.33%', left: '0' }}></div>
                            )}
                            {getCurrentStepNumber() === 2 && (
                                <div className="progress-bar-fill step2" style={{ width: '33.33%', left: '33.33%' }}></div>
                            )}
                            {getCurrentStepNumber() === 3 && (
                                <div className="progress-bar-fill step3" style={{ width: '33.33%', left: '66.66%' }}></div>
                            )}
                        </div>

                        {/* Close Icon for Steps 1 and 2 */}
                        {(getCurrentStepNumber() === 1 || getCurrentStepNumber() === 2) && (
                            <div className="step-close-icon-wrapper">
                                <button className="close-button" onClick={handleClose}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18M6 6L18 18"
                                            stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        )}

                        {/* Step 3 Only: OCR Upload Heading and Close Button */}
                        {getCurrentStepNumber() === 3 && (
                            <div className="step3-header">
                                <h2 className="ocr-heading">OCR Upload</h2>
                                <button className="close-button" onClick={handleClose}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18M6 6L18 18"
                                            stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        )}

                        {/* Top Image */}
                        <div className="top-icon-wrapper">
                            <img src={OcrIcon} alt="Step Icon" className="top-icon" />
                        </div>

                        {/* Step Heading - Only show for Steps 1 and 2 */}
                        {getCurrentStepNumber() !== 3 && (
                            <div className="step-heading">
                                <h1 style={{ color: '#00ACB2' }}>
                                    Step {getCurrentStepNumber()}<span> /3</span>
                                </h1>
                            </div>
                        )}

                        {/* Tab Toggle Buttons - Only show in Step 3 */}
                        {getCurrentStepNumber() === 3 && (
                            <div className="tab-toggle">
                                <button
                                    className={`tab-button ${activeTab === 'manual' ? 'active' : ''}`}
                                    onClick={() => {
                                        setActiveTab('manual')
                                        setCurrentStep(1)
                                    }}
                                >
                                    Manual
                                </button>
                                <button
                                    className={`tab-button ${activeTab === 'ocr' ? 'active' : ''}`}
                                    onClick={() => {
                                        setActiveTab('ocr')
                                        setCurrentStep(3)
                                    }}
                                >
                                    OCR Upload
                                </button>
                            </div>
                        )}

                        {/* OCR Upload Section */}
                        {activeTab === 'ocr' && (
                            <div className="ocr-upload-section">
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
                                                <img src={UploadIcon} alt="Upload Icon" />

                                            </div>
                                            <div className="upload-text">
                                                <p className="upload-title">Upload Implant Card</p>
                                                <p className="upload-formats">(JPEG, PNG, PDF)</p>
                                            </div>
                                        </label>
                                    </div>
                                )}

                                {/* Show extracted data after verification */}
                                {ocrSuccess && (
                                    <div className="upload-area manual-form-section step3-form-border" style={{ marginTop: '1.5rem' }}>
                                        <div className="manual-form-section">
                                            <form onSubmit={(e) => e.preventDefault()} className="ocr-form">
                                                <div className="form-group-new">
                                                    <input
                                                        type="text"
                                                        name="udi_di"
                                                        value={formData.udi_di}
                                                        onChange={handleInputChange}
                                                        placeholder="UDI * (14 characters)"
                                                        maxLength="14"
                                                    />
                                                </div>

                                                <div className="form-group-new">
                                                    <input
                                                        type="text"
                                                        name="brand"
                                                        value={formData.brand}
                                                        onChange={handleInputChange}
                                                        placeholder="Brand *"
                                                    />
                                                </div>

                                                <div className="form-group-new">
                                                    <input
                                                        type="text"
                                                        name="model"
                                                        value={formData.model}
                                                        onChange={handleInputChange}
                                                        placeholder="Model *"
                                                    />
                                                </div>

                                                <div className="form-group-new">
                                                    <input
                                                        type="date"
                                                        name="implant_date"
                                                        value={formData.implant_date}
                                                        onChange={handleInputChange}
                                                        placeholder="Data Surgery"
                                                    />
                                                </div>

                                                <div className="form-group-new">
                                                    <input
                                                        type="text"
                                                        name="body_site"
                                                        value={formData.body_site}
                                                        onChange={handleInputChange}
                                                        placeholder="Body Site"
                                                    />
                                                </div>

                                                <div className="form-group-new">
                                                    <select
                                                        name="laterality"
                                                        value={formData.laterality}
                                                        onChange={handleInputChange}
                                                        style={{
                                                            padding: '0.75rem 1.5rem',
                                                            border: '1px solid #ECEDF2',
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
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

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

                        {/* Manual Form Section - Step 1 */}
                        {activeTab === 'manual' && currentStep === 1 && (
                            <div style={{ width: '100%' }}>
                                <div className="upload-area manual-form-section no-border">
                                    <div className="manual-form-section">
                                        <form onSubmit={(e) => e.preventDefault()} className="ocr-form">
                                            <div className="form-group-new">
                                                <input
                                                    type="text"
                                                    name="title"
                                                    value={step1FormData.title}
                                                    onChange={handleStep1InputChange}
                                                    placeholder="Title *"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group-new">
                                                <input
                                                    type="text"
                                                    name="hospital"
                                                    value={step1FormData.hospital}
                                                    onChange={handleStep1InputChange}
                                                    placeholder="Hospital *"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group-new">
                                                <input
                                                    type="text"
                                                    name="procedure_type"
                                                    value={step1FormData.procedure_type}
                                                    onChange={handleStep1InputChange}
                                                    placeholder="Procedure type *"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group-new">
                                                <input
                                                    type="text"
                                                    name="date_surgery"
                                                    value={step1FormData.date_surgery}
                                                    onChange={handleStep1InputChange}
                                                    placeholder="Data Surgery *"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group-new">
                                                <input
                                                    type="text"
                                                    name="physician"
                                                    value={step1FormData.physician}
                                                    onChange={handleStep1InputChange}
                                                    placeholder="Physician *"
                                                    required
                                                />
                                            </div>
                                        </form>

                                        <div className="step-actions">
                                            <button className="ocr-action-button" onClick={handleNext}>
                                                Next
                                            </button>
                                            <button className="ocr-action-button">
                                                Save Later
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        )}

                        {/* Manual Form Section - Step 2 */}
                        {activeTab === 'manual' && currentStep === 2 && (
                            <div style={{ width: '100%' }}>
                                <div className="upload-area manual-form-section no-border">
                                    <div className="manual-form-section">
                                        <form onSubmit={(e) => e.preventDefault()} className="ocr-form">
                                            <div className="form-group-new">
                                                <input
                                                    type="text"
                                                    name="manufacturer"
                                                    value={step2FormData.manufacturer}
                                                    onChange={handleStep2InputChange}
                                                    placeholder="Manufacturer *"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group-new">
                                                <input
                                                    type="text"
                                                    name="catalog_number"
                                                    value={step2FormData.catalog_number}
                                                    onChange={handleStep2InputChange}
                                                    placeholder="Catalog Number (REF number) *"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group-new">
                                                <input
                                                    type="text"
                                                    name="lot_number"
                                                    value={step2FormData.lot_number}
                                                    onChange={handleStep2InputChange}
                                                    placeholder="Lot Number *"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group-new">
                                                <input
                                                    type="text"
                                                    name="udi"
                                                    value={step2FormData.udi}
                                                    onChange={handleStep2InputChange}
                                                    placeholder="UDI (Optional)"
                                                />
                                            </div>

                                            <div className="form-group-new">
                                                <input
                                                    type="text"
                                                    name="part_description"
                                                    value={step2FormData.part_description}
                                                    onChange={handleStep2InputChange}
                                                    placeholder="Part description *"
                                                    required
                                                />
                                            </div>
                                        </form>

                                        <div className="step-actions">
                                            <button className="ocr-action-button" onClick={handleNext}>
                                                Next
                                            </button>
                                            <button className="ocr-action-button">
                                                Save Later
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Submit Button - Only show on OCR tab */}
                        {activeTab === 'ocr' && (
                            <div className="submit-button-wrapper">
                                <button
                                    type="button"
                                    className="ocr-action-button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (ocrSuccess && uploadedFile) {
                                            handleRegister(e);
                                        } else {
                                            setError('Please verify the file first before submitting.');
                                        }
                                    }}
                                    disabled={isLoading || !ocrSuccess}
                                >
                                    {isLoading ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OCRPage

