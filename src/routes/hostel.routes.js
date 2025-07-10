import express from 'express';
import { upload } from '../lib/utils/muter.js';
import * as hostelController from '../concerns/hostel/hostel.controller.js';

const router = express.Router();

router.post(
  '/',
  upload.fields([{ name: 'images', maxCount: 10 }]),
  hostelController.createHostelWithRooms
);
router.get('/', hostelController.getAllHostels);
router.get('/:id', hostelController.getHostelById);

export default router;