const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const adminRouter = require('./routes/admin.route');
const shopRouter = require('./routes/shop.route');
const errRouter = require('./routes/404.route');
const contactRouter = require('./routes/contact.route');
const successRouter = require('./routes/success.route');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRouter);
app.use(shopRouter);
app.use(contactRouter);
app.use(successRouter);
app.use(errRouter);






app.listen(3500,()=>{
    console.log('server is running.......')
})