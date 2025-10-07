import React from 'react';

const Newsletter = () => {
    return (
        <section className="bg-[#00BCD4] py-12 px-4 sm:px-6 lg:px-8 relative">
            {/* Bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#002850]"></div>

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Left Content Block */}
                    <div className="text-center lg:text-left">
                        {/* Top Line Text */}
                        <p className="text-sm sm:text-base font-bold mb-2">
                            <span className="text-[#003878]">SUBSCRIBE NOW</span>
                            <span className="text-white"> TO OUR NEWSLETTER</span>
                        </p>

                        {/* Main Heading */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#003878] uppercase leading-tight">
                            STAY IN TOUCH
                        </h2>
                    </div>

                    {/* Right Content Block - Subscription Form */}
                    <div className="w-full lg:w-auto">
                        <div className="flex flex-col sm:flex-row gap-0">
                            {/* Email Input Field */}
                            <input
                                type="email"
                                placeholder="Your email ..."
                                className="px-4 py-3 text-sm sm:text-base text-gray-900 placeholder-gray-400 bg-white rounded-l-lg sm:rounded-r-none border-0 focus:outline-none focus:ring-2 focus:ring-[#003878] focus:ring-opacity-50 w-full sm:w-64"
                            />

                            {/* Subscribe Button */}
                            <button className="px-6 py-3 bg-[#003878] text-white text-sm sm:text-base font-medium rounded-r-lg sm:rounded-l-none hover:bg-[#002850] transition-colors duration-200 flex items-center justify-center gap-2">
                                Subscribe
                                <span className="text-white">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;

