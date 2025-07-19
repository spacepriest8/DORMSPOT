import { Link } from 'react-router-dom';
import '../styles/_unauth.css';

const Unauthorized = () => {
  return (
    <div className="unauthorized-container">
      <div className="unauthorized-content">
        <h1>403 - Access Denied</h1>
        <p>You don't have permission to access this page.</p>
        <div className="unauthorized-actions">
          <Link to="/" className="home-link">Return to Home</Link>
          <Link to="/login" className="login-link">Login with Different Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;