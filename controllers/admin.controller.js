const path = require('path');

const rootDir = require('../util/path');


 exports.getadmincontroller = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
  
}

exports.postadmincontroller = (req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
}

