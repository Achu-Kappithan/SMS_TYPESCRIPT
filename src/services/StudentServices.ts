import { createStudent,getAllstudents } from "../repositories/StudentRepositery";
import { IsStudent } from "../interfaces/StudentInterface";

// Register a new student
export const registerStudent = async (studentData: IsStudent) => {
  return await createStudent(studentData); 
};

export const ftethAllstudents = async ()=>{
  return await getAllstudents()
}