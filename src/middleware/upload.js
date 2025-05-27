// middleware/upload.js
import multer from "multer";
import path from "path";
import fs from "fs";
import { BadRequestError } from "../lib/errors.js";


// Define the upload directory path
const uploadDir = path.join(process.cwd(), "uploads");

// Create the directory if it does not exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // const ext = path.extname(file.originalname);
    // const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${ext}`;
    const name = path.parse(file.originalname).name.replace(/\s+/g, "-"); // sanitize
    const ext = path.extname(file.originalname);
    const uniqueName = `${name}-${Date.now()}${ext}`;
    cb(null, uniqueName);
  },
});

// File filter (only allow images)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new BadRequestError("Only images are allowed (jpg, jpeg, png, gif)"));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // max file size = 5MB
  fileFilter,
});

export default upload;
