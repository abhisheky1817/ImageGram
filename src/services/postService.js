import { uploadToCloudinary } from '../config/cloudinaryconfig.js';
import { createPost } from '../repositories/postRepositories.js';

export const createServicePost = async (fileBuffer, caption, user) => {
  const image = await uploadToCloudinary(fileBuffer);
  const newPost = await createPost(caption, image, user);
  return newPost;
};




