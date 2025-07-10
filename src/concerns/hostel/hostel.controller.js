import * as hostelService from './hostel.service.js';
import asyncWrapper from '../../lib/utils/asynwapper.js';
import { createHostelSchema } from './hostel.request.js';

function getImageUrls(files) {
  return (files['images'] || []).map(f => f.path);
}

export const createHostelWithRooms = asyncWrapper(async (req, res) => {
  // Validate with Joi
  const parsedRooms = JSON.parse(req.body.rooms); // rooms as JSON string
  const { error, value } = createHostelSchema.validate({ ...req.body, rooms: parsedRooms });
  if (error) return res.status(422).json({ error: error.details[0].message });

  const { name, address, description } = value;
  const images = getImageUrls(req.files);
  const hostel = await hostelService.createHostelWithRooms({ name, address, description }, parsedRooms, images);
  res.status(201).json(hostel);
});

export const getAllHostels = asyncWrapper(async (req, res) => {
  const { location } = req.query;
  const query = location ? { address: new RegExp(location, 'i') } : {};
  const hostels = await hostelService.findHostels(query);
  res.json(hostels);
});

export const getHostelById = asyncWrapper(async (req, res) => {
  const hostel = await hostelService.getHostelById(req.params.id);
  if (!hostel) return res.status(404).json({ error: 'Hostel not found' });
  res.json(hostel);
});