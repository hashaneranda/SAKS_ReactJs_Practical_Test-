const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const SkillsSchema = new Schema({
  skill: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Skills = mongoose.model("skills", SkillsSchema);