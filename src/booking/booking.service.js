import Booking from '../models/booking.model.js';

export const createBooking = async (data) => {
  const booking = new Booking(data);
  return booking.save();
};

export const findBookingByReference = async (reference) => {
  return Booking.findOne({ paymentReference: reference }).populate('hostel student');
};

export const markBookingAsPaid = async (reference, paymentDetails) => {
  const booking = await findBookingByReference(reference);
  if (!booking || booking.status === 'paid') return null;

  const now = new Date();
  const checkOut = new Date(now);
  checkOut.setFullYear(now.getFullYear() + 1);

  booking.status = 'paid';
  booking.checkInDate = now;
  booking.checkOutDate = checkOut;
  booking.paymentDetails = paymentDetails;

  return booking.save();
};

export const getAllBookings = async () => {
  return Booking.find().populate('student hostel');
};
