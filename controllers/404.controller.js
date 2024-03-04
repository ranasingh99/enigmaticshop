const path = require('path');

const rootDir = require('../util/path');

exports.errorpagecontroller = (req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));

};