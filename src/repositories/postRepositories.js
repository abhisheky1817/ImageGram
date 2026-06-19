import Post from "../schema/postschema.js";

export const createPost = async (caption, image, user) => {
        const newPost = await Post.create({ caption, image, user });
        // const newPost = new Post({ caption, image, user });
        // await newPost.save();
        return newPost;
}


