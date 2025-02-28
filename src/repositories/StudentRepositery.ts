import Student from "../modals/StudentModel";
import {IsStudent } from "../interfaces/StudentInterface";

// Add a new student to the database
export const createStudent = async (studentData: IsStudent) => {
  return await Student.create(studentData); 
};

export const getAllstudents = async ()=>{
    return await Student.find()
}