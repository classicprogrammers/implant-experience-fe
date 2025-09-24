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
                            <h1 class=" mx-auto text-start text-4xl font-bold ">
                                Frequently asked <br />
                                questions
                            </h1>
                        </div>
                        <div>
                            <div class="overflow-hidden mb-2 rounded-md bg-gradient-to-br from-[#121B1B] to-[#141f1f] ">
                                <button class="peer flex w-full justify-between p-5">
                                    <h2 class="font-bold">What is data encryption?</h2>

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                                <p class="max-h-0 translate-y-4 transform px-4 bg-white opacity-0 transition-all duration-400 ease-in-out peer-focus:max-h-[90px] peer-focus:translate-y-0 peer-focus:pb-4 peer-focus:opacity-100">Data encryption converts readable information into unreadable code. Only authorized users with the correct key can access it. It protects sensitive data during transfer and storage.</p>
                            </div>

                            <div class="overflow-hidden mb-2 rounded-md bg-gradient-to-br from-[#121B1B] to-[#141f1f] ">
                                <button class="peer flex w-full justify-between p-5">
                                    <h2 class="font-bold">How can I keep my passwords secure?</h2>

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                                <p class="max-h-0 translate-y-4 transform px-4 bg-white opacity-0 transition-all duration-400 ease-in-out peer-focus:max-h-[90px] peer-focus:translate-y-0 peer-focus:pb-4 peer-focus:opacity-100">Use strong, unique passwords for each account. A password manager can help store them safely. Enable two-factor authentication for extra protection.</p>
                            </div>

                            <div class="overflow-hidden mb-2 rounded-md bg-gradient-to-br from-[#121B1B] to-[#141f1f] ">
                                <button class="peer flex w-full justify-between p-5">
                                    <h2 class="font-bold">What should I do if I suspect a security breach?</h2>

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                                <p class="max-h-0 translate-y-4 transform px-4 bg-white opacity-0 transition-all duration-400 ease-in-out peer-focus:max-h-[90px] peer-focus:translate-y-0 peer-focus:pb-4 peer-focus:opacity-100">Disconnect affected devices from the network immediately. Change your passwords and notify your IT or security team. Monitor accounts and activity for unusual behavior.</p>
                            </div>
                            <div class="overflow-hidden mb-2 rounded-md bg-gradient-to-br from-[#121B1B] to-[#141f1f] ">
                                <button class="peer flex w-full justify-between p-5">
                                    <h2 class="font-bold">Why is regular software updating important</h2>

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                                <p class="max-h-0 translate-y-4 transform px-4 bg-white opacity-0 transition-all duration-400 ease-in-out peer-focus:max-h-[90px] peer-focus:translate-y-0 peer-focus:pb-4 peer-focus:opacity-100">Updates often include patches for newly discovered vulnerabilities. Running outdated software leaves your system exposed. Enable automatic updates whenever possible...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResourcesPage
