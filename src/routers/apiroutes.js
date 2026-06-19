//this api router will trigger when any request starting with /api comes to the server. It will forward the request to the appropriate router based on the remaining path after /api. For example, if the remaining path is /v1/posts, then the request will be forwarded to v1Router, which will further forward it to postrouter if the remaining path is /posts.




import express from 'express';
import v1Router from "./v1/v1Router.js";

const router = express.Router();  

router.use('/v1', v1Router);

export default router;