

import * as roomService from './room.service.js';
import asyncWrapper from '../../lib/utils/asynwapper.js';
import { updateRoomSchema } from './room.request.js';

export const updateRoom = asyncWrapper(async (req, res) => {
  const { error, value } = updateRoomSchema.validate(req.body);
  if (error) return res.status(422).json({ error: error.details[0].message });

  const room = await roomService.updateRoom(req.params.id, value);
  if (!room) return res.status(404).json({ error: 'Room not found' });

  res.json({
    message: 'Room updated successfully',
    room,
  });
});

export const updateRoomImages = asyncWrapper(async (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: 'No images uploaded' });
  }

  const imageUrls = req.files.map(f => f.path);

  const room = await roomService.updateRoomImages(req.params.id, imageUrls);
  if (!room) return res.status(404).json({ error: 'Room not found' });

  res.json({
    message: 'Room images updated successfully',
    room,
  });
});
