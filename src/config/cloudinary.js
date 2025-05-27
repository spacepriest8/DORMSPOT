import {v2 as cloudinary} from 'cloudinary';
import configService from './configService'; // Assuming you have a config service to manage environment variables

const connectCloudinary = () => {
    cloudinary.config({
        cloud_name: configService.getOrThrow("CLOUDINARY_CLOUD_NAME"),
        api_key: configService.getOrThrow("CLOUDINARY_API_KEY"),
        api_secret: configService.getOrThrow("CLOUDINARY_API_SECRET"),
        secure: configService.getOrThrow("NODE_ENV") === "production" ? true : false // Use secure URLs for HTTPS in production
    });
}


    console.log('Cloudinary connected successfully'); 

    export default connectCloudinary;