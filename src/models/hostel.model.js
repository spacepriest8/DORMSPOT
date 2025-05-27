// models/Hostel.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const hostelSchema = new Schema(
  {
    propertyName: {
      type: String,
      required: true,
      trim: true,
    },
    propertyType: {
      type: String,
      enum: ['single', 'self-contained', 'shared', 'flat'],
      required: true,
    },
    location: {
      state: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
    price: {
      type: Number,
      required: true,
    },
    paymentDuration: {
      type: String,
      enum: ['monthly', 'yearly'],
      required: true,
    },
    amenities: {
      wifi: { type: Boolean, default: false },
      powerSupply: { type: Boolean, default: false },
      kitchen: { type: Boolean, default: false },
      water: { type: Boolean, default: false },
      furnished: { type: Boolean, default: false },
      ensuite: { type: Boolean, default: false },
    },
    photos: {
      type: [String],
      required: true, // Image upload will be handled by multer
    },
    contact: {
        phone: {
          type: String,
          required: true,
        },
        whatsapp: {
          type: String,
          required: false,
        },
        email: {
          type: String,
          required: true,
        },
      },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Hostel', hostelSchema);
