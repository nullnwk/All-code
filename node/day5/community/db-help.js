const mysql = require("mysql");
const config = require("./config");
//配置mysql
exports.query = () =>{
  //初始化配置数据库
  var connection = mysql.createConnection(Object.assign(config.db_connection, {}))
  // 开启连接
  connection.connect()
  connection.query(...arguments);
  // 关闭连接
  connection.end()
}