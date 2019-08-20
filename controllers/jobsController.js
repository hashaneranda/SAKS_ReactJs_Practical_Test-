
// Load Skills model
const Jobs = require("../models/Jobs");
const Skills = require("../models/Skills");


// Load input validation
const validateJobInput = require("../validation/job");


/**
* Add new Job
*
* @var position 
* @var location 
* @var description 
* @var category 
* @var experienceLevel 
* @var skills 
* @var images 
*/
exports.add_jobs = function(req, res) {

    // Form validation
    const { errors, isValid } = validateJobInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    console.log(req.body.skills)
    const array = req.body.skills.map( x => {id:x.id});

    

    const newJobs = new Jobs({
        position: req.body.position,
        location: req.body.location,
        description: req.body.description,
        category: req.body.category,
        experienceLevel: req.body.experienceLevel,
        images: req.body.images,

      });

      //Add multiple skills to the job
      req.body.skills.forEach( async id => {         
        console.log(id.id)
        newJobs.skills.push(id.id)
      });

      newJobs
            .save()
            .then(jobs => {
                res.status(200).json({
                    success: true,
                    data : jobs
                  }) 
            })
            .catch(err => {
              res.status(500).send(err);
            });
  };
  

/**
* fetch Skills
*
*/
exports.get_jobs = function(req, res) {
    Jobs.find()
    .populate('category')
    .populate('experienceLevel')
    .populate('skills')
    .then(jobs => {
      res.status(200).json({
        success: true,
        data : jobs
      }) 
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err);
    });

    
  };
  