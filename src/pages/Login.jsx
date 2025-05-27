// function Login() {
//   return (
//     <div>
//       <h1>Login Page</h1>
//       {/* Your login form here */}
//     </div>
//   );
// }

// export default Login;
// function Login() {
//   return (
//     <div>
//       <h1>Login Page</h1>
//       {/* Your login form here */}
//     </div>
//   );
// }

// export default Login;

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
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store token in localStorage (or cookie)
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      alert('Login successful!');
      navigate('/dashboard'); // change this to your post-login route
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
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
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
              <button className="fb">Facebook</button>
              <button className="google">Google</button>
              <button className="insta">Instagram</button>
            </div>

            <div className="signup-prompt">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
      <div className="login-right">
        <img src="/images/pexels.jpg" alt="Login visual" />
      </div>
    </div>
    
  );
};

export default Login;
