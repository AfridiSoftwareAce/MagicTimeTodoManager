function isMagicalTime(time) {
    // Remove colons and find unique digits in the time
    const uniqueDigits = [...new Set(time.replace(/:/g, ''))];

    // Check if the number of unique digits is at most 2
    return uniqueDigits.length <= 2;
}

// Export the function to be used in other modules
module.exports = isMagicalTime;