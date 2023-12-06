const express = require('express');
const app = express();
const dbConfig = require("./db");
const vehicleRoute = require("./routes/vehicleroutes");

app.use(express.json())

// Mount the vehicleRoute handler under /api/vehicles path
app.use("/api", vehicleRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Node server started on port " + port);
}); 
