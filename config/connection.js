const mysql = require('mysql');

var connection = mysql.createConnection({
  host: "us-cdbr-east-02.cleardb.com",
  port: 3306,
  user: "b4e892e77a6afe",
  password: "211a835d",
  database: "heroku_1f6ae6f610d5e49"
});

connection.connect((err)=> {
  if (err) {
    console.error("error connecting " + err.stack );
  }
  console.log(`${connection.state} as id: ${connection.threadId}`);
});

module.exports = connection;