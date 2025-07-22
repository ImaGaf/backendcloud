require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions)); 

connectDB();
app.use(express.json());

const pcRoutes = require("./routes/pcRoutes");
app.use("/pcs", pcRoutes);

const errorHandler = require("./middlewares/errorHandler");
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}`);
});
