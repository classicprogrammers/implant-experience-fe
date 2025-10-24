import React from 'react';

const Newsletter = () => {
    return (
        <section className="relative" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            {/* Teal Block */}
            <div className="bg-[#00ACB2] py-[40px] px-[4px] sm:px-[6px] lg:px-[8px]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex sm:flex-col lg:flex-row items-center justify-between gap-[32px]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                        {/* Left Content Block */}
                        <div className="text-center lg:text-left w-[400px] max-w-full" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                            {/* Top Line Text */}
                            <p className="text-2xl font-bold mb-[8px]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                <span className="text-[#1D2939]">SUBSCRIBE NOW</span>
                                <span className="text-white"> TO OUR NEWSLETTER</span>
                            </p>

                            {/* Main Heading */}
                            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[#1D2939] uppercase leading-tight" style={{ fontFamily: 'Bebas Neue, sans-serif' , lineHeight: '1' }}>
                                STAY IN TOUCH
                            </h2>
                        </div>

                        {/* Right Content Block - Subscription Form */}
                        <div className="w-full lg:w-auto flex justify-center">
                            <div className="flex bg-white rounded-[24px] overflow-hidden shadow-lg w-full max-w-[500px] lg:w-[500px]">
                                {/* Email Input Field */}
                                <input
                                    type="email"
                                    placeholder="Your email ..."
                                    className="px-[20px] py-[12px] text-base text-gray-900 placeholder-gray-500 bg-transparent border-0 focus:outline-none w-full h-[48px] flex-1"
                                />

                                {/* Subscribe Button */}
                                <button className="px-[24px] py-[12px] bg-[#003878] text-white text-base font-medium hover:bg-[#002850] transition-colors duration-200 flex items-center justify-center gap-[8px] h-[48px] flex-shrink-0 rounded-[24px]">
                                    Subscribe
                                    <span className="text-white text-lg">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Newsletter;

