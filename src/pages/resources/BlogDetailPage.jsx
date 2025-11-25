import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getBlogDetail } from '../../components/resources/resourcesApis'
import './BlogDetailPage.css'
import arrowLeft from '../../assets/images/ArrowLeft.png'

const BlogDetailPage = () => {
    const { blogId } = useParams()
    const navigate = useNavigate()
    const [blog, setBlog] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchBlogDetail = async () => {
            setLoading(true)
            setError(null)
            try {
                const blogDetail = await getBlogDetail(blogId)
                setBlog(blogDetail)
            } catch (err) {
                console.error('Error fetching blog detail:', err)
                setError('Blog post not found.')
                setBlog(null)
            } finally {
                setLoading(false)
            }
        }

        if (blogId) {
            fetchBlogDetail()
        }
    }, [blogId])

    const { primaryTip, secondaryTips } = useMemo(() => {
        const tips = blog?.tips || []
        const [first, ...rest] = tips
        return { primaryTip: first, secondaryTips: rest }
    }, [blog])

    const renderStatusCard = (message) => (
        <div className="blog-detail-card">
            <div className="blog-detail-header">
                <button className="blog-detail-back-btn" onClick={() => navigate(-1)} aria-label="Back to resources">
                    <img src={arrowLeft} alt="Back" />
                </button>
                <div className="blog-detail-header-text">
                    <h2>Resources</h2>
                    <p>Guides</p>
                </div>
            </div>
            <div className="blog-detail-preview blog-detail-preview--expanded">
                <p>{message}</p>
            </div>
        </div>
    )

    if (loading) {
        return <div className="blog-detail-page">{renderStatusCard('Loading blog...')}</div>
    }

    if (error || !blog) {
        return <div className="blog-detail-page">{renderStatusCard(error || 'Blog post not found.')}</div>
    }

    return (
        <div className="blog-detail-page">
            <div className="blog-detail-card">
                <div className="blog-detail-header">
                    <button className="blog-detail-back-btn" onClick={() => navigate(-1)} aria-label="Back to resources">
                        <img src={arrowLeft} alt="Back" />
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

