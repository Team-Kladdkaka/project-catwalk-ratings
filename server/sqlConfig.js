/* eslint-disable no-undef */
const mysql = require('mysql');
const Promise = require('bluebird');
const database = 'CatwalkRatings';
const connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  dialect: 'mysql'
});

const db = Promise.promisifyAll(connect, {multiArgs: true});

db.connectAsync()
  .then(() => db.queryAsync(`USE ${database}`));

module.exports = db;



