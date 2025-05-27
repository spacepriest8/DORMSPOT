import Payment from '../models/Payment.js';

export const createPayment = async (data) => {
  const payment = new Payment(data);
  return await payment.save();
};

export const updatePaymentStatus = async (reference, status, gateway_response) => {
  return await Payment.findOneAndUpdate(
    { reference },
    { status, gateway_response },
    { new: true }
  );
};

export const getPaymentByReference = async (reference) => {
  return await Payment.findOne({ reference });
};
