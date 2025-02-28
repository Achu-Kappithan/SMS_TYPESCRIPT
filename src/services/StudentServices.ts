import { createStudent } from "../repositories/StudentRepositery";
import { IsStudent } from "../interfaces/StudentInterface";

// Register a new student
export const registerStudent = async (studentData: IsStudent) => {
  return await createStudent(studentData); 
};