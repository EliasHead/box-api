const authorsData = require('../data/authorsData');

exports.getAuthors = function () {
    return authorsData.getAuthors();
}

exports.saveAuthor = (author) => {
    return authorsData.saveAuthors(author);
}

exports.deleteAuthor = (author) => {
    return authorsData.deleteAuthor(author);
}