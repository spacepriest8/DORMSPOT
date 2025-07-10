import mongoose from "mongoose";

const hostelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  description: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },

  rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
});

export default mongoose.model("Hostel", hostelSchema);