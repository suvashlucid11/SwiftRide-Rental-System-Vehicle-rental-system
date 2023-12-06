// In vehicleroutes.js

const express = require('express');
const router = express.Router();
const Vehicles = require('../models/vehicles');

// Define route for fetching all vehicles
router.get('/gettallvehicles', async (req, res) => {
  try {
    const vehicles = await Vehicles.find({});
    res.status(200).json(vehicles);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).json({ message: 'Failed to fetch vehicles' });
  }
});
router.post('/gettvehiclesbyeid', async (req, res) => {
  const vid = req.body.id; // Accessing the ID from the request body
  try {
    const vehicle = await Vehicles.findOne({ _id: vid });
    res.status(200).json(vehicle);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).json({ message: 'Failed to fetch vehicles' });
  }
});


module.exports = router; // Export the router for use in app.js
