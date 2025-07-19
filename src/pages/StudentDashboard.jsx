import { Link } from 'react-router-dom';
import '../styles/_Student.css';


const StudentDashboard = () => {
  return (
    <div className="student-dashboard">
      <header className="dashboard-header">
        <h1>Student Dashboard</h1>
        <p>Welcome back! Here's your accommodation overview</p>
      </header>

      <div className="stats-grid">
        {/* Stat cards would go here */}
      </div>

      <div className="dashboard-sections">
        <section className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-grid">
            <Link to="/student/find-roommate" className="action-card">
              <div className="action-icon">👥</div>
              <h3>Find Roommate</h3>
            </Link>
            <Link to="/hostels" className="action-card">
              <div className="action-icon">🏠</div>
              <h3>Browse Hostels</h3>
            </Link>
            <Link to="/student/my-bookings" className="action-card">
              <div className="action-icon">📅</div>
              <h3>My Bookings</h3>
            </Link>
          </div>
        </section>

        <section className="recent-activity">
          {/* Recent activity would go here */}
        </section>
      </div>
    </div>
  );
};

export default StudentDashboard;