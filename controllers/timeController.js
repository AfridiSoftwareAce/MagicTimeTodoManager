// timeController.js

// Import necessary utility functions for time validation and magic time checking
const isValidTime = require('../utils/timeValidator');
const isMagicalTime = require('../utils/magicChecker');

// Controller function to find magical times within a given time range
exports.findMagicalTimes = (req, res) => {
    const { startTime, endTime } = req.body;

    // Validate the time format
    if (!isValidTime(startTime) || !isValidTime(endTime)) {
        // If the time format is invalid, return a 400 Bad Request with an error message
        return res.status(400).json({
            status: 'error',
            message: 'Invalid time format.',
            data: null
        });
    }

    // Check if endTime is before startTime
    const start = new Date(`1970-01-01T${startTime}Z`);
    const end = new Date(`1970-01-01T${endTime}Z`);

    if (end < start) {
        // If endTime is before startTime, return a 400 Bad Request with an error message
        return res.status(400).json({
            status: 'error',
            message: 'End Time cannot be before Start Time.',
            data: null
        });
    }

    let results = [];
    let currentTime = new Date(start);

    // Loop through each second within the time range
    while (currentTime <= end) {
        if (isMagicalTime(currentTime.toISOString().substr(11, 8))) {
            // If the current time is magical, add it to the results array
            results.push(currentTime.toISOString().substr(11, 8));
        }
        // Move to the next second
        currentTime.setSeconds(currentTime.getSeconds() + 1);
    }

    // Return a JSON response with the list of magical times
    res.json({
        status: 'success',
        message: 'Magical times fetched successfully.',
        data: results
    });
};
