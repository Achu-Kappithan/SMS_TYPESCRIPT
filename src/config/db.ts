import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI as string,{
            dbName: "student_management",
        })
        console.log("Database  Connected....!")
    } catch(error){
        console.error("Database Connection Faild...!", error)
        process.exit(1)
    }
}

export default connectDB