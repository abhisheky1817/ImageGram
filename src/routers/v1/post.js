import express from 'express';
import { createPost } from "./controllers/postControllers.js";
import upload from "./config/multerconfig.js";
import { deletePost, updatePost } from '../../controllers/postControllers.js';

const router = express.Router();  //router object to modularize routes


router.post('/', upload.single('image'), createPost);

router.delete('/:id', deletePost);

router.put('/:id',upload.single('image'), updatePost);

export default router;

