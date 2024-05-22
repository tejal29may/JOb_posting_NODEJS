const express=require("express")

const jobcontroller=require("../controllers/job")

const router=express.Router();

router.post("/api/jobs",jobcontroller.createjobs)

router.get("/api/jobs",jobcontroller.listjobs)

router.put("/api/jobs/:id",jobcontroller.editjobs)

router.delete("/api/jobs/:id",jobcontroller.deletejobs)


module.exports=router