const swaggerAutogen = require('swagger-autogen')();
const doc = require('../config/swagger.js');

const outputFile = './src/swagger_documentation.json';
const endpoints = ['routes.js', './src/users/users-routes.js', './src/authors/authors-routes.js', './src/posts/posts-rotas.js'];

swaggerAutogen(outputFile, endpoints, doc);