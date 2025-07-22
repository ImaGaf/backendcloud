const express = require("express");
const router = express.Router();
const Product = require("../models/pc");

router.get("/", async (req, res) => {
  try {
    const pcList = await Product.find({});
    res.json(pcList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
