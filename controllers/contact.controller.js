const path = require('path');

const rootDir = require('../util/path');


exports.getcontactformcontroller = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'));
};

exports.postcontactformcontroller = (req,res,next)=>{
    res.redirect('/success');
};