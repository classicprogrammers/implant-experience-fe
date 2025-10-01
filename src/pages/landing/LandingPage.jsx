import { Link } from 'react-router-dom'
import '../../App.css';
import '../../assets/css/landing.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
// import logo from '../../assets/images/implant-logo.png';
import badge from '../../assets/images/landingHero.png';
import marqueeLogo from '../../assets/images/marqueeLogo.png'
import stethoscope from '../../assets/images/stethoscope.png'

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Header Component */}
      <Header variant="landing" />

      <section className="landing-hero-section">
        <div className="landing-hero-container container">
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
      {/*  */}
      <div className="overflow-hidden bg-[#00ACB2] py-[5px]">
        <div className="flex animate-marquee whitespace-nowrap">
          <div className="flex items-center gap-[50px] text-white mx-[40px]">
            <h1 className="text-lg font-bold">Trusted Care</h1>
            <img src={marqueeLogo} alt="" className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-[50px] text-white mx-[40px]">
            <h1 className="text-lg font-semibold">Affordable Access</h1>
            <img src={marqueeLogo} alt="" className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-[50px] text-white mx-[40px]">
            <h1 className="text-lg font-semibold">Real-Time Alerts</h1>
            <img src={marqueeLogo} alt="" className="w-5 h-5" />
          </div>
          {/* Duplicate content for seamless loop */}
          <div className="flex items-center gap-[50px] text-white mx-[40px]">
            <h1 className="text-lg font-semibold">Trusted Care</h1>
            <img src={marqueeLogo} alt="" className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-[50px] text-white mx-[40px]">
            <h1 className="text-lg font-semibold">Affordable Access</h1>
            <img src={marqueeLogo} alt="" className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-[50px] text-white mx-[40px]">
            <h1 className="text-lg font-semibold">Real-Time Alerts</h1>
            <img src={marqueeLogo} alt="" className="w-5 h-5" />
          </div>
        </div>
      </div>
      {/* Section 2 - Mission Statement */}
      <section className="bg-[#133C75] text-white">
        <div className="grid grid-cols-12 gap-6 bg-[#0A3C78] items-center">
          {/* Left side image */}
          <div className="col-span-12 md:col-span-5 lg:col-span-4 p-4">
            <img
              src={stethoscope}
              alt="stethoscope"
              className="w-full h-auto max-h-[700px]"
            />
          </div>

          {/* Right side content */}
          <div className="col-span-12 md:col-span-7 lg:col-span-8 p-6 p-[50px] text-white leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-bold text-[#82EBED] mb-[20px]">
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


      </section>
      {/* section Meet John P.Ownens */}
      <div className="meet flex flex-col justify-between items-center py-[20px]">
        <h1 className='font-bold text-[55px]'>Meet John P. Owens</h1>
        <p className='font-bold text-[26px]'>John Owens-Founder & CEO</p>
        <p className='font-bold text-[22px]'>John brings two decades of executive experience in medical device implant management and witnessed
          firsthand the devastating impact of inadequate device tracking systems.
          After seeing countless patients struggle with device complications — from Essure birth control failures to metal-on-metal hip disasters — John recognized that the 510(k)
          clearance process and fragmented surveillance systems were failing millions of Americans.</p>
      </div>
      <section>

      </section>


      <Footer />
    </div >
  )
}

export default LandingPage