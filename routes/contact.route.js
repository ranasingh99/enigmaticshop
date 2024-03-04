const express = require('express');

const router = express.Router();

const contactControllers = require('../controllers/contact.controller');


router.get('/contact-us',contactControllers.getcontactformcontroller);
router.post('/contact-detail',contactControllers.postcontactformcontroller);
module.exports = router;

