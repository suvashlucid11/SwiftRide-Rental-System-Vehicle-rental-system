const express = require("express");
const router = express.Router();
const Vehicles = require("../models/vehicles");

router.get("/gettallvehicles", async (req, res) => {
  try {
    const vehicles = await Vehicles.find({});
    res.status(200).json(vehicles);
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    res.status(500).json({ message: "Failed to fetch vehicles" });
  }
});


router.get("/gettvehiclesbyeid", async (req, res) => {
  const vehicleid=req.body.vehicleid
  try {
    const vehiclee = await Vehicles.findOne({_id:vehicleid});
    res.send(vehiclee)
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    res.status(500).json({ message: "Failed to fetch vehicles" });
  }
});
