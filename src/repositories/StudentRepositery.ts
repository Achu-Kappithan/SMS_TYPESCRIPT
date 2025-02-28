import Student from "../modals/StudentModel";
import {IsStudent } from "../interfaces/StudentInterface";
import { truncate } from "node:fs/promises";
import { FormData } from "undici-types";

// Add a new student to the database
export const createStudent = async (studentData: IsStudent) => {
  return await Student.create(studentData); 
};

export const getAllstudents = async ()=>{
    return await Student.find()
}


export const Update = async (StudentId: string, Data: Partial<IsStudent>) => {
    console.log("StudentId from request:", StudentId); 
    let ans = await Student.findByIdAndUpdate(StudentId,Data,{new :true});
    console.log("Query result:", ans); 
    return ans;
  };