const express = require('express');

const router = express.Router();

const successController = require('../controllers/success.controller');
router.get('/success',successController.successformcontroller);

module.exports = router;