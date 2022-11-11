const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  port: process.env.MYSQL_PORT,
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'StoreManager',
  // user: 'root',
  // password: 'password',
  // database: 'StoreManager',
});

module.exports = connection;