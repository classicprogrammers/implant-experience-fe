import React, { useEffect, useState } from 'react'
import './resources.css'
import { api } from '../../utils/api'

function ResourcesPage() {
    const [openFaq, setOpenFaq] = useState(null);
    const [loading, setLoading] = useState(false);
    const [faqData, setFaqData] = useState([]);

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
        <div className="flex min-h-[50vh] h-[90vh] items-center justify-center p-[20px]">
            <div className="space-y-4 custom-faq-section max-w-[1280px] mx-auto">
                <div className="mb-12 space-y-0 max-w-[510px]">
                    <h1 className="mx-auto text-start mb-3" style={{ fontSize: '48px', fontWeight: '800', color: '#00325C' }}>
                        Frequently Asked <br />
                        Questions
                    </h1>
                    <p style={{ fontSize: '16px', fontWeight: '400', color: '#00325C', lineHeight: '1.3' }}>
                        Get answers to common questions about your implants, reports, and account settings here.
                    </p>
                    <div className="w-16 h-1 bg-[#00325C] rounded mt-2"></div>
                </div>
                <div>
                    {loading ? <div className='flex justify-center items-center h-full'>Loading...</div> : faqData.map((faq) => (
                        <div
                            key={faq.id}
                            style={{
                                borderRadius: '8px',
                                backgroundColor: '#00325C',
                                marginBottom: '8px',
                                overflow: 'hidden'
                            }}
                        >
                            <button
                                className="faq-button"
                                style={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    padding: '20px',
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                                onClick={() => toggleFaq(faq.id)}
                                aria-expanded={openFaq === faq.id}
                            >
                                <h2 style={{
                                    fontSize: '16px',
                                    fontWeight: '800',
                                    color: '#CFD3D7',
                                    margin: 0,
                                    textAlign: 'left',
                                    lineHeight: '1.2',
                                    maxWidth: '90%'
                                }}>
                                    {faq.question}
                                </h2>

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

                            <div className={`faq-answer ${openFaq === faq.id ? 'faq-answer-open' : 'faq-answer-closed'}`}>
                                <div className="faq-answer-content">
                                    <p style={{
                                        margin: 0,
                                        color: '#00325C',
                                        fontSize: '16px',
                                        fontWeight: '400',
                                        lineHeight: '1.5',
                                        paddingTop: '20px'
                                    }}>
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ResourcesPage
