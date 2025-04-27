import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [url, setUrl] = useState('');

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (url) {
      // Redirect to the entered URL
      window.open(url.startsWith('http') ? url : `https://${url}`, '_blank');
    }
  };

  return (
    <div className="dashboard">
      {/* Top Navbar */}
      <nav className="navbar">
        <div className="logo">🌐 MalURL</div>
        <div className="nav-links">
          <a href="#get-started">Get Started</a>
          <a href="#login">Login</a>
          <a href="#signup">Signup</a>
        </div>
      </nav>

      {/* Background */}
      <div className="gradient-background"></div>

      {/* Hero Section */}
      <div className="dashboard-main">
        <div className="dashboard-left">
          <h1>Stay Safe Online</h1>
          <p>Analyze any suspicious link instantly with MalURL's AI-powered threat detector.</p>
          <ul>
            <li>⚡ Super Fast & Accurate</li>
            <li>🛡️ AI Risk Scoring Engine</li>
            <li>🧠 Transparent Results with Explainable AI (LIME)</li>
            <li>🌍 Protect Yourself from Phishing, Malware, and Scams</li>
          </ul>
        </div>

        <div className="dashboard-right">
          <div className="url-analyzer">
            <h2>🔍 URL Analyzer</h2>
            <form onSubmit={handleAnalyze} className="analyze-form">
              <div className="input-group">
                <input
                  type="text"
                  id="url-input"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder=" "
                  required
                />
                <label htmlFor="url-input">Enter a URL to check</label>
              </div>
              <button
  type="button"
  onClick={() => window.location.href = 'https://ad6650225020557dad.gradio.live'}
  className="analyze-button"
>
  Analyze
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 MalURL. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
