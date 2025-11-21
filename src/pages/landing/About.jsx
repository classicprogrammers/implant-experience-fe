import React from 'react'
import johnOwens from '../../assets/images/JohnOwens.png';
import MarqueeSlider from '../../components/MarqueeSlider';
import { marqueeData } from '../../data/marqueeData';
import marqueeLogo from '../../assets/images/marqueeLogo.png'
import '../../assets/css/about.css';
import '../../components/MarqueeSlider.css';
import Testimonials from '../../components/Testimonials';
import { testimonialsData } from '../../data/testimonialsData';

const LandingAbout = () => {
  return (
    <div>
      {/* Meet John P. Owens Section */}
      {/* Header Section */}
      <section className="about-header-section">
        <div className="about-header-container">
          <h1 className="about-header-title">Get to know John P. Owens</h1>
        </div>
      </section>

      <section className="about-card-section container ">
        <div className="about-card">
          <div className="about-card-left-content">
            <h2 className="about-card-title">WARM &<br />HUMAN-CENTRIC</h2>
          </div>

          <div className="about-card-image-center">
            <img src={johnOwens} alt="John P. Owens" />
          </div>

          <div className="about-card-right-content">
            <p className="about-card-text">
              The stewardship and trust he developed with hospital administration and surgeons is the guiding force behind his desire to see changes in the way the PPI category is managed.
            </p>

            <div className="about-card-badge">
              <p className="badge-label">Years of<br />Experience in<br />the Medical Field</p>
              <div className="badge-number">20+</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-experience-section">
        <div className="about-experience-container">
          
            <div className="experience-heading"> <h2 >John brings two decades
           of executive sales
           experience
          </h2>
          </div>

          <div className="experience-content">
            <p className="experience-para">
              John brings two decades of executive sales experience and hundreds of pricing round negotiations as a hospital vendor to his role as Director of our Services offering.
            </p>

            <p className="experience-para">
              Kermit gets a significant boost from the countless hours John spent in hospital operating rooms and with surgeons as an Account Executive within the PPI industry.
            </p>

            <p className="experience-para">
              The stewardship and trust he developed with hospital administration and surgeons is the guiding force behind his desire to see changes in the way the PPI category is managed.
            </p>

            <p className="experience-para">
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

// const styles = {
//   implantExperienceBottom: {
//     position: 'absolute',
//     bottom: '10px',
//     right: '20px',
//     width: '170px',
//     height: '150px',
//     background: 'transparent',
//     color: '#fff',
//   },
// };