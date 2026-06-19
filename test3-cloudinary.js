// test-cloudinary.js
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

cloudinary.uploader.upload(
  'https://res.cloudinary.com/demo/image/upload/sample.jpg',
  { folder: 'imagegram' }
)
  .then((result) => console.log("UPLOAD SUCCESS:", result.secure_url))
  .catch((err) => console.log("UPLOAD FAILED:", err));