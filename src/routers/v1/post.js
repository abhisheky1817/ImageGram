import express from 'express';
//import { createPost } from "./controllers/postControllers.js";
import { createPostController, getAllPosts, deletePost } from '../../controllers/postControllers.js';
import { upload } from "../../config/multerconfig.js";


const router = express.Router();  //router object to modularize routes


router.post('/', upload.single('image'), createPostController);  //if the remaining path after /api/v1/posts is /, then the request will be forwarded to createPostController

router.get('/', getAllPosts);  //if the remaining path after /api/v1/posts is /, then the request will be forwarded to getAllPostsController

router.delete('/:id', deletePost);  //if the remaining path after /api/v1/posts is /:id, then the request will be forwarded to deletePostController


export default router;

