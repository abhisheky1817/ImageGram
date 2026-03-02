import { createServicePost } from "../services/postService.js";

export const createPost = async (req, res) => {
     
    const post =  await createServicePost({
        caption: req.body.caption,
        image: req.file.path,
    });

    return res.json({message : 'Post created successfully', post});
}