import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import emailRouter from "./routes/email.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
  path: "./data/config.env",
});
// const url = `http://localhost:3000`;
// Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: `http://localhost:3000`,
    methods: ["POST"],
    credentials: true,
  })
);

// Using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);
app.use("/api/v1/email", emailRouter);

app.get("/", (req, res) => {
  res.send("Nice working");
});

// Using Error Middleware
app.use(errorMiddleware);
