const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  crop: String,
  issue: String,
  soil: String,
  stage: String,
  advice: String
});

module.exports = mongoose.model("Report", reportSchema);