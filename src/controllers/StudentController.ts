import { Request, Response } from "express";
import { registerStudent, ftethAllstudents} from "../services/StudentServices";
import Student from "../modals/StudentModel";

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

export const getstudents  = async (req:Request, res:Response)=>{
  try {
    const studentdata = await ftethAllstudents()
    res.status(200).json(studentdata)
  } catch (error) {
    res.status(500).json({error:"Faild to  get teh student"})
  }
}
