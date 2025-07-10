
import mongoose from 'mongoose';
import Room from '../../models/room.model.js';

export async function updateRoom(roomId, update) {
  if (!mongoose.Types.ObjectId.isValid(roomId)) return null;

  return Room.findByIdAndUpdate(roomId, update, { new: true });
}

export async function updateRoomImages(roomId, imageUrls) {
  if (!mongoose.Types.ObjectId.isValid(roomId)) return null;

  return Room.findByIdAndUpdate(
    roomId,
    { $push: { images: { $each: imageUrls } } }, // Adds new images to the existing array
    { new: true }
  );
}



