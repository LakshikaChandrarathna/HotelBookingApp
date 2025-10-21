import mongoose from "mongoose";
import "dotenv/config"; // Make sure dotenv is loaded here

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("✅ MongoDB Connected Successfully");
    
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1); // stop the server if DB fails to connect
  }
};

export default connectDB;
