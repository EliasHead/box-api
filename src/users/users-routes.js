const usersController = require('./users-controller');
const middlewaresAuthetication = require('./middlewares-authentication');

module.exports = app => {
    app
        .route('/user/login')
        .post(
            middlewaresAuthetication.local, 
            usersController.login
        );
    
    app
        .route('/users')
        .post(usersController.add)
        .get(usersController.list);
    
    app
        .route('/user/:id')
        .delete(
            middlewaresAuthetication.bearer,
            usersController.delete)
}