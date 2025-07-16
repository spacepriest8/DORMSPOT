import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/_login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleLogin = async (e) => {
  e.preventDefault();
  setError('');
  setLoading(true);

  try {
    const res = await fetch('https://dormspot-backend.onrender.com/api/users/loginUser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Login failed');
    }

    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify({
      _id: data._id,
      email: data.email,
      role: data.role,
      firstName: data.firstName,
      lastName: data.lastName
    }));

    alert('Login successful!');
    navigate('/Hostels');
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-content">
          <h2>Welcome Back</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <div className="forget-link">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>

            {error && <p className="error">{error}</p>}

            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <div className="or-divider">or continue with</div>
            <div className="social-login">
              <button type="button" className="fb">Facebook</button>
              <button type="button" className="google">Google</button>
              <button type="button" className="insta">Instagram</button>
            </div>

            <div className="signup-prompt">
              Don't have an account? <Link to="/Signup">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>

      <div className="login-right">
        <img src="/image/girl.jpg" alt="Login visual" />
      </div>
    </div>
  );
};

export default Login;
