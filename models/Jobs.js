const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// //importing Realtionships
// const Skills = require('./Skills');
// const JobCategory = require('./JobCategory');
// const ExperienceLevel = require('./ExperienceLevel');

// Create Schema
const Jobschema = new Schema({
  position: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'jobCategory'
  },
  experienceLevel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'experienceLevel'
  },
  skills: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'skills'
  }],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Jobs = mongoose.model("jobs", Jobschema);