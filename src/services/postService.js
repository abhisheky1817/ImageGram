import e from "express";
import { createPost } from "../repositories/postRepositories.js";

export const createServicePost = async (createPostobject) => {
    const caption = createPostobject.caption;
    const image = createPostobject.image;
    //const user = createPostobject.user;

    const newPost = await createPost(caption, image); 
    return newPost;
}

export const getAllPostsService = async (offset, limit) => {
    const posts = await findAllPosts(offset, limit);

    // Calculate total number of posts and total number of pages
    const totalDocuments = await countAllPosts();

    const totalPages = Math.ceil(totalDocuments / limit);

    return {
        posts, totalPages, totalDocuments
    }

}

export const deletePostService = async (id) => {
     const response = await deletePostById(id);
    return response;
}

export const updatePostService = async (id, updateObject) => {
    const post = await updatePostById(id, updateObject);
    return post;
}

