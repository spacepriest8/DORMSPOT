import crypto from 'crypto';
import Payment from '../../models/payment.model.js';
import Room from '../../models/room.model.js';
import axios from 'axios';

export const handlePaystackWebhook = async (req, res) => {

 // 1️⃣ Create the hash from the raw body
  const hash = crypto
    .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY)
    .update(req.rawBody)
    .digest('hex');

  // 2️⃣ Compare with Paystack signature header
  const paystackSignature = req.headers['x-paystack-signature'];

  if (hash !== paystackSignature) {
    return res.status(401).send('Invalid signature');
  }

  
  const event = req.body;

  if (event.event === 'charge.success') {
    const reference = event.data.reference;

    // ✅ Optionally verify with Paystack API (double check)
    const verifyResponse = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    });

    const { status, amount, metadata } = verifyResponse.data.data;
    if (status === 'success') {
      // ✅ Update payment record
      const payment = await Payment.findOneAndUpdate(
        { reference },
        { status: 'success' },
        { new: true }
      );

      if (payment) {
        // ✅ Mark the room unavailable
        await Room.findByIdAndUpdate(payment.room, { available: false });
      }
    }
  }

  res.sendStatus(200);
};
