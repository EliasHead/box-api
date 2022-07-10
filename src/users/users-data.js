const db = require('../infra/database');
const { InternalServerError } = require('../erros');
const users = require('.');

exports.addUser = (user) => {
    return db.one('insert into api.users (name, password, email) values ($1, $2, $3) returning *', [user.name, user.passwordHash, user.email]);
},

exports.listUsers = () => {
    return db.query('select * from api.users');
},

exports.searchById = (id) => {
    return db.oneOrNone(
      `SELECT * FROM api.users WHERE id = $1`, [id]
    )
},

exports.searchByEmail = (email) => {
    return db.oneOrNone(
      `SELECT * FROM api.users WHERE email = $1`, [email]
    )
},

exports.deleteUser = (user) => {
    return db.none('delete from api.users where id = $1', [user.id]);
};
    
  