import express from 'express';
import { createPost } from "./controllers/postControllers.js";
import upload from "./config/multerconfig.js";

const router = express.Router();  //router object to modularize routes


router.post('/', upload.single('image'), createPost);

export default router;

