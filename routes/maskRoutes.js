const express = require("express");
const router = express.Router();
const Product = require("../models/masks");

router.get("/", async (req, res) => {
  try {
    const masksList = await Product.find({});
    res.json(masksList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
