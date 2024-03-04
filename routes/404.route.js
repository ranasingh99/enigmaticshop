const express = require('express');

const router = express.Router();

const errorController = require('../controllers/404.controller');

router.use(errorController.errorpagecontroller);

module.exports = router;