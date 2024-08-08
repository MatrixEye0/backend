import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./src/db/index.js";
import dotenv from "dotenv";
import router from "./src/routes/routes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(router);

app.listen(PORT, () => {
  try {
    console.log("Server is listen on port: " + PORT);
    connectDB();
  } catch (error) {
    console.log("Error while listning server: " + error.message);
  }
});
