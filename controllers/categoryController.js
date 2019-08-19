



// Load JobCategory model
const JobCategory = require("../models/JobCategory");


/**
* Add new Category
*
* @var category 
*/
exports.add_categories = function(req, res) {
    const newJobCategory = new JobCategory({
        category: req.body.category
      });

      newJobCategory
            .save()
            .then(jobCategory => {
              res.status(200).json({
                success: true,
                data : jobCategory
              }) 
            })
            .catch(err => {
              console.log(err)
              res.status(500).send(err);
            });
  };
  

/**
* fetch categories
*
*/
exports.get_categories = function(req, res) {
  JobCategory.find()
    .then(jobCategory => {
      res.status(200).json({
        success: true,
        data : jobCategory
      }) 
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err);
    });

    
  };
  