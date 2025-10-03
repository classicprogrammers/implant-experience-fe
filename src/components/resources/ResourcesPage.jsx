import React, { useState } from 'react'
import './resources.css'

function ResourcesPage() {
    const [openFaq, setOpenFaq] = useState(null)

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    // FAQ data array
    const faqData = [
        {
            id: 0,
            question: "Lorem Ipsum is simply dummy text of the printing a",
            answer: "Data encryption converts readable information into unreadable code. Only authorized users with the correct key can access it. It protects sensitive data during transfer and storage.",
            padding: "20px"
        },
        {
            id: 1,
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            answer: "Use strong, unique passwords for each account. A password manager can help store them safely. Enable two-factor authentication for extra protection.",
            padding: "20px"
        },
        {
            id: 2,
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            answer: "Disconnect affected devices from the network immediately. Change your passwords and notify your IT or security team. Monitor accounts and activity for unusual behavior.",
            padding: "20px"
        },
        {
            id: 3,
            question: "Lorem Ipsum is simply dummy text of the printing",
            answer: "Updates often include patches for newly discovered vulnerabilities. Running outdated software leaves your system exposed. Enable automatic updates whenever possible...",
            padding: "20px"
        },
        {
            id: 4,
            question: "Lorem Ipsum is simply dummy text of the printing",
            answer: "Updates often include patches for newly discovered vulnerabilities. Running outdated software leaves your system exposed. Enable automatic updates whenever possible...",
            padding: "20px"
        },
        {
            id: 5,
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            answer: "Updates often include patches for newly discovered vulnerabilities. Running outdated software leaves your system exposed. Enable automatic updates whenever possible...",
            padding: "20px"
        }
    ]

    return (
        <div className="flex min-h-[50vh] h-[90vh] items-center justify-center p-[20px]">
            <div className="space-y-4 custom-faq-section max-w-[1280px] mx-auto">
                <div className="mb-12 space-y-0 max-w-[510px]">
                    <h1 className="mx-auto text-start mb-4" style={{ fontSize: '48px', fontWeight: '800', color: '#00325C' }}>
                        Frequently Asked <br />
                        Questions
                    </h1>
                    <p style={{ fontSize: '16px', fontWeight: '400', color: '#00325C', lineHeight: '1.3' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    </p>
                    <div className="w-16 h-1 bg-[#00325C] rounded mt-2"></div>
                </div>
                <div>
                    {faqData.map((faq) => (
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
                                    padding: faq.padding,
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
                                        lineHeight: '1.5'
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
