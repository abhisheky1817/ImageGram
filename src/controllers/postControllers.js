import { createServicePost } from "../services/postService.js";


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






