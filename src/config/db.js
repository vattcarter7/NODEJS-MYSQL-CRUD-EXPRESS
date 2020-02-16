const mysql = require("mysql");

const db = mysql.createPool({
  host: process.env.NODE_ENV = 'development' ? 'localhost' : process.env.HOST,
  user: process.env.NODE_ENV = 'development' ? 'root' : process.env.USER,
  password: process.env.NODE_ENV = 'development' ? 'sopheak1234' : process.env.DATABASE_PASSWORD,
  database: process.env.NODE_ENV = 'development' ? 'companymysqldb' : process.env.DATABASE_NAME
});

module.exports = db;