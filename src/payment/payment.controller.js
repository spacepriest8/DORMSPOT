import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import asyncWrapper from '../lib/utils.js';
import { validate } from '../lib/validate.js';
import { paymentSchema } from './payment.request.js';
import * as paymentService from './payment.service.js';

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

export const initiatePayment = asyncWrapper(async (req, res) => {
  const { isValid, errors, value } = validate(paymentSchema, req.body);
  if (!isValid) return res.status(400).json({ success: false, message: errors });

  const reference = uuidv4();
  const { hostelId, amount } = value;
  const studentId = req.user._id;

  const paystackRes = await axios.post(
    'https://api.paystack.co/transaction/initialize',
    {
      email: req.user.email,
      amount: amount * 100, // in kobo
      reference,
    },
    {
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  await paymentService.createPayment({
    student: studentId,
    hostel: hostelId,
    amount,
    reference,
    status: 'pending',
  });

  res.status(200).json({ success: true, data: paystackRes.data.data });
});

export const verifyPayment = asyncWrapper(async (req, res) => {
  const { reference } = req.query;

  const paystackRes = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
    headers: {
      Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
    },
  });

  const status = paystackRes.data.data.status;
  const gateway_response = paystackRes.data.data.gateway_response;

  const updated = await paymentService.updatePaymentStatus(reference, status, gateway_response);

  res.status(200).json({ success: true, data: updated });
});
