// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Hostels from "./pages/Hostels";
// import ListProperty from "./pages/ListProperty";
// import FindRoomate from "./pages/FindRoomate";
// import HostelDetails from "./pages/HostelDetails";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import ContactForm from "./pages/ContactForm";
// import Dashboard from "./pages/DashboardOverview";
// import "../src/sass/main.css";
// import StudentDashboard from "./pages/StudentDashboard";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/Hostels" element={<Hostels />} />
//       <Route path="/ListProperty" element={<PrivateRoute><ListProperty /></PrivateRoute>} />
//       <Route path="/FindRoomate" element={<FindRoomate />} />
//       <Route path="/hostel/:id" element={<HostelDetails />} />
//       <Route path="/contact" element={<ContactForm />} />
//       <Route path="/dashboard" element={<PrivateRoute>
//       <Dashboard />
//     </PrivateRoute>

// } />
//     </Routes>
//   );
// }

// export default App;


// import React, { useEffect } from "react";
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import Home from "./pages/Home";
// import Hostels from "./pages/Hostels";
// import ListProperty from "./pages/ListProperty";
// import FindRoomate from "./pages/FindRoomate";
// import HostelDetails from "./pages/HostelDetails";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import ContactForm from "./pages/ContactForm";
// import DashboardLayout from "./pages/DashboardLayout";
// import StudentDashboard from "./pages/StudentDashboard";
// import LandlordDashboard from "./pages/LandlordDashboard";
// import Unauthorized from "./pages/Unauthorized";
// import NotFound from "./pages/NotFound";
// import "../src/sass/main.css";

// const useAuth = () => {
//   const user = JSON.parse(localStorage.getItem('user')) || {};
//   return {
//     isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
//     userRole: user.role || ''
//   };
// };

// const PrivateRoute = ({ children, requiredRole }) => {
//   const { isAuthenticated, userRole } = useAuth();
//   const location = useLocation();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   if (requiredRole && userRole !== requiredRole) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   return children;
// };

// const PublicRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? <Navigate to="/dashboard" replace /> : children;
// };

// function App() {
//   const location = useLocation();

//   // Scroll to top on route change
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);

//   return (
//     <Routes location={location} key={location.pathname}>
//       {/* Public routes */}
//       <Route path="/" element={<Home />} />
//       <Route path="/hostels" element={<Hostels />} />
//       <Route path="/hostel/:id" element={<HostelDetails />} />
//       <Route path="/contact" element={<ContactForm />} />
      
//       {/* Authentication routes */}
//       <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
//       <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />

//       {/* Student routes */}
//       <Route path="/student" element={
//         <PrivateRoute requiredRole="student">
//           <DashboardLayout />
//         </PrivateRoute>
//       }>
//         <Route index element={<StudentDashboard />} />
//         <Route path="find-roommate" element={<FindRoomate />} />
//       </Route>

//       {/* Landlord routes */}
//       <Route path="/landlord" element={
//         <PrivateRoute requiredRole="landlord">
//           <DashboardLayout />
//         </PrivateRoute>
//       }>
//         <Route index element={<LandlordDashboard />} />
//         <Route path="list-property" element={<ListProperty />} />
//       </Route>

//       {/* Common dashboard route */}
//       <Route path="/dashboard" element={
//         <PrivateRoute>
//           <DashboardLayout />
//         </PrivateRoute>
//       } />

//       {/* Error routes */}
//       <Route path="/unauthorized" element={<Unauthorized />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// }

// export default App;

// import React, { useEffect } from 'react';
// import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from './components/AuthContext';
// import Home from './pages/Home';
// import Hostels from './pages/Hostels';
// import ListProperty from './pages/ListProperty';
// import FindRoomate from './pages/FindRoomate';
// import HostelDetails from './pages/HostelDetails';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import ContactForm from './pages/ContactForm';
// import DashboardLayout from './pages/DashboardLayout';
// import StudentDashboard from './pages/StudentDashboard';
// import LandlordDashboard from './pages/LandlordDashboard';
// import MyBookings from './pages/Landlord/MyBookings';
// import Messages from './pages/Landlord/Messages';
// import MyProperties from './pages/Landlord/myProperties';
// import ManageBookings from "./pages/Landlord/ManageBookings";
// import Unauthorized from './pages/Unauthorized';
// import NotFound from './pages/NotFound';
// import "../src/sass/main.css";

// const PrivateRoute = ({ children, requiredRole }) => {
//   const { currentUser, isLoading } = useAuth();
//   const location = useLocation();

