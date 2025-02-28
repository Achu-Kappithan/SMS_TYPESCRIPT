import express from "express";
import { createStudent,getstudents ,updateStudets, RemoveStudent} from "../controllers/StudentController";

const router = express.Router();

// Route to add a new student
router.post("/students", createStudent);

// desply all studenys details
router.get("/students",getstudents);

// update student details
router.put("/students/:StudentId",updateStudets);

// remove student data 
router.delete("/students/:Id",RemoveStudent  )

export default router;