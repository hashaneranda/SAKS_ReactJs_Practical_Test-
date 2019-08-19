const express = require("express");
const router = express.Router();

// Load Controllers
const category = require("../../controllers/categoryController");
const skill = require("../../controllers/skillsController");
const experience = require("../../controllers/experieceController");
const jobs = require("../../controllers/jobsController");


// @route POST api/add_categories
// @desc Add to JobCategory
// @access Public
router.post("/add_categories", category.add_categories);

// @route POST api/get_categories
// @desc Fetch Data from JobCategory
// @access Public
router.post("/get_categories", category.get_categories);


// @route POST api/add_skills
// @desc Add to Skills
// @access Public
router.post("/add_skills", skill.add_skills);

// @route POST api/get_skills
// @desc Fetch Data from Skills
// @access Public
router.post("/get_skills", skill.get_skills);



// @route POST api/add_experienceLevel
// @desc Add to ExperienceLevel
// @access Public
router.post("/add_experienceLevel", experience.add_experienceLevel);

// @route POST api/get_experienceLevel
// @desc Fetch Data from ExperienceLevel
// @access Public
router.post("/get_experienceLevel", experience.get_experienceLevel);


// @route POST api/add_jobs
// @desc Add to Jobs
// @access Public
router.post("/add_jobs", jobs.add_jobs);

// @route POST api/get_jobs
// @desc Fetch Data from Jobs
// @access Public
router.post("/get_jobs", jobs.get_jobs);



// export our router at the bottom of users.js so we can use it elsewhere
module.exports = router;
