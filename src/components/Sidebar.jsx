// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>🚨 MalURL</h2>
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/risk-score">Risk Score</Link></li>
          <li><Link to="/url-expander">URL Expander</Link></li>
          <li><Link to="/comparison">Compare URLs</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
