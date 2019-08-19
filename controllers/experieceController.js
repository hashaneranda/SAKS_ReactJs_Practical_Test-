
// Load ExperienceLevel model
const ExperienceLevel = require("../models/ExperienceLevel");


/**
* Add new ExperienceLevel
*
* @var experienceLevel 
*/
exports.add_experienceLevel = function(req, res) {
    const newExperienceLevel = new ExperienceLevel({
        experiencelevel: req.body.experienceLevel
      });

      newExperienceLevel
            .save()
            .then(experienceLevel => {
              res.status(200).json({
                success: true,
                data : experienceLevel
              }) 
            })
            .catch(err => {
              console.log(err)
              res.status(500).send(err);
            });
  };
  

/**
* fetch ExperienceLevel
*
*/
exports.get_experienceLevel = function(req, res) {
    ExperienceLevel.find()
    .then(experienceLevel => {
      res.status(200).json({
        success: true,
        data : experienceLevel
      }) 
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err);
    });

    
  };
  