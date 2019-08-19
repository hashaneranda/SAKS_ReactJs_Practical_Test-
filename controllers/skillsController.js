
// Load Skills model
const Skills = require("../models/Skills");


/**
* Add new Skills
*
* @var skill 
*/
exports.add_skills = function(req, res) {
    const newSkills = new Skills({
        skill: req.body.skill
      });

      newSkills
            .save()
            .then(skills => {
              res.status(200).json({
                success: true,
                data : skills
              }) 
            })
            .catch(err => {
              console.log(err)
              res.status(500).send(err);
            });
  };
  

/**
* fetch Skills
*
*/
exports.get_skills = function(req, res) {
    Skills.find()
    .then(skills => {
      res.status(200).json({
        success: true,
        data : skills
      }) 
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err);
    });

    
  };
  