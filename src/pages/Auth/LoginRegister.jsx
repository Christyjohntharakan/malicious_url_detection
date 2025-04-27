import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';
import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const toggleForm = () => setIsLogin(!isLogin);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin
      ? 'http://127.0.0.1:8000/login'
      : 'http://127.0.0.1:8000/register';

    try {
      const response = await axios.post(url, {
        email: formData.email,
        password: formData.password,
        ...(isLogin ? {} : { name: formData.name }),
      });

      console.log(response.data); // 👈 Optionally show toast here
      navigate('/dashboard');
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert('Authentication failed ❌');
    }
  };

  return (
    <div className="auth-container">
      <div className="glass-card">
        <h2>{isLogin ? 'Login' : 'Register'}</h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label>Name</label>
            </div>
          )}

          <div className="input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label>Password</label>
          </div>

          <button type="submit" className="auth-btn">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : 'Already registered?'}{' '}
          <span onClick={toggleForm}>
            {isLogin ? 'Register here' : 'Login here'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginRegister;
