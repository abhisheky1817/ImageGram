import express from "express";
import connectDB from "./config/dbconfig.js";
import { PORT } from "./config/serverconfig.js";
import postrouter from "./routers/post.js";

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.text()); 

app.use('/posts',postrouter);

app.get("/", (req, res) => {
  res.send("Welcome to ImageGram!");
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 





