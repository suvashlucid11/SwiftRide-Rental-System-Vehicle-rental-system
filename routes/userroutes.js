const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/register", async (req, res) => {
  const newUser = new User(req.body);

  try {
    const user = await newUser.save();
    res.status(200).json({ message: "Successfully registered", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      const temp={
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
        _id:user._id,

      }
      res.send(temp)
    } else {
      res.status(400).json({ message: "Login failed" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
