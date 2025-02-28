;import { createStudent,getAllstudents ,Update} from "../repositories/StudentRepositery";
import { IsStudent } from "../interfaces/StudentInterface";

// Register a new student
export const registerStudent = async (studentData: IsStudent) => {
  return await createStudent(studentData); 
};

export const ftethAllstudents = async ()=>{
  return await getAllstudents()
}

export const UpdatetoDatabase = async (StudentId:string,Data:Partial<IsStudent>)=>{
  return await Update(StudentId,Data)
}