//    if (isLoading) {
//     return null; // or <LoadingSpinner />
//   }

//   if (!currentUser) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   if (requiredRole && currentUser.role !== requiredRole) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   return children;
// };

// const PublicRoute = ({ children }) => {
//   const { currentUser } = useAuth();
//   return currentUser ? <Navigate to="/dashboard" replace /> : children;
// };

// function App() {
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);

//   return (
//     <Routes>
//       {/* Public Routes */}
//       <Route path="/" element={<Home />} />
//       <Route path="/hostels" element={<Hostels />} />
//       <Route path="/hostel/:id" element={<HostelDetails />} />
//       <Route path="/contact" element={<ContactForm />} />
      
//       {/* Auth Routes */}
//       <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
//       <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />

//       {/* Student Routes */}
//       <Route path="/student" element={
//         <PrivateRoute requiredRole="student">
//           <DashboardLayout />
//         </PrivateRoute>
//       }>
//         <Route index element={<StudentDashboard />} />
//         <Route path="find-roommate" element={<FindRoomate />} />
//         <Route path="my-bookings" element={<MyBookings />} />
//         <Route path="messages" element={<Messages />} />
//       </Route>

//       {/* Landlord Routes */}
//       <Route path="/landlord" element={
//         <PrivateRoute requiredRole="landlord">
//           <DashboardLayout />
//         </PrivateRoute>
//       }>
//         <Route index element={<LandlordDashboard />} />
//         <Route path="list-property" element={<ListProperty />} />
//         <Route path="my-properties" element={<MyProperties />} />
//         <Route path="manage-bookings" element={<ManageBookings />} />
//       </Route>

//       {/* Common Dashboard Fallback */}
//       <Route path="/dashboard" element={
//         <PrivateRoute>
//           <DashboardLayout />
//         </PrivateRoute>
//       } />

//       {/* Error Routes */}
//       <Route path="/unauthorized" element={<Unauthorized />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './components/AuthContext'; // Ensure correct path
import Home from './pages/Home';
import Hostels from './pages/Hostels';
import ListProperty from './pages/ListProperty';
import FindRoommate from './pages/FindRoomate'; // Note: Fix typo in filename (FindRoomate -> FindRoommate)
import HostelDetails from './pages/HostelDetails';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ContactForm from './pages/ContactForm';
import DashboardLayout from './pages/DashboardLayout';
import StudentDashboard from './pages/StudentDashboard';
import LandlordDashboard from './pages/LandlordDashboard';
import MyBookings from './pages/Landlord/MyBookings';
import Messages from './pages/Landlord/Messages';
import MyProperties from './pages/Landlord/myProperties';
import ManageBookings from "./pages/Landlord/ManageBookings";
import Unauthorized from './pages/Unauthorized';
import NotFound from './pages/NotFound';
import "./sass/main.css"; // Ensure correct path to your CSS

const PrivateRoute = ({ children, requiredRole }) => {
  const { currentUser, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && currentUser.role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

const PublicRoute = ({ children }) => {
  const { currentUser, isLoading } = useAuth();
  
  if (isLoading) {
    return <div className="loading-spinner">Loading...</div>;
  }
  
  return currentUser ? <Navigate to="/dashboard" replace /> : children;
};

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/hostels" element={<Hostels />} />
      <Route path="/hostel/:id" element={<HostelDetails />} />
      <Route path="/contact" element={<ContactForm />} />
      
      {/* Auth Routes */}
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />

      {/* Student Routes */}
      <Route path="/student" element={
        <PrivateRoute requiredRole="student">
          <DashboardLayout />
        </PrivateRoute>
      }>
        <Route index element={<StudentDashboard />} />
        <Route path="find-roommate" element={<FindRoommate />} />
        <Route path="my-bookings" element={<MyBookings />} />
        <Route path="messages" element={<Messages />} />
      </Route>

      {/* Landlord Routes */}
      <Route path="/landlord" element={
        <PrivateRoute requiredRole="landlord">
          <DashboardLayout />
        </PrivateRoute>
      }>
        <Route index element={<LandlordDashboard />} />
        <Route path="list-property" element={<ListProperty />} />
        <Route path="my-properties" element={<MyProperties />} />
        <Route path="manage-bookings" element={<ManageBookings />} />
      </Route>

      {/* Common Dashboard */}
      <Route path="/dashboard" element={
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      } />

      {/* Error Routes */}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;