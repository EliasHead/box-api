const authorsData = require('../data/authorsData');

exports.getAuthors = function () {
    return authorsData.getAuthors();
}
