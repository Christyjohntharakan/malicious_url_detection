import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Malicious URL Detector</h1>
        <p className="about-description">
          Our platform uses cutting-edge AI and Explainable Machine Learning to detect and prevent malicious websites before they harm you. 
          Whether it's phishing attacks, malware, adware, or suspicious links, we scan URLs in real-time and provide detailed risk analysis.
        </p>
        <p className="about-description">
          Built with the latest in AI explainability (LIME) and continuous learning, our system not only detects threats but also shows you *why* a link is considered dangerous — empowering you to stay informed and safe online.
        </p>
        <div className="about-features">
          <h2 className="features-heading">What We Offer:</h2>
          <ul className="features-list">
            <li>⚡ Instant Malicious URL Detection</li>
            <li>🔍 Explainable AI Insights</li>
            <li>🛡️ Advanced Malware & Phishing Protection</li>
            <li>🔗 Shortened URL Expansion and Checking</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
