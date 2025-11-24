import React, { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { blogPosts } from '../../data/blogPosts'
import './BlogDetailPage.css'

const BlogDetailPage = () => {
    const { blogId } = useParams()
    const navigate = useNavigate()
    const blog = blogPosts.find((post) => post.id === blogId)

    const { primaryTip, secondaryTips } = useMemo(() => {
        const tips = blog?.tips || []
        const [first, ...rest] = tips
        return { primaryTip: first, secondaryTips: rest }
    }, [blog])

    if (!blog) {
        return (
            <div className="blog-detail-page">
                <button className="back-button" onClick={() => navigate(-1)}>
                    ← Back
                </button>
                <p>Blog post not found.</p>
            </div>
        )
    }

    return (
        <div className="blog-detail-page">
            <div className="blog-detail-card">
                <div className="blog-detail-header">
                    <button className="blog-detail-back-btn" onClick={() => navigate(-1)} aria-label="Back to resources">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#5F6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <div className="blog-detail-header-text">
                        <h2>Resources</h2>
                        <p>Guides</p>
                    </div>
                </div>
                <div className="blog-detail-preview blog-detail-preview--expanded">
                    <div className="blog-detail-main">
                        <div className="blog-detail-image">
                            <img src={blog.heroImage} alt={blog.title} />
                        </div>
                        <div className="blog-detail-content">
                            <span className="blog-pill">{blog.date}</span>
                            <h1>{blog.title}</h1>
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
            </div>
        </div>
    )
}

export default BlogDetailPage

