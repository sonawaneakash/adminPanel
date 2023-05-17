var conn ={

  host: 'localhost',

  user: 'user', /* MySQL User */

  password: 'password', /* MySQL Password */

  database: 'productdata' /* MySQL Database */

};
var mysql =  require('mysql');
const connection = mysql.createConnection({
  host: conn.host,
  user: conn.user,
  password: conn.password,
  database: conn.datbase 
});
 
// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;