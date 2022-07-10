const db = require('../infra/database');

exports.getPosts = () => {
  return db.query('select * from api.posts');
};

exports.getAuthor = (id) => {
  return db.oneOrNone('select * from api.authors where id = $1', [id]);
};

exports.savePost = (post) => {
  return db.one('insert into api.posts (titulo, conteudo, author_id) values ($1, $2, $3) returning *', [post.titulo, post.conteudo, post.author_id]);
};

exports.updateAuthor = (id, author) => {
  return db.none('update api.authors set name = $1, picture = $2 where id = $3', [author.name, author.picture, id]);
};

exports.deleteAuthor = (author) => {
  return db.none('delete from api.authors where id = $1', [author.id]);
};