const db = require('../infra/database');

exports.getAuthors = function () {
  return db.query('select * from author')
};


exports.saveAuthors = (author) => {
  return db.one('insert into author (name, picture) values ($1, $2) returning *', [author.name, author.picture]);
}

exports.deleteAuthor = (id) => {
  return db.none('delete from author where id = $1', [id]);
}
