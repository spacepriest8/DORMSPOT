import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  hostel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hostel', required: true },
  checkInDate: { type: Date },
  checkOutDate: { type: Date },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'paid', 'cancelled'], default: 'pending' },
  paymentReference: { type: String, required: true },
  paymentDetails:{ type:Object },
});

export default mongoose.model('Booking', bookingSchema);