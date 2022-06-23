const pgp = require('pg-promise')();
const db = pgp('postgres://admin:admin@localhost:5432/fastapi')

module.exports = db;