import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './resources.css'
import arrowLeft from '../../assets/images/ArrowLeft.png'
import readMoreIcon from '../../assets/images/readMore.png'
import { getBlogs, getFaqResources, getSafetyGuides } from './resourcesApis'

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
    const [faqLoading, setFaqLoading] = useState(false)
    const [blogsLoading, setBlogsLoading] = useState(false)
    const [safetyLoading, setSafetyLoading] = useState(false)
    const [faqData, setFaqData] = useState([])
    const [blogCards, setBlogCards] = useState([])
    const [safetyGuides, setSafetyGuides] = useState([])
    const [activeBlogId, setActiveBlogId] = useState(null)

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
        setFaqLoading(true)
        try {
            const faq = await getFaqResources()
            setFaqData(faq)
        } catch (error) {
            console.error('Error fetching FAQ:', error)
        } finally {
            setFaqLoading(false)
        }
    }

    const fetchBlogs = async () => {
        setBlogsLoading(true)
        try {
            const blogs = await getBlogs()
            setBlogCards(blogs)
        } catch (error) {
            console.error('Error fetching blogs:', error)
        } finally {
            setBlogsLoading(false)
        }
    }

    const fetchSafetyGuides = async () => {
        setSafetyLoading(true)
        try {
            const guides = await getSafetyGuides()
            setSafetyGuides(guides)
        } catch (error) {
            console.error('Error fetching safety guides:', error)
        } finally {
            setSafetyLoading(false)
        }
    }

    useEffect(() => {
        fetchFaq()
        fetchBlogs()
        fetchSafetyGuides()
    }, [])

    return (
        <div className="resources-page-container">
            {/* Header Section */}
            <div className="resources-header">
                <button className="back-arrow-btn" onClick={() => navigate(-1)}>
                    <img src={arrowLeft} alt="Back" />
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
                            {safetyLoading ? (
                                <div className="faq-loading">Loading...</div>
                            ) : safetyGuides.length === 0 ? (
                                <div className="faq-loading">No safety guides available.</div>
                            ) : (
                                safetyGuides.map((guide, index) => (
                                    <div className="safety-guide-item" key={guide.id || index}>
                                        <span className="guide-number">{index + 1}.</span>
                                        <div className="guide-content">
                                            <span className="guide-text">{guide.title || 'Safety Measure'}</span>
                                            <span className="guide-description">
                                                {guide.description || guide.summary || 'Details coming soon.'}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            )}
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
                                {blogsLoading ? (
                                    <div className="faq-loading">Loading...</div>
                                ) : blogCards.length === 0 ? (
                                    <div className="faq-loading">No blogs available.</div>
                                ) : (
                                    blogCards.map((blog) => {
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
                                                            <Link
                                                                to={`/resources/blog/${blog.id}`}
                                                                className="blog-read-more"
                                                            >
                                                                Read more
                                                                <span
                                                                    className="blog-read-more-icon"
                                                                    style={{
                                                                        WebkitMaskImage: `url(${readMoreIcon})`,
                                                                        maskImage: `url(${readMoreIcon})`
                                                                    }}
                                                                    aria-hidden="true"
                                                                />
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
                                    })
                                )}
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
                                {faqLoading ? (
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
