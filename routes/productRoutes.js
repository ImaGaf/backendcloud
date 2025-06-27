const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// Obtener todos los productos
router.get("/products", async (req, res) => {
  try {
    const productList = await Product.find({});
    console.log(productList)
    res.json(productList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener un producto por su _id de MongoDB
router.get("/products/:id", async (req, res) => {
  try {
    const foundProduct = await Product.findById(req.params.id);
    if (!foundProduct)
      return res.status(404).json({ message: "Producto no encontrado" });
    res.json(foundProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear un nuevo producto
router.post("/products", async (req, res) => {
  const newProduct = new Product({
    idProduct: req.body.idProduct,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    stock: req.body.stock,
    cathegory: req.body.cathegory,
    custom: req.body.custom
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Actualizar un producto existente
router.put("/products/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        idProduct: req.body.idProduct,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        cathegory: req.body.cathegory,
        custom: req.body.custom
      },
      { new: true }
    );

    if (!updatedProduct)
      return res.status(404).json({ message: "Producto no encontrado" });

    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar un producto
router.delete("/products/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct)
      return res.status(404).json({ message: "Producto no encontrado" });

    res.json({ message: "Producto eliminado", deletedProduct });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
