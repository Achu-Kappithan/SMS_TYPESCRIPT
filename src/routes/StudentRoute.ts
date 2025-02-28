import express from "express";
import { createStudent,getstudents ,updateStudets} from "../controllers/StudentController";

const router = express.Router();

// Route to add a new student
router.post("/students", createStudent);

// desply all studenys details
router.get("/students",getstudents);

router.put("/students/:StudentId",updateStudets)

export default router;