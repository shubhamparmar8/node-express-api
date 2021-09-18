import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/users.js";

// initalization
dotenv.config();
const app = express();
const PORT = 5000 || process.env.PORT;

// middleware
app.use(express.json());

// database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database connected."));

// routes
app.use("/users", userRouter);

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
