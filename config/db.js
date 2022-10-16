import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = () => {
  try {
    mongoose.connect(process.env.DATABASE, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`database connected successfully yeah!!!!`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
