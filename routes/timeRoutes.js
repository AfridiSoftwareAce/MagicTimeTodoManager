const express = require('express');
const Router = express.Router();
const timeController = require('../controllers/timeController');

Router.post('/find-magical-times', timeController.findMagicalTimes);

module.exports = Router;
