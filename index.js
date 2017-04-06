const uniqueRandomArray = require('unique-random-array');
const peaks = require('./peaks.json');

exports.all = peaks;
exports.random = uniqueRandomArray(peaks);
