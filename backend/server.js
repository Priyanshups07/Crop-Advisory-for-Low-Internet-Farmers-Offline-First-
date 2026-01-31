const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Report = require("./models/Report");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/agro");

app.post("/sync", async (req, res) => {
  await Report.insertMany(req.body);
  res.json({ message: "Data synced!" });
});

app.listen(5000, () => console.log("Server running on port 5000"));