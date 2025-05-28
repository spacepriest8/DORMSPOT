import express from 'express';
import {
  createBookingController,
  handlePaystackWebhook,
  getAllBookingsController
} from '../booking/booking.controller.js';
// import authenticate from '../middlewares/authenticate.js';

const router = express.Router();

// Student must be authenticated to create booking
router.post('/bookings', createBookingController);

// Webhook from Paystack (no auth needed, but verify signature in real use)
router.post('/webhook/paystack', handlePaystackWebhook);

// Get all bookings (admin or auth)
router.get('/bookings', getAllBookingsController);

export default router;
