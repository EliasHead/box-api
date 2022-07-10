const postsControlador = require('./post-controlador');
const { middlewaresAutentication } = require('../users');

module.exports = app => {
  app
    .route('/posts')
    .get(postsControlador.lista)
    .post(
      middlewaresAutentication.bearer,
      postsControlador.adiciona
    );
};