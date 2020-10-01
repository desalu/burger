const mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "12345678",
  database: "burger_db"
});

connection.connect((err)=> {
  if (err) {
    console.error("error connecting " + err.stack );
  }
  console.log(`${connection.state} as id: ${connection.threadId}`);
});

module.exports = connection;