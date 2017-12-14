const fs = require("fs");

let url = "./db.json";

// 读取文件
exports.read = function (callback) {
  fs.readFile(url, "utf-8", function (err, dbdata) {
    if (err) {
      return callback(err);
    }
    //转为对象，存到数组
    dbdata = JSON.parse(dbdata.toString()).comments;
    callback(null, dbdata);
  })
}

//读取文件，添加到db.json
exports.save = function (bodyData, callback) {
  fs.readFile(url, "utf-8", function (err, dbdata) {
    if (err) {
      return callback(err);
    }
    //转为对象，存到数组
    dbdata = JSON.parse(dbdata.toString());
    bodyData.id = dbdata.comments[dbdata.comments.length - 1].id + 1;
    dbdata.comments.push(bodyData);
    //把文件重新写入db.json中,需要转成字符串
    fs.writeFile(url, JSON.stringify(dbdata, null, 2), function (err) {
      if (err) {
        return callback(err);
      }
      callback(null);
    })
  })



}