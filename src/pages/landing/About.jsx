import React from 'react'
import johnOwens from '../../assets/images/JohnOwens.png';
import MarqueeSlider from '../../components/MarqueeSlider';
import { marqueeData } from '../../data/marqueeData';
import marqueeLogo from '../../assets/images/marqueeLogo.png'
import '../../components/MarqueeSlider.css';
import Testimonials from '../../components/Testimonials';
import { testimonialsData } from '../../data/testimonialsData';

const LandingAbout = () => {
  return (
    <div>
      {/* Meet John P. Owens Section */}
      <section className="john-owens-hero-section" style={{ background: 'white', minHeight: '40px', padding: '35px 0 80px 0' }}>
        <div className="john-owens-hero-container">
          <div className="john-owens-content">
            <h1 className="john-owens-title max-w-[850px] mx-auto text-center" style={{ color: '#00325C' }}>Get to know John P. Owens</h1>
          </div>
        </div>
      </section>

      {/* The Implant Experience Section */}
      <section className="implant-experience-section w-[90%] max-w-[1200px] mx-auto rounded-[20px]" style={{ ...styles.implantExperienceSection }}>
        <div className="john-owens-portrait">
          <img src={johnOwens} alt="John P. Owens" className="john-portrait-img" />
        </div>
        <div className="implant-experience-container" style={{ alignItems: 'end' }}>
          <div className="implant-experience-left">
            <h2 className="implant-experience-title about-page">Warm & Human-Centric</h2>
          </div>

          <div className="implant-experience-right">
            <div className="implant-experience-block">
              <p className="implant-experience-text p-[20px]">The stewardship and trust he developed with hospital administration and surgeons is the guiding force behind his desire to see changes in the way the PPI category is managed.
              </p>
            </div>
          </div>
        </div>
        <div style={styles.implantExperienceBottom} className='years-of-experience-section'>
          <p>Years of Experience in
            the Medical Field</p>
          <div style={{ fontSize: '5rem', fontWeight: 'bold' }}>20+</div>
        </div>
      </section>

      {/* John's Experience Section */}
      <section className='w-[90%] max-w-[1200px] mx-auto py-[50px]' style={styles.decadeExperienceSection}>
        <div className="px-4">
          {/* Main Heading */}
          <h2 className="about-page-heading">
            <div>John brings two decades</div>
            <div>of executive sales</div>
            <div>experience</div>
          </h2>

          {/* Body Paragraphs */}
          <div className="space-y-6 text-gray-700">
            <p className="about-page-para">
              John brings two decades of executive sales experience and hundreds of pricing round negotiations as a hospital vendor to his role as Director of our Services offering.
            </p>

            <p className="about-page-para">
              Kermit gets a significant boost from the countless hours John spent in hospital operating rooms and with surgeons as an Account Executive within the PPI industry.
            </p>

            <p className="about-page-para">
              The stewardship and trust he developed with hospital administration and surgeons is the guiding force behind his desire to see changes in the way the PPI category is managed.
            </p>

            <p className="about-page-para">
              John and his group use Kermit's powerful categorization and analytic features to drive supply chain cost reduction and spend management projects for his clients.
            </p>
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
      {/* Testimonials */}
      <Testimonials testimonials={testimonialsData} />
    </div>
  )
}

export default LandingAbout;

const styles = {
  implantExperienceBottom: {
    position: 'absolute',
    bottom: '10px',
    right: '20px',
    width: '170px',
    height: '150px',
    background: 'transparent',
    color: '#fff',
  },
};