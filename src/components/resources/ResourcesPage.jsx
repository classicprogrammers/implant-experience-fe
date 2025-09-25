import React, { useState } from 'react'
import './resources.css'

function ResourcesPage() {
    const [openFaq, setOpenFaq] = useState(null)

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index)
    }

   

    return (
                <div class="flex min-h-[50vh] h-[90vh] items-center justify-center">
                    <div class="space-y-4 custom-faq-section max-w-[1280px] mx-auto">
                        <div class="mb-12 space-y-0 max-w-[510px]">
                            <h1 class="mx-auto text-start mb-4" style={{ fontSize: '48px', fontWeight: '800', color: '#00325C' }}>
                                Frequently Asked <br />
                                Questions
                            </h1>
                            <p style={{ fontSize: '16px', fontWeight: '400', color: '#00325C', lineHeight: '1.3' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                            <div className="w-16 h-1 bg-[#00325C] rounded mt-2"></div>
                        </div>
                        <div>
                            <div style={{ borderRadius: '8px', backgroundColor: '#00325C', marginBottom: '8px', overflow: 'hidden' }}>
                                <button className="faq-button" style={{ display: 'flex', width: '100%', justifyContent: 'space-between', padding: '12px 20px', background: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => toggleFaq(0)} aria-expanded={openFaq === 0}>
                                    <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#CFD3D7', margin: 0, textAlign: 'left', lineHeight: '1.2', maxWidth: '90%' }}>Lorem Ipsum is simply dummy text of the printing a</h2>

                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d={openFaq === 0 ? "M5 12h14" : "M12 5v14M5 12h14"} stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                                <div className={`faq-answer ${openFaq === 0 ? 'faq-answer-open' : 'faq-answer-closed'}`}>
                                    <div className="faq-answer-content">
                                        <p style={{ margin: 0, color: '#00325C', fontSize: '16px', fontWeight: '400', lineHeight: '1.5' }}>Data encryption converts readable information into unreadable code. Only authorized users with the correct key can access it. It protects sensitive data during transfer and storage.</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ borderRadius: '8px', backgroundColor: '#00325C', marginBottom: '8px', overflow: 'hidden' }}>
                                <button className='faq-button' style={{ display: 'flex', width: '100%', justifyContent: 'space-between', padding: '12px 20px', background: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => toggleFaq(1)} aria-expanded={openFaq === 1}>
                                    <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#CFD3D7', margin: 0, textAlign: 'left', lineHeight: '1.2', maxWidth: '90%' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>

                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d={openFaq === 1 ? "M5 12h14" : "M12 5v14M5 12h14"} stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                                <div className={`faq-answer ${openFaq === 1 ? 'faq-answer-open' : 'faq-answer-closed'}`}>
                                    <div className="faq-answer-content">
                                        <p style={{ margin: 0, color: '#00325C', fontSize: '16px', fontWeight: '400', lineHeight: '1.5' }}>Use strong, unique passwords for each account. A password manager can help store them safely. Enable two-factor authentication for extra protection.</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ borderRadius: '8px', backgroundColor: '#00325C', marginBottom: '8px', overflow: 'hidden' }}>
                                <button className='faq-button' style={{ display: 'flex', width: '100%', justifyContent: 'space-between', padding: '12px 20px', background: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => toggleFaq(2)} aria-expanded={openFaq === 2}>
                                    <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#CFD3D7', margin: 0, textAlign: 'left', lineHeight: '1.2', maxWidth: '90%' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>

                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d={openFaq === 2 ? "M5 12h14" : "M12 5v14M5 12h14"} stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                                <div className={`faq-answer ${openFaq === 2 ? 'faq-answer-open' : 'faq-answer-closed'}`}>
                                    <div className="faq-answer-content">
                                        <p style={{ margin: 0, color: '#00325C', fontSize: '16px', fontWeight: '400', lineHeight: '1.5' }}>Disconnect affected devices from the network immediately. Change your passwords and notify your IT or security team. Monitor accounts and activity for unusual behavior.</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ borderRadius: '8px', backgroundColor: '#00325C', marginBottom: '8px', overflow: 'hidden' }}>
                                <button className='faq-button' style={{ display: 'flex', width: '100%', justifyContent: 'space-between', padding: '12px 20px', background: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => toggleFaq(3)} aria-expanded={openFaq === 3}>
                                    <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#CFD3D7', margin: 0, textAlign: 'left', lineHeight: '1.2', maxWidth: '90%' }}>Lorem Ipsum is simply dummy text of the printing </h2>

                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d={openFaq === 3 ? "M5 12h14" : "M12 5v14M5 12h14"} stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                                <div className={`faq-answer ${openFaq === 3 ? 'faq-answer-open' : 'faq-answer-closed'}`}>
                                    <div className="faq-answer-content">
                                        <p style={{ margin: 0, color: '#00325C', fontSize: '16px', fontWeight: '400', lineHeight: '1.5' }}>Updates often include patches for newly discovered vulnerabilities. Running outdated software leaves your system exposed. Enable automatic updates whenever possible...</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ borderRadius: '8px', backgroundColor: '#00325C', marginBottom: '8px', overflow: 'hidden' }}>
                                <button className='faq-button' style={{ display: 'flex', width: '100%', justifyContent: 'space-between', padding: '12px 20px', background: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => toggleFaq(4)} aria-expanded={openFaq === 4}>
                                    <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#CFD3D7', margin: 0, textAlign: 'left', lineHeight: '1.2', maxWidth: '90%' }}>Lorem Ipsum is simply dummy text of the printing </h2>

                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d={openFaq === 4 ? "M5 12h14" : "M12 5v14M5 12h14"} stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>


                                <div className={`faq-answer ${openFaq === 4 ? 'faq-answer-open' : 'faq-answer-closed'}`}>
                                    <div className="faq-answer-content">
                                        <p style={{ margin: 0, color: '#00325C', fontSize: '16px', fontWeight: '400', lineHeight: '1.5' }}>Updates often include patches for newly discovered vulnerabilities. Running outdated software leaves your system exposed. Enable automatic updates whenever possible...</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ borderRadius: '8px', backgroundColor: '#00325C', marginBottom: '8px', overflow: 'hidden' }}>
                                <button className='faq-button' style={{ display: 'flex', width: '100%', justifyContent: 'space-between', padding: '12px 20px', background: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => toggleFaq(5)} aria-expanded={openFaq === 5}>
                                    <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#CFD3D7', margin: 0, textAlign: 'left', lineHeight: '1.2', maxWidth: '90%' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>

                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d={openFaq === 5 ? "M5 12h14" : "M12 5v14M5 12h14"} stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                                <div className={`faq-answer ${openFaq === 5 ? 'faq-answer-open' : 'faq-answer-closed'}`}>
                                    <div className="faq-answer-content">
                                        <p style={{ margin: 0, color: '#00325C', fontSize: '16px', fontWeight: '400', lineHeight: '1.5' }}>Updates often include patches for newly discovered vulnerabilities. Running outdated software leaves your system exposed. Enable automatic updates whenever possible...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default ResourcesPage
