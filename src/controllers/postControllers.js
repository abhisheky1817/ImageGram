import { createServicePost ,getAllPostsService } from "../services/postService.js";


export const createPostController = async (req, res) => {
  try {
    const { caption, user } = req.body;

    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Image is required' });
    }

    const fileBuffer = req.file.buffer;
    const newPost = await createServicePost(fileBuffer, caption, user);

    res.status(201).json({ success: true, post: newPost });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// /api/v1/posts?limit=10&offset=0
export async function getAllPosts(req, res) {
    try {
        const limit = req.query.limit || 10;
        const offset = req.query.offset || 0;

        const paginatedPosts = await getAllPostsService(offset, limit);

        return res.status(200).json({
            success: true,
            message: "All posts fetched successfully",
            data: paginatedPosts
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}








