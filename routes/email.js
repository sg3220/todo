import express from "express";
import { newTask } from "../controllers/email.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", newTask);
export default router;
