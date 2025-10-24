import React from 'react'
import '../../assets/css/resources.css'
import Popular from "../../assets/images/popularTopic.jpg";
import { FaPlay } from "react-icons/fa";


function Resources() {
  const topicList = [
    "TOPIC NAME",
    "TOPIC NAME",
    "TOPIC NAME",
    "TOPIC NAME",
    "TOPIC NAME",
    "TOPIC NAME",
    "TOPIC NAME",
    "TOPIC NAME",
    "TOPIC NAME",
    "TOPIC NAME",
  ];
  const healthArticles = [
    {
      date: "July 2, 2025",
      comments: 2,
      title: "How to Maintain Healthy Lungs for Life",
      text: "Regular health check-ups are essential for maintaining overall well-being and detecting potential health issues before they become serious. Preventive screenings can...",
    },
    {
      date: "June 15, 2025",
      comments: 4,
      title: "Technology is Revolutionizing Patient Care",
      text: "From AI-assisted diagnosis to wearable health trackers, technology is changing how patients and doctors interact. Here’s what you should know...",
    },
    {
      date: "May 8, 2025",
      comments: 3,
      title: "The Importance of Early Health Screenings",
      text: "Early detection saves lives. Learn which medical checkups you shouldn’t skip and how to make them part of your routine...",
    },
  ];
  return (
    <div className="resources-page bg-[#fff]">

      {/* Hero Section */}
      <section className="hero-Section flex justify-center items-center">
        <h1 className="text-white font-semibold text-3xl">Resources - Topics</h1>
      </section>

      {/* Popular Topics Section */}
      <section className="popular-topics max-w-7xl mx-auto flex justify-center items-center py-10">
        <div className="flex flex-col items-center justify-center gap-4 w-full">
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
      {/* topics */}
      <section className="Topics max-w-7xl mx-auto">
        <h1>Topics</h1>
        <div className="topics-container">
          <div className="topics-grid">
            {topicList.map((topic, index) => (
              <button key={index} className="topic-btn">
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Health Maintain Cards */}
      <section className="health-maintain max-w-7xl mx-auto">
        {healthArticles.map((article, index) => (
          <div key={index} className="health-container">
            <span className="health-date-badge">{article.date}</span>

            <div className="health-content">
              <div className="health-meta">
                <span className="health-dot"></span>
                {/* <div> */}
                  <span className="health-dot"></span>
                  <span className="health-comments">{article.comments} Comments</span>
                {/* </div> */}
              </div>

              <hr className="health-divider" />

              <h2 className="health-title">{article.title}</h2>
              <p className="health-text">{article.text}</p>

              <span className="health-plus">+</span>
            </div>
          </div>
        ))}
      </section>
    </div>


  )
}

export default Resources;