import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './resources.css'
import { api } from '../../utils/api'

// TODO: Add your icon images here
// import safetyGuidesIcon from '../../assets/images/safety-guides-icon.png'
// import blogsIcon from '../../assets/images/blogs-icon.png'
// import faqsIcon from '../../assets/images/faqs-icon.png'

function ResourcesPage() {
    const navigate = useNavigate()
    const [openSafetyGuides, setOpenSafetyGuides] = useState(false)
    const [openBlogs, setOpenBlogs] = useState(false)
    const [openFaqs, setOpenFaqs] = useState(false)
    const [openFaq, setOpenFaq] = useState(null)
    const [loading, setLoading] = useState(false)
    const [faqData, setFaqData] = useState([])

    const toggleSafetyGuides = () => {
        setOpenSafetyGuides(!openSafetyGuides)
        setOpenBlogs(false) // Close Blogs if open
        setOpenFaqs(false) // Close FAQs if open
    }

    const toggleBlogs = () => {
        setOpenBlogs(!openBlogs)
        setOpenSafetyGuides(false) // Close Safety Guides if open
        setOpenFaqs(false) // Close FAQs if open
    }

    const toggleFaqs = () => {
        setOpenFaqs(!openFaqs)
        setOpenSafetyGuides(false) // Close Safety Guides if open
        setOpenBlogs(false) // Close Blogs if open
    }

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const fetchFaq = async () => {
        setLoading(true)
        try {
            const response = await api.get('/faq')
            setFaqData(response.data.data)
        } catch (error) {
            console.error('Error fetching FAQ:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchFaq()
    }, [])

    return (
        <div className="resources-page-container">
            {/* Header Section */}
            <div className="resources-header">
                <button className="back-arrow-btn" onClick={() => navigate(-1)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <div className="resources-header-text">
                    <h1>Resources</h1>
                    <p>Guides</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="resources-content">
                {/* Safety Guides Section */}
                <div className="resource-section-card">
                    <div className="resource-section-header" onClick={toggleSafetyGuides}>
                        <div className="resource-section-left">
                            {/* TODO: Replace with your Safety Guides icon image */}
                            <img src="/path-to-safety-guides-icon.png" alt="Safety Guides" className="resource-icon" />
                            <div className="resource-section-info">
                                <h3>Safety Guides</h3>
                                {openSafetyGuides && <p className="header-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>}
                            </div>
                        </div>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            className={`chevron-icon ${openSafetyGuides ? 'open' : ''}`}
                        >
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    {openSafetyGuides && (
                        <div className="resource-section-dropdown">
                            <div className="safety-guide-item">
                                <span className="guide-number">1.</span>
                                <div className="guide-content">
                                    <span className="guide-text">Safety Measure</span>
                                    <span className="guide-description">Safety Text goes here</span>
                                </div>
                            </div>
                            <div className="safety-guide-item">
                                <span className="guide-number">2.</span>
                                <div className="guide-content">
                                    <span className="guide-text">Safety Measure</span>
                                    <span className="guide-description">Safety Text goes here</span>
                                </div>
                            </div>
                            <div className="safety-guide-item">
                                <span className="guide-number">3.</span>
                                <div className="guide-content">
                                    <span className="guide-text">Safety Measure</span>
                                    <span className="guide-description">Safety Text goes here</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Blogs Section */}
                <div className="resource-section-card blogs-card">
                    <div className="resource-section-header" onClick={toggleBlogs}>
                        <div className="resource-section-left">
                            {/* TODO: Replace with your Blogs icon image */}
                            <img src="/path-to-blogs-icon.png" alt="Blogs" className="resource-icon" />
                            <div className="resource-section-info">
                                <h3>Blogs</h3>
                                {openBlogs && <p className="header-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>}
                            </div>
                        </div>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            className={`chevron-icon ${openBlogs ? 'open' : ''}`}
                        >
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    {openBlogs && (
                        <div className="blogs-dropdown-container">
                            <div className="blog-posts-list">
                                {/* Blog Post 1 */}
                                <div className="blog-post-card">
                                    <div className="blog-image">
                                        {/* TODO: Replace with actual blog image */}
                                        <img src="/path-to-blog-image-1.jpg" alt="Blog post" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <span className="blog-date">July 2, 2025</span>
                                        </div>
                                        <h4 className="blog-title">How to Maintain Healthy Lungs for Life</h4>
                                        <p className="blog-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <div className="blog-read-more-wrapper">
                                            <a href="#" className="blog-read-more">Read more
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Blog Post 2 */}
                                <div className="blog-post-card">
                                    <div className="blog-image">
                                        {/* TODO: Replace with actual blog image */}
                                        <img src="/path-to-blog-image-2.jpg" alt="Blog post" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <span className="blog-date">July 2, 2025</span>
                                        </div>
                                        <h4 className="blog-title">How to Maintain Healthy Lungs for Life</h4>
                                        <p className="blog-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <div className="blog-read-more-wrapper">
                                            <a href="#" className="blog-read-more">Read more
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Blog Post 3 */}
                                <div className="blog-post-card">
                                    <div className="blog-image">
                                        {/* TODO: Replace with actual blog image */}
                                        <img src="/path-to-blog-image-3.jpg" alt="Blog post" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <span className="blog-date">December 4, 2024</span>
                                            <a href="#" className="blog-read-more">Read more
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </a>
                                        </div>
                                        <h4 className="blog-title">How to Maintain Healthy Lungs for Life</h4>
                                        <p className="blog-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* FAQs Section */}
                <div className="resource-section-card">
                    <div className="resource-section-header" onClick={toggleFaqs}>
                        <div className="resource-section-left">
                            {/* TODO: Replace with your FAQs icon image */}
                            <img src="/path-to-faqs-icon.png" alt="FAQs" className="resource-icon" />
                            <div className="resource-section-info">
                                <h3>FAQs</h3>
                                {openFaqs && <p className="header-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>}
                            </div>
                        </div>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            className={`chevron-icon ${openFaqs ? 'open' : ''}`}
                        >
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    {openFaqs && (
                        <div className="faq-dropdown-container">
                            <div className="faq-items-section">
                                {loading ? (
                                    <div className="faq-loading">Loading...</div>
                                ) : (
                                    faqData.map((faq) => (
                                        <div
                                            key={faq.id}
                                            className="faq-item-panel"
                                        >
                                            <button
                                                className="faq-item-button"
                                                onClick={() => toggleFaq(faq.id)}
                                                aria-expanded={openFaq === faq.id}
                                            >
                                                <h3>{faq.question}</h3>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d={openFaq === faq.id ? "M5 12h14" : "M12 5v14M5 12h14"}
                                                        stroke="white"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>

                                            <div className={`faq-item-answer ${openFaq === faq.id ? 'faq-item-answer-open' : 'faq-item-answer-closed'}`}>
                                                <p>{faq.answer}</p>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ResourcesPage
