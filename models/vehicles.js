 const mongoose=require("mongoose")
 const vehicleSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:Number,
        required:true
    },
    mileage:{
        type:Number,
        required:true
    },
rentperday:{
    type:Number,
    required:true
},
imageurls:[],
currentbookings:[],
type:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},

},{
    timestamps:true,
})
const vehicleModel=mongoose.model("vehicles",vehicleSchema)
module.exports=vehicleModel