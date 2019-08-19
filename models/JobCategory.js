const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const JobCategorySchema = new Schema({
  category: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = JobCategory = mongoose.model("jobCategory", JobCategorySchema);