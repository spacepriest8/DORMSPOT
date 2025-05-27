// Import async error wrapper utility
import asyncWrapper from "../lib/utils.js";
// Import validation utility
import { validate } from "../lib/validate.js";
// Import hostel schema for request validation
import { hostelSchema } from "./hostle.request.js";
// Import hostel service functions
import * as hostelService from "./hostel.service.js";
// Import custom error class for bad requests
import { BadRequestError } from "../lib/errors.js"

/**
 * Controller to create a new hostel
 * - Parses amenities and contact fields from JSON strings
 * - Validates request body against hostel schema
 * - Requires at least one photo upload
 * - Calls service to create hostel and responds with created data
 */
export const createHostel = asyncWrapper(async (req, res) => {
  let data = { ...req.body };

  // Parse fields expected to be objects
  try {
    data.location = typeof data.location === "string" ? JSON.parse(data.location) : data.location;
    data.amenities = typeof data.amenities === "string" ? JSON.parse(data.amenities) : data.amenities;
    data.contact = typeof data.contact === "string" ? JSON.parse(data.contact) : data.contact;
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON format in location, amenities, or contact fields",
    });
  }

  // Attach owner from authenticated user (assuming req.user is set by auth middleware)
  if (req.user && req.user.id) {
    data.owner = req.user.id;
  } else {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Owner information not found.",
    });
  }

  // Handle photo uploads and upload to Cloudinary
  if (req.files && req.files.length > 0) {
    data.photos = req.files.map(file => file.filename);
  } else {
    return res.status(400).json({
      success: false,
      message: "At least one photo is required.",
    });
  }

  // Validate data
  const { isValid, errors, value } = validate(hostelSchema, data);
  if (!isValid) {
    return res.status(400).json({ success: false, message: errors });
  }

  const hostel = await hostelService.createHostel(value);
  res.status(201).json({ success: true, data: hostel });
  console.log("REQ.FILES:", req.files);
  console.log("Final validated value to be saved:", value);
});

/**
 * Controller to get all hostels
 * - Fetches hostels using service with query params
 * - Responds with list of hostels
 */
export const getAllHostels = asyncWrapper(async (req, res) => {
  const hostels = await hostelService.getAllHostels(req.query);
  res.json({ success: true, data: hostels });
});

/**
 * Controller to get a hostel by ID
 * - Fetches hostel by ID using service
 * - Responds with hostel data
 */
export const getHostelById = asyncWrapper(async (req, res) => {
  const hostel = await hostelService.getHostelById(req.params.id);
  res.json({ success: true, data: hostel });
});
