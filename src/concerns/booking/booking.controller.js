import asyncWrapper from '../../lib/utils.js';
import * as BookingService from './booking.service.js';
import Hostel from '../../models/hostel.model.js';
import {initializePaymentPage, verifyTransaction } from '../../config/paystack.js';

export const createBookingController = asyncWrapper(async (req, res) => {
  const { hostelId } = req.body;
  const hostel = await Hostel.findById(hostelId);
  if (!hostel) return res.status(404).json({ error: 'Hostel not found' });

  const tx = await initializePaymentPage({
    email: req.user.email,
    amount: hostel.price * 100,
    metadata: { hostelId }
  });

  const booking = await BookingService.createBooking({
    student: req.user._id,
    hostel: hostelId,
    amount: hostel.price,
    status: 'pending',
    paymentReference: tx.reference,
  });

  res.status(201).json({ message: 'Booking created. Proceed to payment.', booking, paymentUrl: tx.authorization_url });
});

export const handlePaystackWebhook = asyncWrapper(async (req, res) => {
  const event = req.body;

  if (event.event === 'charge.success') {
    const reference = event.data.reference;
    const verifiedPayment = await verifyTransaction(reference);

    if (verifiedPayment.status === 'success') {
      const booking = await BookingService.markBookingAsPaid(reference, verifiedPayment);
      if (!booking) return res.status(404).json({ error: 'Booking not found or already paid' });

      return res.status(200).json({ message: 'Booking verified and updated.' });
    } else {
      return res.status(400).json({ error: 'Payment verification failed.' });
    }
  }

  res.status(400).json({ message: 'Unhandled webhook event.' });
});

export const getAllBookingsController = asyncWrapper(async (req, res) => {
  const bookings = await BookingService.getAllBookings();
  res.status(200).json(bookings);
});
