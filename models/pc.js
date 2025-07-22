const mongoose = require("mongoose");

const pcSchema = new mongoose.Schema({
  computerBrand: { type: String, required: true },
  computerModel: { type: String, required: true },
  categoryId:    { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  userId:        { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  archived:      { type: Boolean, default: false },
  createdAt:     { type: Date, default: Date.now }
}, {
  collection: "pcs"
});

module.exports = mongoose.model("PC", pcSchema);
