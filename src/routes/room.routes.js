import express from 'express';
import { upload } from '../lib/utils/muter.js';
import * as roomController from '../concerns/room/room.controller.js';

const router = express.Router({ mergeParams: true });

router.put('/:id', roomController.updateRoom);
router.put('/:id/images', upload.array('images', 5), roomController.updateRoomImages);

export default router;