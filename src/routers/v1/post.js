import express from 'express';
//import { createPost } from "./controllers/postControllers.js";
import { createPostController, getAllPosts } from '../../controllers/postControllers.js';
import { upload } from "../../config/multerconfig.js";


const router = express.Router();  //router object to modularize routes


router.post('/', upload.single('image'), createPostController);  //if the remaining path after /api/v1/posts is /, then the request will be forwarded to createPostController

router.get('/', getAllPosts);  //if the remaining path after /api/v1/posts is /, then the request will be forwarded to getAllPostsController


export default router;

