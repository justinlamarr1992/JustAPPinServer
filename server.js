const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");

require("dotenv").config();

const { readdirSync } = require("fs");

//app
const app = express();

// Database
mongoose
  .connect(process.env.DATABASEONLINE, {
    // useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

//   Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// Route Middleware
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on ${port}`));
