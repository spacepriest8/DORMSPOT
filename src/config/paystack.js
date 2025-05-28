import axios from 'axios';

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

export const initializePaymentPage = async ({ email, amount, metadata }) => {
  const response = await axios.post(
    'https://api.paystack.co/transaction/initialize',
    {
      email,
      amount,
      metadata
    },
    {
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );
  return response.data.data;
};

export const verifyTransaction = async (reference) => {
  const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
    headers: { Authorization: `Bearer ${PAYSTACK_SECRET_KEY}` },
  });
  return response.data.data;
};