import express from 'express';
import postrouter from "./post.js";
import userrouter from "./user.js";


const router = express.Router();

router.use('/posts', postrouter);  //if the remaining path after /api/v1 is /posts, then the request will be forwarded to postrouter
router.use('/users', userrouter);  //if the remaining path after /api/v1 is /users, then the request will be forwarded to userrouter

export default router;