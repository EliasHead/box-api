const db = require('../infra/database');

exports.getAuthors = function () {
  return db.query('select * from author')
};
