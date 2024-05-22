const express=require("express");
const jobrouter=require("./routes/job")
const mongoose=require("mongoose")
const app=express();


//json parsing middleware
app.use(express.json())

//mongodb connections
mongoose.connect("mongodb://localhost:27017/jobapp")
.then(()=>console.log("connection with database is estblished"))
.catch((err)=>console.log("erroe",err))

//api routers
app.use(jobrouter)

app.listen(8080,()=>{
    console.log(" node app is running on port 8080");
})