import { useState } from "react";
import '../../assets/css/newsLetter.css'
import Header from '../../components/header/Header'
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
      {/* Header Component */}
      <Header variant="landing" />
        {/* Hero Section */}
        <section className='newsletter-hero-Section'
    >
      {/* Heading */}
      <div className="news-heading max-w-3xl">
        <h1 className="text-white  sm:text-6xl md:text-7xl leading-tight">
          Stay Informed. Stay Protected.
        </h1>
        <p className="text-white/80 text-md sm:text-xl mt-5 leading-relaxed">
          Join our weekly digest of FDA recalls, device safety updates, and patient advocacy
          wins. Because knowledge isn’t just power — it’s survival.
        </p>
      </div>

      {/* Profile + Text */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <div className="flex items-center">
          <div className="flex -space-x-3">
            <img
              src={stayuser}
              alt="User1"
              className="w-30 h-14 "
            />
            </div>
        </div>
        <p className="text-white text-base sm:text-lg font-medium max-w-xs text-left">
          Users value our caring, quality care!
        </p>
      </div>

      {/* Email Subscribe Form */}
      <div className="flex items-center bg-white rounded-full mt-10 overflow-hidden w-full max-w-lg shadow-md">
        <input
          type="email"
          placeholder="Your email ..."
          className="flex-1 px-[20px] py-[18px] text-gray-600 text-lg outline-none"
        />
        <button className="bg-[#0ABAB5] hover:bg-[#099e9a] text-white px-[58px] py-[18px] text-lg font-semibold rounded-full flex items-center gap-2 transition-all">
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


     <section className="newsletter w-full flex justify-center py-20 px-4 bg-white">
      <div className="max-w-4xl w-full">
        {/* === Header === */}
        <div className="border-b border-gray-200 pb-[20px] pt-[20px] text-center display-flex flex-col items-center ">
          <h1 className="text-[58px] font-extrabold text-black leading-tight">
            Topics Include
          </h1>
          <p className="text-gray-500 text-[14px] mt-2 text-center">
            Arolax is a beacon of best innovation and the dynamic parent a
            company of wealcoder and many other subsidiaries.
          </p>
        </div>

        {/* === Topics List === */}
        <div className="mt-10 divide-y divide-gray-200">
          {topics.map((topic, index) => (
            <div key={index} className="py-5">
              <div
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex justify-between items-center cursor-pointer py-[20px]"
              >
                <div className="flex items-center gap-10">
                  <span className="text-gray-800 text-[15px] w-[90px]">
                    {topic.date}
                  </span>
                  <span className="text-black text-[17px] font-medium tracking-tight">
                    {topic.title}
                  </span>
                </div>

                <div className="text-gray-800">
                  {openIndex === index ? (
                    <FaMinus size={12} />
                  ) : (
                    <FaPlus size={12} />
                  )}
                </div>
              </div>

              {/* === Dropdown === */}
              {openIndex === index && (
                <div className="mt-3 ml-[105px] text-gray-600 text-[15px] leading-relaxed">
                  {topic.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>
    )
}

export default NewsLetter