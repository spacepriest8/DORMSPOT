// function Signup() {
//   return (
//     <div>
//       <h1>Signup Page</h1>
//       {/* Your signup form here */}
//     </div>
//   );
// }

// export default Signup;
// function Signup() {
//   return (
//     <div>
//       <h1>Signup Page</h1>
//       {/* Your signup form here */}
//     </div>
//   );
// }

// export default Signup;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/_signup.css';
import '../assets/Instagramimg.svg'

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Signup failed');
      }

      alert('Signup successful!');
      navigate('/'); 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="signup-content">
          <h2>Create Account</h2>
          <form onSubmit={handleSignup}>
            <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />

            <div className="terms">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">I agree to the terms and conditions</label>
            </div>

            {error && <p className="error">{error}</p>}

            <button type="submit" disabled={loading}>
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>

            <div className="or-divider">or sign up with</div>

            <div className="social-signup">
              <button className="fb">Facebook</button>
              <button className="google">Google</button>
              <button className="insta">Instagram</button>
            </div>

            <div className="login-prompt">
              Already have an account? <Link to="/">Login</Link>
            </div>
          </form>
        </div>
      </div>

      <div className="signup-right">
        <img src="/images/pexels.jpg" alt="DormSpot illustration" />
      </div>
    </div>
  );
};

export default Signup;
