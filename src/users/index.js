module.exports = {
    routes: require('./users-routes'),
    controlller: require('./users-controller'),
    model: require('./users-model'),
    estrategiasAutenticacao: require('./estrategia-autenticacao'),
    middlewaresAutentication: require('./middlewares-authentication')
  }