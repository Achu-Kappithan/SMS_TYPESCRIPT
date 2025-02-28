
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import connectdb from "./config/db";
import StudentRoute from "./routes/StudentRoute"


dotenv.config()
const app =express()
const Port = process.env.PORT || 3008

app.use(cors())
app.use(bodyParser.json())

connectdb()

app.use("/",StudentRoute)


app.get("/",(req,res)=>{
    res.send("Student management system is running")
})

app.listen(Port,()=>console.log(`Server startson http://localhost:${Port}`))