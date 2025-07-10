import { v2 as cloudinary } from 'cloudinary';
import configService from './configService.js';

export const connectCloudinary = () => {
  cloudinary.config({
    cloud_name: configService.getOrThrow("CLOUDINARY_NAME"),
    api_key: configService.getOrThrow("CLOUDINARY_API_KEY"),
    api_secret: configService.getOrThrow("CLOUDINARY_API_SECRET"),
    secure: configService.getOrThrow("NODE_ENV") === "production"
  });
  console.log('✅ Cloudinary configured!');
};

export default cloudinary; // ✅ Export the actual `v2` instance too!
