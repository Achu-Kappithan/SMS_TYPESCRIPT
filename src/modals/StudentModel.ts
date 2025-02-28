import mongoose,{Schema} from "mongoose";
import {IsStudent} from "../interfaces/StudentInterface"

const StudenSchema :Schema = new Schema({
    name:{ type : String ,required : true},
    age: { type : Number , required : true},
    class: { type: String, required : true},
    grade: { type: String, required : true}
})




const Student = mongoose.model<IsStudent>("Student",StudenSchema)

export default Student