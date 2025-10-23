import React from 'react'
import Header from '../../components/header/Header'
import '../../assets/css/resources.css'
import Popular from "../../assets/images/popularTopic.jpg";
import { FaPlay } from "react-icons/fa";


function Resources() {
  return (
    <div className="resources-page">
      {/* Header Component */}
      <Header variant="landing" />

      {/* Hero Section */}
      <section className="hero-Section flex justify-center items-center">
        <h1 className="text-white font-semibold text-3xl">Resources - Topics</h1>
      </section>

      {/* Popular Topics Section */}
      <section className="popular-topics flex justify-center items-center py-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1>Popular Topics</h1>
          <div className="image-container">
            <img src={Popular} alt="Popular Topic" className="image" />

            <span className="date-badge">July 2, 2025</span>

            <div className="play-icon">
              <FaPlay />
            </div>
          </div>
    <div class="image-details">
      <div className='comment-line'> 
  <div class="blog-meta">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="comments">2 Comments</span>
  </div></div>

  <h2 class="blog-title">Technology is Revolutionizing Patient Care</h2>

  <p class="blog-text">
    Regular health check-ups are essential for maintaining overall well-being
    and detecting potential health issues before they become serious.
    Preventive screenings can...
  </p>

  <span class="plus-sign">+</span>
</div>

        </div>
        
      </section>
    </div>


  )
}

export default Resources