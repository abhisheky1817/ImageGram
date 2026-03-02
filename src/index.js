import express from "express";
import connectDB from "./config/dbconfig.js";
import { PORT } from "./config/serverconfig.js";
import { createPost } from "./controllers/postControllers.js";
import upload from "./config/multerconfig.js";

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.text()); 

app.get("/", (req, res) => {
  res.send("Welcome to ImageGram!");
});

app.post("/posts",upload.single("image"),createPost); 

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 





