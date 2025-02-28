import Student from "../modals/StudentModel";
import {IsStudent } from "../interfaces/StudentInterface";

// Add a new student to the database
export const createStudent = async (studentData: IsStudent) => {
  return await Student.create(studentData); 
};

// get all student details

export const getAllstudents = async ()=>{
    return await Student.find()
}

// update  studet details
export const Update = async (StudentId: string, Data: Partial<IsStudent>) => {
    console.log("StudentId from request:", StudentId); 
    let ans = await Student.findByIdAndUpdate(StudentId,Data,{new :true});
    console.log("Query result:", ans); 
    return ans;
};

export const remove = async(Id:string)=>{
    console.log(Id)
    return await Student.findByIdAndDelete(Id)
}