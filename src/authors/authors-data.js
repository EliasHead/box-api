const db = require('../infra/database');

exports.getAuthors = () => {
  return db.query('select * from api.authors');
};

exports.getAuthor = (id) => {
  return db.oneOrNone('select * from api.authors where id = $1', [id]);
};

exports.saveAuthors = (author) => {
  return db.one('insert into api.authors (name, picture) values ($1, $2) returning *', [author.name, author.picture]);
};

exports.updateAuthor = (id, author) => {
  return db.none('update api.authors set name = $1, picture = $2 where id = $3', [author.name, author.picture, id]);
};

exports.deleteAuthor = (author) => {
  return db.none('delete from api.authors where id = $1', [author.id]);
};