const express = require('express');

const router = express.Router();


const adminController = require('../controllers/admin.controller');

router.get('/add-product',adminController.getadmincontroller);

router.post('/product',adminController.postadmincontroller);

module.exports = router;