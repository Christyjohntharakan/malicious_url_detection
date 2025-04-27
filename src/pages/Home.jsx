// src/pages/Home/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    window.location.href = 'https://b195ff465c1b098dc9.gradio.live'; // <-- replace with your real Gradio URL
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MalURL</div>
        <div className="nav-links">
          <button onClick={() => navigate('/features')}>Features</button>
          <button onClick={() => navigate('/about')}>About</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="overlay">
        <h1 className="main-title">Malicious URL Detector</h1>
        <p className="subtitle">AI-powered threat detection with Explainable AI 🛡️</p>
        <button className="start-btn" onClick={handleGetStarted}>Get Started</button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 MalURL. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy</a> | <a href="#">Terms</a> | <a href="#">Support</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
