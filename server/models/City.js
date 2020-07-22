const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  name: String,
  temperature: Number,
  condition: String,
  conditionPic: String,
  isSaved: Boolean
});

const Weather = mongoose.model("weather", weatherSchema);

module.exports = Weather;
