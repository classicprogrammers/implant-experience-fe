import React, { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './resources.css'
import { api } from '../../utils/api'
import { blogPosts } from '../../data/blogPosts'

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
    const [activeBlogId, setActiveBlogId] = useState(null)

    const blogCards = useMemo(() => blogPosts, [])

    const toggleSafetyGuides = () => {
        setOpenSafetyGuides(!openSafetyGuides)
        setOpenBlogs(false)
        setOpenFaqs(false)
        setActiveBlogId(null)
    }

    const toggleBlogs = () => {
        setOpenBlogs(!openBlogs)
        setOpenSafetyGuides(false)
        setOpenFaqs(false)
        if (openBlogs) {
            setActiveBlogId(null)
        }
    }

    const toggleFaqs = () => {
        setOpenFaqs(!openFaqs)
        setOpenSafetyGuides(false)
        setOpenBlogs(false)
        setActiveBlogId(null)
    }

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const handleBlogSelect = (blogId) => {
        setActiveBlogId((prev) => (prev === blogId ? null : blogId))
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
                            <div className="resource-icon resource-icon--safety">
                                <img src="/src/assets/images/magicpen.png" alt="Safety Guides" />
                            </div>
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
                            <div className="resource-icon resource-icon--blogs">
                                <img src="/src/assets/images/discount-shape.png" alt="Blogs" />
                            </div>
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
                                {blogCards.map((blog) => {
                                    const tips = blog.tips || []
                                    const [primaryTip, ...secondaryTips] = tips

                                    return (
                                        <div key={blog.id} className="blog-post-wrapper">
                                            <div className="blog-post-card" onClick={() => handleBlogSelect(blog.id)}>
                                                <div className="blog-image">
                                                    <img src={blog.heroImage} alt={blog.title} />
                                                </div>
                                                <div className="blog-content">
                                                    <div className="blog-meta">
                                                        <span className="blog-date">{blog.date}</span>
                                                        <Link to={`/resources/blog/${blog.id}`} className="blog-read-more">
                                                            Read more
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                    <h4 className="blog-title">{blog.title}</h4>
                                                    <p className="blog-description">{blog.excerpt}</p>
                                                </div>
                                            </div>
                                            {activeBlogId === blog.id && (
                                                <div className="blog-detail-preview">
                                                    <div className="blog-detail-main">
                                                        <div className="blog-detail-image">
                                                            <img src={blog.heroImage} alt={blog.title} />
                                                        </div>
                                                        <div className="blog-detail-content">
                                                            <span className="blog-pill">{blog.date}</span>
                                                            <h3>{blog.title}</h3>
                                                            <p className="blog-detail-description">{blog.content}</p>
                                                            {primaryTip && (
                                                                <div className="blog-tip-item">
                                                                    <p className="blog-tip-title">{primaryTip.title}</p>
                                                                    {Array.isArray(primaryTip.body) ? (
                                                                        <ul>
                                                                            {primaryTip.body.map((item, idx) => (
                                                                                <li key={idx}>{item}</li>
                                                                            ))}
                                                                        </ul>
                                                                    ) : (
                                                                        <p>{primaryTip.body}</p>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    {secondaryTips.length > 0 && (
                                                        <div className="blog-tip-list">
                                                            {secondaryTips.map((tip, index) => (
                                                                <div key={index} className="blog-tip-item">
                                                                    <p className="blog-tip-title">{tip.title}</p>
                                                                    {Array.isArray(tip.body) ? (
                                                                        <ul>
                                                                            {tip.body.map((item, idx) => (
                                                                                <li key={idx}>{item}</li>
                                                                            ))}
                                                                        </ul>
                                                                    ) : (
                                                                        <p>{tip.body}</p>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>

                {/* FAQs Section */}
                <div className="resource-section-card">
                    <div className="resource-section-header" onClick={toggleFaqs}>
                        <div className="resource-section-left">
                            <div className="resource-icon resource-icon--faq">
                                <img src="/src/assets/images/magicpen.png" alt="FAQs" />
                            </div>
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
