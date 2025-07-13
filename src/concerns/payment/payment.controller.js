import asyncWrapper from '../../lib/utils/asynwapper.js';
import * as paymentService from './payment.service.js';
import Room from '../../models/room.model.js';
import Payment from '../../models/payment.model.js';

export const initiatePayment = asyncWrapper(async (req, res) => {
  const { roomId, email } = req.body;

  // ✅ Validate request
  if (!roomId || !email) {
    return res.status(400).json({ error: 'roomId and email are required' });
  }

  // ✅ Find room by ID
  const room = await Room.findById(roomId);
  if (!room) {
    return res.status(404).json({ error: 'Room not found' });
  }

  if (!room.available) {
    return res.status(400).json({ error: 'Room is no longer available' });
  }

  // ✅ Convert price to kobo (Paystack expects amount in lowest currency unit)
  const amountInKobo = room.price * 100;

  // ✅ Initialize payment with Paystack
  const paymentInit = await paymentService.initiatePayment({
    amount: amountInKobo,
    email,
    metadata: {
      roomId: room._id.toString(),
    },
  });

  // ✅ Save payment record in your DB
  await Payment.create({
    reference: paymentInit.reference,
    email,
    amount: room.price, // store in naira for your records
    status: 'pending',
    room: room._id,
  });

  // ✅ Respond with Paystack URL & reference
  res.status(200).json({
    success: true,
    message: 'Payment initialized successfully',
    authorization_url: paymentInit.authorization_url,
    reference: paymentInit.reference,
  });
});
