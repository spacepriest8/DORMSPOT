// import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
// import { useAuth } from "../components/AuthContext"; // Changed path to context
// import '../styles/_Dashboard.css';
// import Footer from "../components/landingpage/Footer/Footer";
// import logo from "../assets/dormspotLogo.svg";

// const DashboardLayout = () => {
//   const { currentUser, logout } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   // Dynamic sidebar links based on user role
//   const studentLinks = [
//     { path: '/student/find-roommate', icon: 'icon-roommate', label: 'Find Roommate' },
//     { path: '/student/my-bookings', icon: 'icon-bookings', label: 'My Bookings' }
//   ];

//   const landlordLinks = [
//     { path: '/landlord/list-property', icon: 'icon-property', label: 'List Property' },
//     { path: '/landlord/my-properties', icon: 'icon-properties', label: 'My Properties' }
//   ];

//   const commonLinks = [
//     { path: '/hostels', icon: 'icon-hostels', label: 'Browse Hostels' }
//   ];

//   return (
//     <div className="dashboard-layout">
//       {/* Sidebar */}
//       <nav className="dashboard-sidebar">
//         <div className="sidebar-header">
//           <Link to="/" className="logo">
//             <img src={logo} alt="DormSpot Logo" /> {/* Fixed logo src */}
//             <span>DormSpot</span>
//           </Link>
//         </div>

//         <div className="sidebar-nav">
//           {/* Dashboard Link */}
//           <Link 
//             to={currentUser?.role === 'student' ? '/student' : '/landlord'} 
//             className={`nav-item ${location.pathname.includes('dashboard') ? 'active' : ''}`}
//           >
//             <i className="icon-dashboard"></i>
//             <span>Dashboard</span>
//           </Link>

//           {/* Role-Specific Links */}
//           {(currentUser?.role === 'student' ? studentLinks : landlordLinks).map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={`nav-item ${location.pathname.includes(link.path) ? 'active' : ''}`}
//             >
//               <i className={link.icon}></i>
//               <span>{link.label}</span>
//             </Link>
//           ))}

//           {/* Common Links */}
//           {commonLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={`nav-item ${location.pathname.includes(link.path) ? 'active' : ''}`}
//             >
//               <i className={link.icon}></i>
//               <span>{link.label}</span>
//             </Link>
//           ))}
//         </div>

//         {/* User Profile & Logout */}
//         <div className="sidebar-footer">
//           <div className="user-profile">
//             <img 
//               src={currentUser?.profileImage || '/default-avatar.png'} 
//               alt={`${currentUser?.firstName || 'User'}'s profile`} 
//             />
//             <div>
//               <span className="user-name">
//                 {currentUser?.firstName} {currentUser?.lastName}
//               </span>
//               <span className="user-role">
//                 {currentUser?.role?.toUpperCase()}
//               </span>
//             </div>
//           </div>
//           <button onClick={handleLogout} className="logout-btn">
//             <i className="icon-logout"></i>
//             <span>Logout</span>
//           </button>
//         </div>
//       </nav>

//       {/* Main Content Area */}
//       <main className="dashboard-main">
//         <Outlet />
//       </main>
      
//       <Footer />
//     </div>
//   );
// };

// export default DashboardLayout;

import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from "../components/AuthContext";
import '../styles/_Dashboard.css';
import logo from "../assets/dormspotLogo.svg";

const DashboardLayout = () => {
  const { currentUser, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Dynamic sidebar links based on user role
  const studentLinks = [
    { path: '/student/find-roommate', icon: 'icon-roommate', label: 'Find Roommate' },
    { path: '/student/my-bookings', icon: 'icon-bookings', label: 'My Bookings' }
  ];

  const landlordLinks = [
    { path: '/landlord/list-property', icon: 'icon-property', label: 'List Property' },
    { path: '/landlord/my-properties', icon: 'icon-properties', label: 'My Properties' }
  ];

  const commonLinks = [
    { path: '/hostels', icon: 'icon-hostels', label: 'Browse Hostels' }
  ];

  // Mock data for cards
  const stats = [
    { title: "Total Rooms", value: "24", icon: "🏠", trend: "+2 this week" },
    { title: "My Bookings", value: "5", icon: "📅", trend: "1 pending" },
    { title: "New Messages", value: "3", icon: "✉️", trend: "2 unread" },
    { title: "My Rating", value: "4.8", icon: "⭐", trend: "+0.2 this month" }
  ];

  // Mock booking data
  const recentBookings = [
    { id: 1, student: "Alex Johnson", room: "Deluxe 201", checkIn: "2023-06-15", status: "Confirmed" },
    { id: 2, student: "Maria Garcia", room: "Standard 102", checkIn: "2023-06-18", status: "Pending" },
    { id: 3, student: "James Wilson", room: "Premium 305", checkIn: "2023-06-20", status: "Cancelled" },
    { id: 4, student: "Sarah Lee", room: "Standard 105", checkIn: "2023-06-22", status: "Confirmed" }
  ];

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      
      <nav className="dashboard-sidebar">
        <div className="sidebar-header">
          <Link to="/" className="logo">
            <img src={logo} alt="DormSpot Logo" />
            <span>DormSpot</span>
          </Link>
        </div>

        <div className="sidebar-nav">
          {/* Dashboard Link */}
          <Link 
            to={currentUser?.role === 'student' ? '/student' : '/landlord'} 
            className={`nav-item ${location.pathname.includes('dashboard') ? 'active' : ''}`}
          >
            <i className="icon-dashboard"></i>
            <span>Dashboard</span>
          </Link>

          {/* Role-Specific Links */}
          {(currentUser?.role === 'student' ? studentLinks : landlordLinks).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-item ${location.pathname.includes(link.path) ? 'active' : ''}`}
            >
              <i className={link.icon}></i>
              <span>{link.label}</span>
            </Link>
          ))}

          {/* Common Links */}
          {commonLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-item ${location.pathname.includes(link.path) ? 'active' : ''}`}
            >
              <i className={link.icon}></i>
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        {/* User Profile & Logout */}
        <div className="sidebar-footer">
          <div className="user-profile">
            <img 
              src={currentUser?.profileImage || '/default-avatar.png'} 
              alt={`${currentUser?.firstName || 'User'}'s profile`} 
            />
            <div>
              <span className="user-name">
                {currentUser?.firstName} {currentUser?.lastName}
              </span>
              <span className="user-role">
                {currentUser?.role?.toUpperCase()}
              </span>
            </div>
          </div>
          <button onClick={handleLogout} className="logout-btn">
            <i className="icon-logout"></i>
            <span>Logout</span>
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="dashboard-main">
         <Outlet />
        <div className="dashboard-content">
          {/* Stats Cards */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-info">
                  <h3>{stat.title}</h3>
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-trend">{stat.trend}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Bookings Table */}
          <div className="bookings-section">
            <h2>Recent Bookings</h2>
            <div className="table-container">
              <table className="bookings-table">
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Room</th>
                    <th>Check-in</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map(booking => (
                    <tr key={booking.id}>
                      <td>{booking.student}</td>
                      <td>{booking.room}</td>
                      <td>{booking.checkIn}</td>
                      <td>
                        <span className={`status-badge ${booking.status.toLowerCase()}`}>
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="dashboard-footer">
          <div className="footer-content">
            <div className="footer-logo">
              <img src= {logo} alt="DormSpot Logo" />
              <span>DormSpot © {new Date().getFullYear()}</span>
            </div>
            <div className="footer-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default DashboardLayout;