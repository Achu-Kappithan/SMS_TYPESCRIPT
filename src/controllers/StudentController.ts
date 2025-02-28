import { Request, Response } from "express";
import { registerStudent } from "../services/StudentServices";

// Register a new student
export const createStudent = async (req: Request, res: Response) => {
  try {
    console.log(req.body)
    const student = await registerStudent(req.body); 
   
    res.status(201).json(student); 
  } catch (error) {
    res.status(500).json({ error: "Failed to register student  not working" });
  }
};  