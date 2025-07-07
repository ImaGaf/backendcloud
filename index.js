require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
const port = process.env.PORT || 3000;

connectDB();
app.use(express.json());

const maskRoutes = require("./routes/maskRoutes");
app.use("/exam2p/masks", maskRoutes);

const errorHandler = require("./middlewares/errorHandler");
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}`);
});
