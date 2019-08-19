const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const ExperienceLevelSchema = new Schema({
  experiencelevel: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = ExperienceLevel = mongoose.model("experienceLevel", ExperienceLevelSchema);