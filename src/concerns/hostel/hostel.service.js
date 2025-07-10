import Hostel from '../../models/hostel.model.js';
import Room from '../../models/room.model.js';

export async function createHostelWithRooms(hostelData, rooms, images) {
  const hostel = await Hostel.create({ ...hostelData, rooms: [] });

  const createdRooms = await Promise.all(
    rooms.map(room =>
      Room.create({
        ...room,
        hostel: hostel._id,
        images,
      })
    )
  );

  hostel.rooms = createdRooms.map(r => r._id);
  await hostel.save();

  return await Hostel.findById(hostel._id).populate('rooms');
}

export async function findHostels(query) {
  return Hostel.find(query).populate('rooms');
}

export async function getHostelById(id) {
  return Hostel.findById(id).populate('rooms');
}