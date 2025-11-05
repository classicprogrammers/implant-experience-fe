import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './OCRPage.css'
import { api } from '../../utils/api'
import OcrIcon from '../../assets/images/OcrIcon.png'
import UploadIcon from '../../assets/images/PaperUpload.png'
import Footer from '../../components/auth/AuthFooter'

function OCRPage() {
    // Single unified manual data state
    const [manualData, setManualData] = useState({
        title: '',
        facility_name: '',
        procedure_type: '',
        implant_date: '',
        provider_name: '',
        manufacturer: '',
        catalog_no: '',
        udi_pi_lot: '',
        udi_di: '',
        part_description: ''
    })
    const [uploadedFile, setUploadedFile] = useState(null)
    const [previewUrl, setPreviewUrl] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [validationErrors, setValidationErrors] = useState({})
    const [activeTab, setActiveTab] = useState('ocr') // 'manual' or 'ocr'
    const [currentStep, setCurrentStep] = useState(3) // 1, 2, or 3
    const [isPreviewOpen, setIsPreviewOpen] = useState(false)
    const navigate = useNavigate()

    const handleManualChange = (e) => {
        const { name, value } = e.target
        setManualData((prev) => ({ ...prev, [name]: value }))
        if (error) setError('')
    }

    const isStep2Complete = () => {
        const { manufacturer, catalog_no, udi_pi_lot, part_description, udi_di } = manualData
        return [manufacturer, catalog_no, udi_pi_lot, part_description, udi_di].every((v) => v && String(v).trim())
    }

    const handleNext = () => {
        if (activeTab === 'manual') {
            if (currentStep === 1) {
                // No validation on Step 1 → go straight to Step 2
                setError('')
                setCurrentStep(2)
            } else if (currentStep === 2) {
                if (!isStep2Complete()) {
                    setError('Please fill all Step 2 fields before proceeding.')
                    return
                }
                setError('')
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
            try {
                const url = URL.createObjectURL(file)
                setPreviewUrl(url)
            } catch { /* ignore */ }
        }
    }

    const handleOcrSubmit = async () => {
        if (!uploadedFile) {
            setError('Please upload a file first.')
            return
        }

        setIsLoading(true)
        setError('')
        setSuccess('')

        const data = new FormData()
        data.append('file', uploadedFile) // file-only payload

        try {
            const response = await api.post('/ocr/upload-and-extract', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(response.data)
            if (response.data.success) {
                setSuccess('File uploaded successfully!')
                // Pre-populate manual form from OCR extracted fields
                const extracted = response.data.data?.extracted_fields || {}
                setManualData((prev) => ({
                    ...prev,
                    udi_di: extracted.udi_di ?? prev.udi_di ?? '',
                    udi_pi_lot: extracted.udi_pi_lot ?? prev.udi_pi_lot ?? '',
                    manufacturer: extracted.manufacturer ?? prev.manufacturer ?? '',
                    catalog_no: extracted.catalog_no ?? prev.catalog_no ?? '',
                    implant_date: extracted.implant_date ?? prev.implant_date ?? '',
                    provider_name: extracted.provider_name ?? prev.provider_name ?? ''
                }))
                // After 2s, hide success and move to Manual Step 1
                setTimeout(() => {
                    setSuccess('')
                    setActiveTab('manual')
                    setCurrentStep(1)
                }, 2000)
            } else {
                setError(response.data.message || 'Failed to upload file')
            }
        } catch (error) {
            console.error('Error uploading file:', error)
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

    const closePreview = () => {
        setIsPreviewOpen(false)
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')
        setSuccess('')

        // Client-side validation for manual keys (validate both steps on submit only)
        const newErrors = {}
        if (!manualData.title) newErrors.title = 'Please fill this field'
        if (!manualData.facility_name) newErrors.facility_name = 'Please fill this field'
        if (!manualData.procedure_type) newErrors.procedure_type = 'Please fill this field'
        if (!manualData.implant_date) newErrors.implant_date = 'Please fill this field'
        if (!manualData.provider_name) newErrors.provider_name = 'Please fill this field'
        if (!manualData.manufacturer) newErrors.manufacturer = 'Please fill this field'
        if (!manualData.catalog_no) newErrors.catalog_no = 'Please fill this field'
        if (!manualData.udi_pi_lot) newErrors.udi_pi_lot = 'Please fill this field'
        if (!manualData.part_description) newErrors.part_description = 'Please fill this field'
        if (!manualData.udi_di) newErrors.udi_di = 'Please fill this field'
        // Field-specific rules
        if (!manualData.udi_di || !/^\d{14}$/.test(manualData.udi_di)) {
            newErrors.udi_di = 'UDI-DI must be exactly 14 digits'
        }
        if (manualData.implant_date && isNaN(Date.parse(manualData.implant_date))) {
            newErrors.implant_date = 'Implant date must be a valid date'
        }
        if (Object.keys(newErrors).length > 0) {
            const missingCount = Object.values(newErrors).filter((msg) => msg === 'Please fill this field').length
            if (missingCount > 1) {
                setValidationErrors({})
                setError('Please fill all fields')
                setIsLoading(false)
                return
            }
            setValidationErrors(newErrors)
            setIsLoading(false)
            return
        }

        try {
            const submitData = { ...manualData }
            console.log('[OCR] Registering implant with data (payload to /devices):', submitData)

            // Call the /devices API to create the device
            const response = await api.post('/devices', submitData)

            console.log('[OCR] /devices response:', {
                status: response.status,
                data: response.data
            })

            if (response.data.success) {
                setSuccess('Device registered successfully!')

                // Navigate to dashboard after a short delay to show success message
                setTimeout(() => {
                    navigate('/dashboard')
                }, 1500)
            } else {
                setError(response.data.message || 'Failed to register device')
            }
        } catch (error) {
            console.error('[OCR] Registration failed:', error)

            // Handle validation errors from API
            if (error.response?.data?.errors && Array.isArray(error.response.data.errors)) {
                console.warn('[OCR] API validation errors:', error.response.data.errors)
                const apiErrors = {}
                error.response.data.errors.forEach(err => {
                    if (err.path) apiErrors[err.path] = err.msg
                })
                setValidationErrors(apiErrors)
                setError(error.response.data.message || 'Validation errors')
            } else {
                let errorMessage = 'An error occurred during device registration'

                if (error.response?.data?.message) {
                    console.warn('[OCR] API error message:', error.response.data.message)
                    errorMessage = error.response.data.message
                } else if (error.response?.data?.error) {
                    console.warn('[OCR] API error field:', error.response.data.error)
                    errorMessage = error.response.data.error
                } else if (error.message) {
                    console.warn('[OCR] Error message:', error.message)
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

                        {/* Close Icon only for Step 2 */}
                        {getCurrentStepNumber() === 2 && (
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

                        {getCurrentStepNumber() !== 3 && (
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

                        {/* Step Heading - Only show for Steps 1 and 2 */}
                        {getCurrentStepNumber() !== 3 && (
                            <div className="step-heading">
                                <h1 style={{ color: '#00ACB2' }}>
                                    Step {getCurrentStepNumber()}<span> /2</span>
                                </h1>
                            </div>
                        )}

                        {/* OCR Upload Section */}
                        {activeTab === 'ocr' && (
                            <div className="ocr-upload-section">
                                {/* Show uploaded file name + preview */}
                                {uploadedFile ? (
                                    <div className="upload-area">
                                        <div className='flex justify-between items-center'>
                                            <div className="uploaded-file-info" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                {uploadedFile && uploadedFile.type && uploadedFile.type.startsWith('image/') && previewUrl ? (
                                                    <img
                                                        src={previewUrl}
                                                        alt="Preview"
                                                        style={{ width: '120px', height: '80px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #e5e7eb', cursor: 'pointer' }}
                                                        onClick={() => setIsPreviewOpen(true)}
                                                    />
                                                ) : (
                                                    <p><strong>Selected File:</strong> {uploadedFile?.name}</p>
                                                )}
                                            </div>
                                            <button
                                                type="button"
                                                className="remove-file-button bg-transparent text-[red] p-4"
                                                onClick={() => {
                                                    setUploadedFile(null)
                                                    if (previewUrl) {
                                                        try { URL.revokeObjectURL(previewUrl) } catch { /* ignore */ }
                                                        setPreviewUrl(null)
                                                    }
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
                                        {/* Browse button inside upload card */}
                                        <div className="browse-button-wrapper">
                                            <button
                                                type="button"
                                                className="browse-button"
                                                onClick={() => {
                                                    const el = document.getElementById('file-upload');
                                                    if (el) el.click();
                                                }}
                                            >
                                                Browse
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* No extracted fields UI; OCR is file-only */}
                            </div>
                        )}

                        {error && (
                            <div className="error-message" style={{
                                color: '#ef4444',
                                backgroundColor: '#fef2f2',
                                border: '1px solid #fecaca',
                                padding: '12px',
                                borderRadius: '6px',
                                margin: '0 auto 16px',
                                fontSize: '14px',
                                width: '100%',
                                maxWidth: '480px'
                            }}>
                                {error}
                            </div>
                        )}

                        {Object.keys(validationErrors || {}).length > 0 && (
                            <div className="field-errors" style={{
                                color: '#991b1b',
                                backgroundColor: '#fff1f2',
                                border: '1px solid #fecaca',
                                padding: '12px',
                                borderRadius: '6px',
                                margin: '0 auto 16px',
                                fontSize: '13px',
                                width: '100%',
                                maxWidth: '480px'
                            }}>
                                {(() => {
                                    const fieldLabel = (key) => {
                                        const map = {
                                            title: 'Title',
                                            facility_name: 'Facility name',
                                            procedure_type: 'Procedure type',
                                            implant_date: 'Implant date',
                                            provider_name: 'Physician',
                                            manufacturer: 'Manufacturer',
                                            catalog_no: 'Catalog number',
                                            udi_pi_lot: 'Lot number',
                                            part_description: 'Part description',
                                            udi_di: 'UDI (14 digits)'
                                        }
                                        return map[key] || key
                                    }
                                    return (
                                <ul style={{ margin: 0, paddingLeft: '18px' }}>
                                    {Object.entries(validationErrors).map(([field, msg]) => (
                                        <li key={field}>
                                                    <strong>{fieldLabel(field)}</strong>: {msg}
                                        </li>
                                    ))}
                                </ul>
                                    )
                                })()}
                            </div>
                        )}

                        {success && (
                            <div className="success-message" style={{
                                color: '#059669',
                                backgroundColor: '#f0fdf4',
                                border: '1px solid #bbf7d0',
                                padding: '12px',
                                borderRadius: '6px',
                                margin: '0 auto 16px',
                                fontSize: '14px',
                                width: '100%',
                                maxWidth: '480px'
                            }}>
                                {success}
                            </div>
                        )}

                        {/* Image Preview Modal */}
                        {isPreviewOpen && previewUrl && (
                            <div
                                className="notification-modal-overlay"
                                onClick={closePreview}
                                style={{
                                    position: 'fixed',
                                    inset: 0,
                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    zIndex: 9999
                                }}
                            >
                                <div
                                    onClick={(e) => e.stopPropagation()}
                                    style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}
                                >
                                    <button
                                        onClick={closePreview}
                                        className='modal-close-btn'
                                        style={{
                                            position: 'absolute',
                                            top: '-40px',
                                            right: '0',
                                            background: 'transparent',
                                            color: '#fff',
                                            fontSize: '28px',
                                            cursor: 'pointer'
                                        }}
                                        aria-label="Close preview"
                                    >
                                        ×
                                    </button>
                                    <img
                                        src={previewUrl}
                                        alt="Full Preview"
                                        style={{
                                            maxWidth: '90vw',
                                            maxHeight: '90vh',
                                            objectFit: 'contain',
                                            borderRadius: '8px',
                                            background: '#111'
                                        }}
                                    />
                                </div>
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
                                                    value={manualData.title}
                                                    onChange={handleManualChange}
                                                    placeholder="Title:"
                                                    required
                                                />
                                                {validationErrors.title && (
                                                    <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px' }}>{validationErrors.title}</div>
                                                )}
                                            </div>

                                            <div className="form-group-new">
                                                <input
                                                    type="text"
                                                    name="facility_name"
                                                    value={manualData.facility_name}
                                                    onChange={handleManualChange}
                                                    placeholder="Facility name:"
                                                    required
                                                />
                                                {validationErrors.facility_name && (
                                                    <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px' }}>{validationErrors.facility_name}</div>
                                                )}
                                            </div>

                                            <div className="form-group-new">
                                                <input
                                                    type="text"
                                                    name="procedure_type"
                                                    value={manualData.procedure_type}
                                                    onChange={handleManualChange}
                                                    placeholder="Procedure type:"
                                                    required
                                                />
                                                {validationErrors.procedure_type && (
                                                    <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px' }}>{validationErrors.procedure_type}</div>
                                                )}
                                            </div>

                                            <div className="form-group-new">
                                                <input
                                                    type="date"
                                                    name="implant_date"
                                                    value={manualData.implant_date}
                                                    onChange={handleManualChange}
                                                    placeholder="Implant date:"
                                                    required
                                                />
                                                {validationErrors.implant_date && (
                                                    <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px' }}>{validationErrors.implant_date}</div>
                                                )}
                                            </div>

                                            <div className="form-group-new">
                                                <input
                                                    type="text"
                                                    name="provider_name"
                                                    value={manualData.provider_name}
                                                    onChange={handleManualChange}
                                                    placeholder="Physician:"
                                                    required
                                                />
                                                {validationErrors.provider_name && (
                                                    <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px' }}>{validationErrors.provider_name}</div>
                                                )}
                                            </div>
                                        </form>

                                        <div className="step-actions">
                                            <button type="button" className="ocr-action-button" onClick={(e) => { e.preventDefault(); handleClose(); }}>
                                                Close
                                            </button>
                                            <button type="button" className="ocr-action-button" onClick={(e) => { e.preventDefault(); handleNext(); }}>
                                                Next
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
                                                    value={manualData.manufacturer}
                                                    onChange={handleManualChange}
                                                    placeholder="Manufacturer :"
                                                    required
                                                />
                                                {validationErrors.manufacturer && (
                                                    <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px' }}>{validationErrors.manufacturer}</div>
                                                )}
                                            </div>

                                            <div className="form-group-new">
                                                <input
                                                    type="text"
                                                    name="catalog_no"
                                                    value={manualData.catalog_no}
                                                    onChange={handleManualChange}
                                                    placeholder="Catalog Number (REF number) :"
                                                    required
                                                />
                                                {validationErrors.catalog_no && (
                                                    <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px' }}>{validationErrors.catalog_no}</div>
                                                )}
                                            </div>

                                            <div className="form-group-new">
                                                <input
                                                    type="text"
                                                    name="udi_pi_lot"
                                                    value={manualData.udi_pi_lot}
                                                    onChange={handleManualChange}
                                                    placeholder="Lot Number :"
                                                    required
                                                />
                                                {validationErrors.udi_pi_lot && (
                                                    <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px' }}>{validationErrors.udi_pi_lot}</div>
                                                )}
                                            </div>

                                            <div className="form-group-new">
                                                <input
                                                    type="text"
                                                    name="udi_di"
                                                    value={manualData.udi_di}
                                                    onChange={handleManualChange}
                                                    placeholder="UDI (14 digits) :"
                                                    maxLength="14"
                                                    required
                                                />
                                                {validationErrors.udi_di && (
                                                    <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px' }}>{validationErrors.udi_di}</div>
                                                )}
                                            </div>

                                            <div className="form-group-new">
                                                <input
                                                    type="text"
                                                    name="part_description"
                                                    value={manualData.part_description}
                                                    onChange={handleManualChange}
                                                    placeholder="Part description :"
                                                    required
                                                />
                                                {validationErrors.part_description && (
                                                    <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px' }}>{validationErrors.part_description}</div>
                                                )}


                                            </div>
                                        </form>

                                        <div className="step-actions">
                                            <button
                                                type="button"
                                                className="ocr-action-button"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setError('');
                                                    setCurrentStep(1);
                                                }}
                                            >
                                                Back
                                            </button>
                                            <button
                                                type="button"
                                                className="ocr-action-button"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setError('');
                                                    handleRegister(e, 'manual');
                                                }}
                                                disabled={isLoading}
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Submit Button - Only show on OCR tab */}
                        {activeTab === 'ocr' && (
                            <div className="flex justify-center items-center gap-[10px]">
                                <button
                                    type="button"
                                    className="ocr-action-button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveTab('manual')
                                        setCurrentStep(1)
                                    }}
                                >
                                    Skip
                                </button>

                                <button
                                    type="button"
                                    className="ocr-action-button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleOcrSubmit();
                                    }}
                                    disabled={isLoading || !uploadedFile}
                                >
                                    {isLoading ? 'Uploading...' : 'Upload'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OCRPage

