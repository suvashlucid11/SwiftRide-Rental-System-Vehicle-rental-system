const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const moment = require("moment");
const Vehicle = require("../models/vehicles");

router.post("/book", async (req, res) => {
  const {
    vehicle,
    userid,
    fromdate,
    todate,
    totalamount,
    totaldays,
  } = req.body;

  try {
    const newBooking = new Booking({
      vehicle: vehicle.name,
      vehicleid: vehicle._id,
      userid,
      fromdate: moment(fromdate, "DD-MM-YYYY").format("DD-MM-YYYY"),
      todate: moment(todate, "DD-MM-YYYY").format("DD-MM-YYYY"),
      totalamount,
      totaldays,
      transcationId: "1234",
    });

    const booking = await newBooking.save();

    const vehicleEmp = await Vehicle.findOne({ _id: vehicle._id });

    vehicleEmp.currentbookings.push({
      bookingid: booking._id,
      fromdate: moment(fromdate, "DD-MM-YYYY").format("DD-MM-YYYY"),
      todate: moment(todate, "DD-MM-YYYY").format("DD-MM-YYYY"),
      userid,
      status: booking.status,
    });

    await vehicleEmp.save();

    res.send("Vehicle Booked Successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
