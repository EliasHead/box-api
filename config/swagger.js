module.exports = {
    info: {
      version: '1.0.0',
      title: 'API Rest',
      description: 'Documentação da API REST Projeto Tech Management',
    },
    host: 'localhost:3005',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
      JWT: {
        description: 'JWT token',
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
      },
    },
    definitions: {
    },
  };
  