const express = require('express');

const router = express.Router();

const shopControllers = require('../controllers/shop.controller');


router.get('/',shopControllers.shopcontroller);
module.exports = router;