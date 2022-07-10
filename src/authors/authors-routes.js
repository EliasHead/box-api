const authorsController = require('./authors-controller');
const { middlewaresAutentication } = require('../users');

module.exports = app => {
  app
    .route('/authors')
    .get(authorsController.lista)
    .post(
      middlewaresAutentication.bearer,
      authorsController.adiciona
    )

  app
    .route('/authors/:id')
    .delete(
      middlewaresAutentication.bearer,
      authorsController.delete
    )
    .patch(
      middlewaresAutentication.bearer,
      authorsController.update
    )
};