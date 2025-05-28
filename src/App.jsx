import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hostels from "./pages/Hostels";
import ListProperty from "./pages/ListProperty";
import FindRoomate from "./pages/FindRoomate";
import HostelDetails from "./pages/HostelDetails";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import "../src/sass/main.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Hostels" element={<Hostels />} />
        <Route path="/ListProperty" element={<ListProperty />} />
        <Route path="/FindRoomate" element={<FindRoomate />} />
        <Route path="/hostel/:id" element={<HostelDetails />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/payment" element={<PaymentSuccess bookingDetails={{
        hostelName: 'DormSpot Hostel',
        location: 'New York',
        duration: '30 days',
        checkInDate: 'June 1, 2025',
        amountPaid: '$450'
      }} />} />
      </Routes>
    </>
  );
}

export default App;
