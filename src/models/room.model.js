import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  hostel: { type: mongoose.Schema.Types.ObjectId, ref: "Hostel", required: true },
  roomNumber: String,
  type: { 
    type: String, 
    required: true, 
    enum: ["single", "double","self-contained", "flat", "suite", "other"] 
  },
  price: Number,
  available: { type: Boolean, default: true },
  description: String,
  amenities: {
    airConditioning: { type: Boolean, default: false },
    privateBathroom: { type: Boolean, default: false },
    balcony: { type: Boolean, default: false },
  },
   images: [String], 
});

export default mongoose.model("Room", roomSchema);