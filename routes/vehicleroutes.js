const express=require("express");
const router=express.Router(); 
 
const Vehicles=require("../models/vehicles")

router.get("/gettallvehicles",async(req,res)=>{
   try{
    const vehicles=await Vehicles.find({})
    return res.send(vehicles);



   }
   catch(error)
   {
    return res.status(400).json({message:error});

   }
});
module.exports=router;