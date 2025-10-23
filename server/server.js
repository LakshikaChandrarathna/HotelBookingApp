import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import userRouter from "./routes/userRoutes.js";
import connectCloudinary from "./configs/cloudinary.js";
import roomRouter from "./routes/roomRoutes.js";
import hotelRouter from "./routes/hotelRoutes.js"; // ✅ ADD THIS LINE

connectDB();
connectCloudinary();

const app = express();

// enable cross-origin resource sharing
app.use(cors());

//Middleware
app.use(express.json());
app.use(clerkMiddleware());

//API to listen to Clerk webhooks
app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => res.send("API is working"));
app.use("/api/user", userRouter);
app.use("/api/hotels", hotelRouter); // ✅ Now this works
app.use("/api/rooms", roomRouter);   // (also fixed typo from 'roomss')
