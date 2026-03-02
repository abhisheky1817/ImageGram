import { v2 as cloudinary } from 'cloudinary';
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } from './serverconfig.js';

cloudinary.config({
     cloud_name: CLOUDINARY_CLOUD_NAME,
     api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET   
});

export const uploadToCloudinary = async (filePath) => {
  const result = await cloudinary.uploader.upload(filePath, {
    folder: "imagegram_posts"
  });

  await fs.unlink(filePath);

  return {
    imageUrl: result.secure_url,
    publicId: result.public_id
  };
};

export default cloudinary;


