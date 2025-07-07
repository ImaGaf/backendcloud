const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    serialNumber: { type: Number },
    brand: { type: String },
    model: { type: String },
    price: { type: Number },
    new: { type: Boolean },
    color: { type: String },
    size: { type: String }
  },
  { collection: "masks" }
);

module.exports = mongoose.model("masks", productSchema);
