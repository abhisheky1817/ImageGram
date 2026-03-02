import { createPost } from "../repositories/postRepositories.js";

export const createServicePost = async (createPostobject) => {
    const caption = createPostobject.caption;
    const image = createPostobject.image;
    //const user = createPostobject.user;

    const newPost = await createPost(caption, image); 
    return newPost;
}