import { Document } from "mongoose";

interface IsStudent extends Document {
    name : string;
    age : number;
    class: string;
    grade : string;
}


export {
    IsStudent,
};