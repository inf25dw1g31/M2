const mysql = require('mysql2');

/*const connection = mysql.createConnection({
    host: 'mysql',
    user: 'root', 
    password: '12345678', 
    database: 'car4me',
});
*/
const connection = mysql.createConnection({
  host: process.env.DB_HOST, // mysql
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


connection.connect((err) => {
  if (err) {
    console.log('Error on database connection.');
    throw err;
  }
  console.log('Database connection active.');
});

module.exports = connection;