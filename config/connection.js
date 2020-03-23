// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "ko86t9azcob3a2f9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "shw6rwp4ov5owukk",
  password: "s7jh116weq8tqr1c",
  database: "nq5upnezu6wegs52"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// // Export connection for our ORM to use.
 module.exports = connection;

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: 
//   database: "burgers_db"
// });

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });
