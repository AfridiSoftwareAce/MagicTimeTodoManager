// Validates the format of a given time string.
//  *
//  * This function uses a regular expression to validate whether the input
//  * time string is in the HH:mm:ss format, where HH is hours (00-23),
//  * mm is minutes (00-59), and ss is seconds (00-59).


function isValidTime(time) {
    return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(time);
}

module.exports = isValidTime;
