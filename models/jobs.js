const mongoose=require("mongoose")

//to convert  json into schema  mongoose.schema
const jobschema= new mongoose.Schema({
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    company:{
        type: String,
    },
    location:{
        type: String,
    },
    salary:{
        type: Number,
    },
})

//this will create a collection in schema
const jobmodel=mongoose.model("jobs",jobschema)

module.exports=jobmodel;