const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3017;


mongoose.connect("mongodb+srv://oswaldojtipan:trabatrix2@cluster0.djnk15e.mongodb.net/Barroco?retryWrites=true&w=majority&appName=Cluster0");

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to MongoDB Database"));

app.use(express.json());

const productRouter = require("./routes/productRoutes");
app.use("/barroco", productRouter);

app.listen(port, () =>
  console.log("MY Computer Store Server is running on port --> " + port)
);
