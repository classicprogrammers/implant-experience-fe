import { useState } from "react";
import '../../assets/css/newsLetter.css'
import stayuser from '../../assets/images/stayuser.png'
import { FaPlus, FaMinus } from "react-icons/fa6";

function NewsLetter() {
  const topics = [
    {
      date: "5-02-2025",
      title: "Breaking FDA recall notifications",
      content: "Detailed updates on FDA recall notifications and related safety measures.",
    },
    {
      date: "5-02-2025",
      title: "Device-specific safety alerts",
      content: "Latest device alerts and how they impact patients and medical practices.",
    },
    {
      date: "5-02-2025",
      title: "Patient success stories and legal victories",
      content: "Real stories from patients who benefited from timely awareness and care.",
    },
    {
      date: "5-02-2025",
      title: "New research on long-term device impacts",
      content: "Scientific studies exploring long-term safety and device reliability.",
    },
    {
      date: "5-02-2025",
      title: "Advocacy opportunities and legislative updates",
      content: "Stay informed about new laws, reforms, and patient advocacy opportunities.",
    },
    {
      date: "5-02-2025",
      title: "Expert interviews with doctors and former FDA officials",
      content: "Exclusive insights and expert commentary on patient safety topics.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="newsletter-page">
      {/* Hero Section */}
      <section className='newsletter-hero-Section'
      >
        {/* Heading */}
        <div className="news-heading">
          <h1 className="news-heading-title">
            Stay Informed. Stay Protected.
          </h1>
          <p className="text-white/80 text-md sm:text-xl mt-5 leading-relaxed">
            Join our weekly digest of FDA recalls, device safety updates, and patient advocacy
            wins. Because knowledge isn’t just power — it’s survival.
          </p>
        </div>

        {/* Profile + Text */}
        <div className="pofile flex items-center justify-center gap-4 mt-8">
          <div className="flex items-center">
            <div className="flex -space-x-3">
              <img
                src={stayuser}
                alt="User1"
                className="w-30 h-14 "
              />
            </div>
          </div>
          <p className="text-white text-base sm:text-lg font-medium max-w-[200px] text-left">
            Users value our caring, quality care!
          </p>
        </div>

        {/* Email Subscribe Form */}
        <div className="newsletter-form flex items-center bg-white rounded-full mt-10 overflow-hidden w-full max-w-lg shadow-md">
          <input
            type="email"
            placeholder="Your email ..."
            className="flex-1 px-[20px] py-[14px] text-gray-600 text-lg outline-none"
          />
          <button className="bg-[#0ABAB5] hover:bg-[#099e9a] text-white px-[58px] py-[14px] text-lg font-semibold rounded-full flex items-center gap-2 transition-all">
            Subscribe <span className="text-xl">→</span>
          </button>
        </div>

        {/* Bottom Text */}
        <div className="stay-in-touch-content" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
          {/* Top Line Text */}
          <p className="stay-in-touch-subtitle" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            <span className="text-[#10D0DC]">SUBSCRIBE NOW</span>
            <span className="text-white"> TO OUR NEWSLETTER</span>
          </p>

          {/* Main Heading */}
          <h2 className="stay-in-touch-title" style={{ fontFamily: 'Bebas Neue, sans-serif', lineHeight: '1', color: '#10D0DC' }}>
            STAY IN TOUCH
          </h2>
        </div>
      </section>


      <section className="newsletter w-full flex justify-center py-[30px] px-4 bg-white">
        <div className="max-w-5xl w-full">
          {/* === Header === */}
          <div className="header pb-[40px] pt-[20px] text-center display-flex flex-col items-center ">
            <h1 className="news-letter-topic-title">
              Topics Include
            </h1>
            <p className="text-[#555555] text-[16px] mt-2 text-center font-[600]">
              Arolax is a beacon of best innovation and the dynamic parent a
              company of wealcoder and many other subsidiaries.
            </p>
          </div>

          {/* === Topics List === */}
          <div className="topic-list mt-10 divide-y divide-gray-200">
            {topics.map((topic, index) => (
              <div key={index} className="py-5">
                <div
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex justify-between items-center cursor-pointer py-[20px]"
                >
                  <div className="flex gap-10 news-letter-topic-col">
                    <span className="text-[#121212] text-[24px] font-medium w-[200px]">
                      {topic.date}
                    </span>
                    <div>
                      <span className="text-[#121212] text-[24px] font-medium tracking-tight">
                        {topic.title}
                      </span>
                      {openIndex === index && (
                        <div className="mt-1 text-gray-600 text-[15px] leading-relaxed">
                          {topic.content}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="text-[#121212]">
                    {openIndex === index ? (
                      <FaMinus size={16} />
                    ) : (
                      <FaPlus size={16} />
                    )}
                  </div>
                </div>

                {/* === Dropdown === */}

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsLetter
