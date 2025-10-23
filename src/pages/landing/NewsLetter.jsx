import React from 'react'
import '../../assets/css/newsLetter.css'
import Header from '../../components/header/Header'
import { FaPlus } from "react-icons/fa6";

function NewsLetter() {
    return (
          <div className="newsletter-page">
      {/* Header Component */}
      <Header variant="landing" />
        {/* Hero Section */}
        <section className='hero-Section'
    >
      {/* Heading */}
      <div className="max-w-3xl">
        <h1 className="text-white font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight">
          Stay Informed. Stay Protected.
        </h1>
        <p className="text-white/80 text-lg sm:text-xl mt-5 leading-relaxed">
          Join our weekly digest of FDA recalls, device safety updates, and patient advocacy
          wins. Because knowledge isn’t just power — it’s survival.
        </p>
      </div>

      {/* Profile + Text */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <div className="flex items-center">
          <div className="flex -space-x-3">
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="User1"
              className="w-12 h-12 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="User2"
              className="w-12 h-12 rounded-full border-2 border-white object-cover"
            />
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-white">
              <FaPlus className="text-[#0ABAB5]" size={18} />
            </div>
          </div>
        </div>
        <p className="text-white text-base sm:text-lg font-medium max-w-xs text-left">
          Users value our caring, quality care!
        </p>
      </div>

      {/* Email Subscribe Form */}
      <div className="flex items-center bg-white rounded-full mt-10 overflow-hidden w-full max-w-xl shadow-md">
        <input
          type="email"
          placeholder="Your email ..."
          className="flex-1 px-6 py-4 text-gray-600 text-lg outline-none"
        />
        <button className="bg-[#0ABAB5] hover:bg-[#099e9a] text-white px-8 py-4 text-lg font-semibold rounded-full flex items-center gap-2 transition-all">
          Subscribe <span className="text-xl">→</span>
        </button>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center">
        <p className="text-[#0ABAB5] font-semibold text-lg">
          SUBSCRIBE NOW <span className="text-white">TO OUR NEWSLETTER</span>
        </p>
        <h2 className="text-[#0ABAB5] font-extrabold text-5xl sm:text-6xl mt-2 tracking-wide">
          STAY IN TOUCH
        </h2>
      </div>
    </section>
      </div>
    )
}

export default NewsLetter