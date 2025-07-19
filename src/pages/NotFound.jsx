import { Link } from 'react-router-dom';
import '../styles/_NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <div className="not-found-actions">
          <Link to="/" className="home-link">Return to Home</Link>
          <Link to="/login" className="browse-link">Login to find out more!</Link>
          <Link to="/hostels" className="browse-link">Or view Available Hostels!</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;