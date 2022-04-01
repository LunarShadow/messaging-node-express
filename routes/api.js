const express = require('express');
const router = express.Router();
const apiController = require('../api/index')

router.get('/', apiController.testing)

module.exports = router