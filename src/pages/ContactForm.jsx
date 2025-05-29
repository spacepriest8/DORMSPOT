import React, { useState } from 'react';
import '../styles/_contactform.css';


const ContactForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    mobileNumber: '',
    provider: '',
    accountNumber: '',
    bankName: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, paymentMethod }),
      });

      if (!res.ok) throw new Error('Error submitting payment');
      alert('Payment submitted successfully');
    } catch (err) {
      console.error(err);
      alert('Error submitting payment');
    }
  };

  return (
    <div className="contact-page">
      <div className="form-container">
        <div className="left-section">
          <h2>Contact Information</h2>
          <input name="name" placeholder="Name" onChange={handleChange} />
          <input name="phone" placeholder="Phone" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />

          <h3>Payment Method</h3>
          <div className="toggle-buttons">
            <button
              className={paymentMethod === 'card' ? 'active' : ''}
              onClick={() => setPaymentMethod('card')}
            >
              Card
            </button>
            <button
              className={paymentMethod === 'mobilemoney' ? 'active' : ''}
              onClick={() => setPaymentMethod('mobilemoney')}
            >
              Mobile Money
            </button>
            <button
              className={paymentMethod === 'banktf' ? 'active' : ''}
              onClick={() => setPaymentMethod('banktf')}
            >
              Bank Transfer
            </button>
          </div>

          {paymentMethod === 'card' && (
            <>
              <input name="cardNumber" placeholder="Card Number" onChange={handleChange} />
              <input name="expiry" placeholder="Expiry Date" onChange={handleChange} />
              <input name="cvv" placeholder="CVV" onChange={handleChange} />
            </>
          )}

          {paymentMethod === 'mobilemoney' && (
            <>
              <input name="mobileNumber" placeholder="Mobile Number" onChange={handleChange} />
              <input name="provider" placeholder="Provider" onChange={handleChange} />
            </>
          )}

          {paymentMethod === 'banktf' && (
            <>
              <input name="accountNumber" placeholder="Account Number" onChange={handleChange} />
              <input name="bankName" placeholder="Bank Name" onChange={handleChange} />
            </>
          )}

          <button className="submit-btn" onClick={handleSubmit}>
            Submit Payment
          </button>
        </div>

        <div className="right-section">
          <h2>Booking Info</h2>
          <p>Room: Deluxe Single</p>
          <p>Check-in: June 1, 2025</p>
          <p>Check-out: June 30, 2025</p>
          <p>Total: $450</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
