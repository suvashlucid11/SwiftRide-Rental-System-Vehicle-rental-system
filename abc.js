//abc is server
const express = require('express');
const app = express();
const dbConfig=require("./db")
const vehicleRoute=require("./routes/vehicleroutes")
app.use(express.json())
app.use("/api/vehicles",vehicleRoute)
const port = process.env.PORT||5000;
 app.listen(port,()=>{
    console.log("node server started,"+port)
 }); 