/**
 * Created by Administrator on 2017/12/4.
 */
var http = require("http");
var fs = require("fs");
var server = http.createServer();
server.on("request",function (resquest,response) {
    console.log("请求成功");
    fs.readFile("./index.txt","utf8", function (err,data) {
        response.end(data);
    });

});
server.listen(3000, function () {
    console.log("服务器已开启");
});