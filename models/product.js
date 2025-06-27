const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    idProduct: { type: String },
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    stock: { type: Number },
    cathegory: { type: String },
    custom: { type: Boolean }
  },
  { collection: "products" }
);

module.exports = mongoose.model("Product", productSchema);
