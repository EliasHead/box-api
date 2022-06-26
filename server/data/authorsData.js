const db = require('../infra/database');

exports.getAuthors = function () {
  return db.query('select * from author');
};

exports.getAuthor = (id) => {
  return db.oneOrNone('select * from author where id = $1', [id]);
};

exports.saveAuthors = (author) => {
  return db.one('insert into author (name, picture) values ($1, $2) returning *', [author.name, author.picture]);
};

exports.updateAuthor = (id, author) => {
  return db.none('update author set name = $1, picture = $2 where id = $3', [author.name, author.picture, id]);
};

exports.deleteAuthor = (id) => {
  return db.none('delete from author where id = $1', [id]);
};