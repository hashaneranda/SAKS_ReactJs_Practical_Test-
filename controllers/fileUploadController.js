


var multer   =  require( 'multer' );

var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './uploads');
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + '-' + Date.now()+ '.jpg');
    }
  });
  var upload = multer({ storage : storage}).single('file');
  



/**
* Add new Job
*
*/
exports.add_file = function(req, res) {
    console.log("File route")
    upload(req,res,function(err) {
        if(err) 
            return res.status(500).send(err);
        console.log("File success")
        res.status(200).json({
            success: true,
            data : req.file
        }) 
    });


};