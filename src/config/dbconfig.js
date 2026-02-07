import mongoose from "mongoose";
import { DB_URL } from "./serverconfig.js";

export default async function connectDB() {
  try {
    await mongoose.connect(DB_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
