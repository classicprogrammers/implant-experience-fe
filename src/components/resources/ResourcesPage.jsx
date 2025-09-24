import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import TopNavbar from '../navbar/TopNavbar'
import './resources.css'

function ResourcesPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [openFaq, setOpenFaq] = useState(null)

    const handleMenuToggle = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const handleSidebarClose = () => {
        setIsSidebarOpen(false)
    }

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const faqData = [
        {
            question: "Lorem Ipsum is simply dummy text of the printing a",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }
    ]

    return (
        <div className="dashboard-layout">
            <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
            <TopNavbar onMenuToggle={handleMenuToggle} />
            <div className="main-content">
                <div class="flex min-h-[50vh] items-center justify-center">
                    <div class="space-y-4 custom-faq-section max-w-[1280px] mx-auto">
                        <div class="mb-12 space-y-0">
                            <h1 class="mx-auto text-start mb-4" style={{ fontSize: '48px', fontWeight: '800', color: '#00325C' }}>
                                Frequently Asked <br />
                                Questions
                            </h1>
                            <p style={{ fontSize: '16px', fontWeight: '400', color: '#00325C', lineHeight: '1.3' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                            <div className="w-16 h-1 bg-[#00325C] rounded mt-2"></div>
                        </div>
                        <div>
                            <div style={{ borderRadius: '8px', backgroundColor: '#00325C', marginBottom: '8px', overflow: 'hidden' }}>
                                <button style={{ display: 'flex', width: '100%', justifyContent: 'space-between', padding: '12px 20px', background: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => toggleFaq(0)}>
                                    <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#CFD3D7', margin: 0, textAlign: 'left', lineHeight: '1.2' }}>Lorem Ipsum is simply dummy text of the printing a</h2>

                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d={openFaq === 0 ? "M5 12h14" : "M12 5v14M5 12h14"} stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                                {openFaq === 0 && (
                                    <div style={{ padding: '0 20px 16px 20px', backgroundColor: 'white' }}>
                                        <p style={{ margin: 0, color: '#00325C', fontSize: '16px', fontWeight: '400', lineHeight: '1.5' }}>Data encryption converts readable information into unreadable code. Only authorized users with the correct key can access it. It protects sensitive data during transfer and storage.</p>
                                    </div>
                                )}
                            </div>

                            <div style={{ borderRadius: '8px', backgroundColor: '#00325C', marginBottom: '8px', overflow: 'hidden' }}>
                                <button style={{ display: 'flex', width: '100%', justifyContent: 'space-between', padding: '12px 20px', background: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => toggleFaq(1)}>
                                    <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#CFD3D7', margin: 0, textAlign: 'left', lineHeight: '1.2' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>

                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d={openFaq === 1 ? "M5 12h14" : "M12 5v14M5 12h14"} stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                                {openFaq === 1 && (
                                    <div style={{ padding: '0 20px 16px 20px', backgroundColor: 'white' }}>
                                        <p style={{ margin: 0, color: '#00325C', fontSize: '16px', fontWeight: '400', lineHeight: '1.5' }}>Use strong, unique passwords for each account. A password manager can help store them safely. Enable two-factor authentication for extra protection.</p>
                                    </div>
                                )}
                            </div>

                            <div style={{ borderRadius: '8px', backgroundColor: '#00325C', marginBottom: '8px', overflow: 'hidden' }}>
                                <button style={{ display: 'flex', width: '100%', justifyContent: 'space-between', padding: '12px 20px', background: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => toggleFaq(2)}>
                                    <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#CFD3D7', margin: 0, textAlign: 'left', lineHeight: '1.2' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>

                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d={openFaq === 2 ? "M5 12h14" : "M12 5v14M5 12h14"} stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                                {openFaq === 2 && (
                                    <div style={{ padding: '0 20px 16px 20px', backgroundColor: 'white' }}>
                                        <p style={{ margin: 0, color: '#00325C', fontSize: '16px', fontWeight: '400', lineHeight: '1.5' }}>Disconnect affected devices from the network immediately. Change your passwords and notify your IT or security team. Monitor accounts and activity for unusual behavior.</p>
                                    </div>
                                )}
                            </div>
                            <div style={{ borderRadius: '8px', backgroundColor: '#00325C', marginBottom: '8px', overflow: 'hidden' }}>
                                <button style={{ display: 'flex', width: '100%', justifyContent: 'space-between', padding: '12px 20px', background: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => toggleFaq(3)}>
                                    <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#CFD3D7', margin: 0, textAlign: 'left', lineHeight: '1.2' }}>Lorem Ipsum is simply dummy text of the printing </h2>

                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d={openFaq === 3 ? "M5 12h14" : "M12 5v14M5 12h14"} stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                                {openFaq === 3 && (
                                    <div style={{ padding: '0 20px 16px 20px', backgroundColor: 'white' }}>
                                        <p style={{ margin: 0, color: '#00325C', fontSize: '16px', fontWeight: '400', lineHeight: '1.5' }}>Updates often include patches for newly discovered vulnerabilities. Running outdated software leaves your system exposed. Enable automatic updates whenever possible...</p>
                                    </div>
                                )}
                            </div>
                            <div style={{ borderRadius: '8px', backgroundColor: '#00325C', marginBottom: '8px', overflow: 'hidden' }}>
                                <button style={{ display: 'flex', width: '100%', justifyContent: 'space-between', padding: '12px 20px', background: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => toggleFaq(4)}>
                                    <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#CFD3D7', margin: 0, textAlign: 'left', lineHeight: '1.2' }}>Lorem Ipsum is simply dummy text of the printing </h2>

                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d={openFaq === 4 ? "M5 12h14" : "M12 5v14M5 12h14"} stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                                {openFaq === 4 && (
                                    <div style={{ padding: '0 20px 16px 20px', backgroundColor: 'white' }}>
                                        <p style={{ margin: 0, color: '#00325C', fontSize: '16px', fontWeight: '400', lineHeight: '1.5' }}>Updates often include patches for newly discovered vulnerabilities. Running outdated software leaves your system exposed. Enable automatic updates whenever possible...</p>
                                    </div>
                                )}
                            </div>
                            <div style={{ borderRadius: '8px', backgroundColor: '#00325C', marginBottom: '8px', overflow: 'hidden' }}>
                                <button style={{ display: 'flex', width: '100%', justifyContent: 'space-between', padding: '12px 20px', background: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => toggleFaq(5)}>
                                    <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#CFD3D7', margin: 0, textAlign: 'left', lineHeight: '1.2' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>

                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d={openFaq === 5 ? "M5 12h14" : "M12 5v14M5 12h14"} stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                                {openFaq === 5 && (
                                    <div style={{ padding: '0 20px 16px 20px', backgroundColor: 'white' }}>
                                        <p style={{ margin: 0, color: '#00325C', fontSize: '16px', fontWeight: '400', lineHeight: '1.5' }}>Updates often include patches for newly discovered vulnerabilities. Running outdated software leaves your system exposed. Enable automatic updates whenever possible...</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResourcesPage
