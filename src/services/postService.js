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

export const deletePostService = async (id, user) => {
    // call the repository function
    const post = await findPostById(id);
    if(post.user != user) {
        throw {
            status: 401,
            message: "Unauthorized"
        }
    }
    const response = await deletePostById(id);
    return response;
}

export async function deletePost(req, res) {
    try {
        const postId = req.params.id;
        const response = await deletePostService(postId, req.user._id);
        if(!response) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Post deleted successfully",
            data: response
        })
    } catch(error) {
        console.log(error);
        if(error.status) {
            return res.status(error.status).json({
                success: false,
                message: error.message
            })
        }
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}




