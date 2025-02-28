import express from "express";
import { createStudent,getstudents } from "../controllers/StudentController";

const router = express.Router();

// Route to add a new student
router.post("/students", createStudent);

// desply all studenys details
router.get("/students",getstudents);

export default router;