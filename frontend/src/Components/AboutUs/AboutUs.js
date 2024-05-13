import React from "react";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-wrapper">
      <Navbar />
      <div className="about-us-content">
        <div className="hero-section">
          <h1 className="about-us-heading">Unleash Your Linguistic Potential</h1>
          <p className="about-us-description">
            Embark on a journey of language exploration and cultural immersion.
          </p>
        </div>
        <div className="section">
          <h2 className="section-heading">Advantages of Multi-Language Learning</h2>
          <div className="features-list">
            <div className="feature-item">
              <h3>Enhanced Cognitive Abilities</h3>
              <p>Strengthen problem-solving skills and cognitive flexibility.</p>
            </div>
            <div className="feature-item">
              <h3>Career Opportunities</h3>
              <p>Unlock new career paths and expand professional networks globally.</p>
            </div>
            <div className="feature-item">
              <h3>Cultural Understanding</h3>
              <p>Foster empathy and global awareness by immersing yourself in diverse cultures.</p>
            </div>
          </div>
        </div>
        <div className="section">
          <h2 className="section-heading">Why Choose Our Platform?</h2>
          <div className="features-list">
            <div className="feature-item">
              <h3>Interactive Lessons</h3>
              <p>Engage in interactive lessons tailored to your learning style and pace.</p>
            </div>
            <div className="feature-item">
              <h3>Real-world Scenarios</h3>
              <p>Apply language skills in real-world scenarios for practical proficiency.</p>
            </div>
            <div className="feature-item">
              <h3>Personalized Paths</h3>
              <p>Customize your learning journey with personalized paths to achieve your goals.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
