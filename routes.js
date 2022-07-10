const posts = require('./src/posts');
const users = require('./src/users');
const authors = require('./src/authors');

module.exports = app => {

  app.get('/', (req, res) => {res.send('Olá pessoa!')});
  
  posts.rotas(app);
  users.routes(app);
  authors.authorsRoutes(app);
};