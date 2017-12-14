const mysql = require("mysql");

// 创建一个connection
var connection = mysql.createConnection({
  host:"127.0.0.1",
  user:"root",
  password:"root",
  port:"3306",
  database:"letao"
})

connection.query("SELECT * FROM USER",function(err,rows,fields){
  if(err){
    return console.log("错误");
  }
  console.log(rows[0]);
})