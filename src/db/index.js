import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`\n MongoDB connect :$ {conn.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection failed", error);
  }
};
export default connectDB;
