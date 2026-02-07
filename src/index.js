import express from "express";
import connectDB from "./config/dbconfig.js";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to ImageGram!");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API is working!" });
});

await connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 





