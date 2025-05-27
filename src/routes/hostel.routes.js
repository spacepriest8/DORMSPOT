import express from 'express';
import upload from '../middleware/upload.js';
import {
  createHostel,
  getAllHostels,
  getHostelById,
} from '../hostel/hostel.controller.js';

const router = express.Router();

// Upload multiple hostel images
router.post('/hostels',upload.array( 'photos',5), createHostel);
router.get('/hostels', getAllHostels);
router.get('/hostels/:id', getHostelById);

export default router;
