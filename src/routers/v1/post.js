import express from 'express';
//import { createPost } from "./controllers/postControllers.js";
import { createPostController, getAllPosts, deletePost } from '../../controllers/postControllers.js';
import { upload } from "../../config/multerconfig.js";
import { validate } from '../../validators/zodValidator.js';
import { zodPostSchema } from '../../validators/zodPostSchema.js';


const router = express.Router();  //router object to modularize routes


router.post('/', upload.single('image'), validate(zodPostSchema), createPostController);  //if the remaining path after /api/v1/posts is /, then the request will be forwarded to createPostController

router.get('/', getAllPosts);  //if the remaining path after /api/v1/posts is /, then the request will be forwarded to getAllPostsController

router.delete('/:id', deletePost);  //if the remaining path after /api/v1/posts is /:id, then the request will be forwarded to deletePostController

router.put('/:id', upload.single('image'), validate(zodPostSchema), updatePost);


export default router;

