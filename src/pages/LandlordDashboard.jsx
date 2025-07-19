import { Link } from 'react-router-dom';
import '../styles/_Landlord.css';

const LandlordDashboard = () => {
  return (
    <div className="landlord-dashboard">
      <header className="dashboard-header">
        <h1>Landlord Dashboard</h1>
        <p>Manage your properties and bookings</p>
      </header>

      <div className="stats-grid">
        {/* Landlord stat cards would go here */}
      </div>

      <div className="dashboard-sections">
        <section className="quick-actions">
          <h2>Property Management</h2>
          <div className="action-grid">
            <Link to="/landlord/list-property" className="action-card">
              <div className="action-icon">➕</div>
              <h3>Add Property</h3>
            </Link>
            <Link to="/landlord/my-properties" className="action-card">
              <div className="action-icon">🏢</div>
              <h3>My Properties</h3>
            </Link>
            <Link to="/landlord/manage-bookings" className="action-card">
              <div className="action-icon">📝</div>
              <h3>Manage Bookings</h3>
            </Link>
          </div>
        </section>

        <section className="recent-bookings">
          {/* Recent bookings would go here */}
        </section>
      </div>
    </div>
  );
};

export default LandlordDashboard;