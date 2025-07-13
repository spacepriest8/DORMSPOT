
import axios from 'axios';

export async function initiatePayment({ amount, email, metadata }) {
  const response = await axios.post(
    'https://api.paystack.co/transaction/initialize',
    {
      amount: amount * 100, // Paystack expects kobo
      email,
      metadata,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data.data;
}
