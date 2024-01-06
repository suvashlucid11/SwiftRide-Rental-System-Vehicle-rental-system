const express = require('express');
const app = express();
const dbConfig = require("./db");
const vehicleroute = require("./routes/vehicleroutes");
<<<<<<< HEAD
const userroutes=require("./routes/userroutes")
const bookingRoute=require("./routes/bookingRoute")
=======
const userroutes = require("./routes/userroutes");
const bookingRoute = require("./routes/bookingRoute");

>>>>>>> suvash
app.use(express.json())

// Mount the vehicleRoute handler under /api/vehicles path
app.use("/api", vehicleroute)
app.use("/api/bookings",bookingRoute)

app.use("/api/users",userroutes);
<<<<<<< HEAD
const port = 5000 || 5000;
=======
const port = process.env.PORT || 5000;
>>>>>>> suvash
app.listen(port, () => {
  console.log("Node server started on port " + port);
}); 
