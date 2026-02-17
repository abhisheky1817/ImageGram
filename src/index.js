import express from "express";
import connectDB from "./config/dbconfig.js";
import { PORT } from "./config/serverconfig.js";

const app = express();


app.get("/", (req, res) => {
  res.send("Welcome to ImageGram!");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API is working!" });
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 





