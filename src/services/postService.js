import { uploadToCloudinary } from '../config/cloudinaryconfig.js';
import { createPost } from '../repositories/postRepositories.js';

export const createServicePost = async (fileBuffer, caption, user) => {
  const image = await uploadToCloudinary(fileBuffer);
  const newPost = await createPost(caption, image, user);
  return newPost;
};

export const getAllPostsService = async (offset, limit) => {
    const posts = await findAllPosts(offset, limit);

    // Calculate total number of posts and total number of pages
    const totalDocuments = await countAllPosts();

    const totalPages = Math.ceil(totalDocuments / limit);

    return {
        posts, totalPages, totalDocuments
    }

}




