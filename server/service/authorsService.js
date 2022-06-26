const authorsData = require('../data/authorsData');

exports.getAuthors = () => {
    return authorsData.getAuthors();
};

exports.getAuthor = (id) => {
    return authorsData.getAuthor(id);
};

exports.saveAuthor = (author) => {
    return authorsData.saveAuthors(author);
};

exports.deleteAuthor = (id) => {
    return authorsData.deleteAuthor(id);
};

exports.updateAuthor = (id, author) => {
    return authorsData.updateAuthor(id, author);
};