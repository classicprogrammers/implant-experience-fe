import { Link } from 'react-router-dom'
import '../../App.css';
import '../../assets/css/landing.css';
import Testimonials from '../../components/Testimonials';
import { testimonialsData } from '../../data/testimonialsData';
import MarqueeSlider from '../../components/MarqueeSlider';
import { marqueeData } from '../../data/marqueeData';
import '../../components/MarqueeSlider.css';
import CoreServices from '../../components/CoreServices';
import { coreServicesData } from '../../data/coreServicesData';
import Episodes from '../../components/Episodes';
import { episodesData } from '../../data/episodesData';
// import logo from '../../assets/images/implant-logo.png';
import badge from '../../assets/images/landingHero.png';
import marqueeLogo from '../../assets/images/marqueeLogo.png'
import stethoscope from '../../assets/images/stethoscope.png'
import meetjohnSec from '../../assets/images/meetjohnSec.png';
import johnOwens from '../../assets/images/JohnOwens.png';
// import workHospital from '../../assets/images/workHospital.png';

function LandingPage() {
  const valueProposition = [
    {
      title: 'Trusted Care',
      subtitle: "Safety Shouldn't Be a Luxury",
      description: 'We\'re not funded by device manufacturers or insurance companies. Our loyalty is to you — the millions living with implanted devices who deserve better than the status quo.'
    },
    {
      title: 'Affordable Access',
      subtitle: 'Built by Patients, For Patients ',
      description: "At just $9.99/month, we're making device safety accessible to everyone. Because whether you have a $50,000 heart device or a $500 mesh implant, you deserve the same level of protection."
    },
    {
      title: 'Real-Time Alerts',
      subtitle: 'Every Second Counts',
      description: 'While the average recall notification takes 3-6 months to reach patients, our system delivers alerts in real-time. The difference could save your life.'
    }
  ]

  return (
    <div className="landing-page">

      <section className="landing-hero-section">
        <div className="landing-hero-container max-w-7xl mx-auto">
          <div className="landing-hero-badge">
            <img src={badge} alt="Badge" className="landing-badge-img" />
          </div>

          <div className="landing-hero-section-content">
            <h2 className="landing-hero-subtitle">Stay Informed. Stay Protected.</h2>
            <h1 className="landing-hero-title">
              Your <span className="landing-highlight-underline">Devices.</span><br />
              Your Data.
            </h1>
            <p className="landing-hero-description">
              Get real-time updates about your device status, data access, and health compliance — all in one place.
            </p>

            <div className="landing-hero-cta">
              <Link to="/signup" className="landing-cta-button">Become a Member</Link>
              <div className="landing-navigation-arrows">
                <button className="landing-nav-arrow prev">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <path d="M44 0.5H6C2.96243 0.5 0.5 2.96243 0.5 6V44C0.5 47.0376 2.96243 49.5 6 49.5H44C47.0376 49.5 49.5 47.0376 49.5 44V6C49.5 2.96243 47.0376 0.5 44 0.5Z" stroke="white" strokeOpacity="0.12" />
                    <path d="M32 24.9996H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M25 19L19 25L25 31" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="landing-nav-arrow next">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <path d="M44 0H6C2.68629 0 0 2.68629 0 6V44C0 47.3137 2.68629 50 6 50H44C47.3137 50 50 47.3137 50 44V6C50 2.68629 47.3137 0 44 0Z" fill="white" fillOpacity="0.2" />
                    <path d="M19 25.0004H31" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M26 31L32 25L26 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Marquee Slider Component */}
      <MarqueeSlider
        items={marqueeData}
        logo={marqueeLogo}
        backgroundColor="#00ACB2"
        textColor="white"
      />
      {/* Section 2 - Mission Statement */}
      <section className="bg-[#133C75] text-white">
        <div className="px-4 sm:px-6 ">
          <div className="flex gap-6 bg-[#0A3C78] items-center custom-flex-col">
            {/* Left side image */}
            <div className="w-full lg:w-5/12">
              <img
                src={stethoscope}
                alt="stethoscope"
                className="w-full h-auto object-cover max-h-[700px]"
              />
            </div>

            {/* Right side content */}
            <div className="w-full lg:w-7/12 p-6 p-[50px] text-white leading-relaxed">
              <div className=''>
                <h2 className="text-6xl md:text-4xl font-bold text-[#82EBED] mb-[20px]">
                  Mission Statement – <br className="hidden md:block" /> The Ethical Obligation
                </h2>

                <p className="text-base leading-relaxed text-white mb-[20px]">
                  Born from the urgent need exposed by countless device failures and regulatory gaps,
                  The Implant Experience is more than a tracking service – it’s a movement toward
                  patient empowerment and device accountability.
                </p>

                <p className="text-base leading-relaxed text-white mb-[20px]">
                  With 32 million Americans living with implanted medical devices and a history of systemic
                  failures in device and implant monitoring, we are building the safety net that should have
                  existed all along. It’s our ethical obligation to do so. Our platform bridges the dangerous
                  gap between device manufacturers, healthcare providers, and the patients whose lives depend
                  on these technologies.
                </p>

                <button className="bg-[#82EBED] text-[18px] text-[#133C75] font-bold px-5 py-2 rounded-[8px] shadow-md hover:bg-[#6bd9da] transition">
                  <Link to="/signup" className='text-[#133C75]'>Become a Member</Link>
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Meet John P. Owens Section */}
      <section className="john-owens-hero-section">
        <div className="meet-john-section-image">
          <img src={meetjohnSec} alt="Meet John Section" className="meet-john-img" />
        </div>
        <div className="john-owens-hero-container">
          <div className="john-owens-content">
            <h1 className="john-owens-title">Meet John P. Owens</h1>
            <h2 className="john-owens-subtitle">John Owens - Founder & CEO</h2>
            <p className="john-owens-description">
              John brings two decades of executive experience in medical device implant management and witnessed firsthand the devastating impact of inadequate device tracking systems. After seeing countless patients struggle with device complications — from Essure birth control failures to metal-on-metal hip disasters — John recognized that the 510(k) clearance process and fragmented surveillance systems were failing millions of Americans.
            </p>
          </div>
        </div>
      </section>

      {/* The Implant Experience Section */}
      <section className="implant-experience-section">
        <div className="max-w-7xl mx-auto px-[15px]">
          <div className="john-owens-portrait">
            <img src={johnOwens} alt="John P. Owens" className="john-portrait-img" />
          </div>
          <div className="implant-experience-container">
            <div className="implant-experience-left">
              <div className='portrait-container-width'>
                <h2 className="implant-experience-title">During My Years Working With Hospitals,</h2>
                <p className="implant-experience-description">
                  I Saw The Human Cost Of Poor Device Oversight. Patients Like Angie Firmalino, Dr. Stephen Tower, And Thousands Of Others Suffered Because Our System Prioritizes Speed To Market Over Safety.
                </p>
                <button className="implant-experience-btn">
                  <Link to="/signup">See more</Link>
                </button>
              </div>
            </div>

            <div className="implant-experience-right">
              <div className='portrait-container-width'>
                <div className="implant-experience-block">
                  <h3 className="implant-experience-subtitle">The Implant Experience is</h3>
                  <p className="implant-experience-text">our answer to a broken system that has left patients in the dark for too long.</p>
                </div>

                <div className="implant-experience-block">
                  <h3 className="implant-experience-subtitle">His Mission:</h3>
                  <p className="implant-experience-text">Transform device tracking from a regulatory afterthought into a patient-centered right.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Value Proposition Section */}
      <section className="value-proposition-section">
        <div className="max-w-7xl mx-auto py-[40px]">
          <h2 className="value-proposition-title">Value Proposition</h2>
          <div className="value-proposition-container ">

            {valueProposition.map((item, index) => (
              <div className="value-proposition-block" key={index}>
                <h2>{item.title}</h2>
                <h3>{item.subtitle}</h3>
                <p style={{ lineHeight: '1.5rem', fontWeight: '300', fontSize: '16px', color: '#FFF' }}>{item.description}</p>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* Core Services Component */}
      <CoreServices services={coreServicesData} />
      {/* Testimonials */}
      <Testimonials testimonials={testimonialsData} />
      {/* Episodes */}
      <Episodes episodes={episodesData} />
    </div >    
  )
}

export default LandingPage