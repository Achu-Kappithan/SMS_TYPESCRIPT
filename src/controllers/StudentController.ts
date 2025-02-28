import { Request, Response } from "express";
import { registerStudent, ftethAllstudents,UpdatetoDatabase,Removedata} from "../services/StudentServices";
import Student from "../modals/StudentModel";
import { object } from "webidl-conversions";
import { rejects } from "node:assert";

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

export const updateStudets = async (req:Request,res:Response)=>{
  try {
    const {StudentId} = req.params
    const Data = req.body
    const updatedDetails = await UpdatetoDatabase(StudentId,Data)
    if(!updatedDetails){
      res.status(404).json({error:"Student not found"})
      return
    }
     res.status(200).json({updatedDetails})
  } catch (error) {
    res.status(500).json({error: "Faild to update teh studen"})
  }
}

export const RemoveStudent = async (req:Request, res: Response)=>{
  try {
    const {Id} = req.params
    const data = await Removedata(Id)
    if(!data){
      res.status(404).json({ error: "Student not found" });
      return 
    }
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({error:"Faild to remove Student"})
  }

}
