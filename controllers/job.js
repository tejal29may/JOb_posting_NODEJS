const jobmodel=require("../models/jobs")

const createjobs=async(req,res)=>{
    const jobobj=req.body;
    const newjob=new jobmodel(jobobj);
    await newjob.save();
    console.log(req.body);
    res.json({
        success:true,
        message:"dummy create jobs"
    })
}

const listjobs=async(req,res)=>{
    res.json({
        success:true,
        message:"dummy list jobs"
    })
}

const editjobs=async(req,res)=>{
    res.json({
        success:true,
        message:"dummy edit jobs"
    })
}


const deletejobs=async(req,res)=>{
    res.json({
        success:true,
        message:"dummy delete jobs"
    })
}

const jobcontroller={
    listjobs,
    createjobs,
    editjobs,
    deletejobs
}

module.exports=jobcontroller