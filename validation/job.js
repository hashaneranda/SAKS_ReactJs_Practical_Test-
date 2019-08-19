const Validator = require("validator");
const isEmpty = require("is-empty");



module.exports = function validateJobInput(data) {

  let errors = {};

// Convert empty fields to an empty string so we can use validator functions
  data.position = !isEmpty(data.position) ? data.position : "";
  data.location = !isEmpty(data.location) ? data.location : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.category = !isEmpty(data.category) ? data.category : "";
  data.experienceLevel = !isEmpty(data.experienceLevel) ? data.experienceLevel : "";


// position checks
  if (Validator.isEmpty(data.position)) {
    errors.position = "Position field is required";
  }

// location checks
  if (Validator.isEmpty(data.location)) {
    errors.location = "Location field is required";
  } 

// Password checks
  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }
if (Validator.isEmpty(data.category)) {
    errors.category = "Category field is required";
  }
  
if (Validator.isEmpty(data.experienceLevel)) {
    errors.experienceLevel = "Experience Level field is required";
  }
  



return {
    errors,
    isValid: isEmpty(errors)
  };

};