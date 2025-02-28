import express from "express";
import { createStudent } from "../controllers/StudentController";

const router = express.Router();

// Route to add a new student
router.post("/students", createStudent);

export default router;