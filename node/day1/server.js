/**
 * Created by Administrator on 2017/12/4.
 */
var http = require("http");
var fs = require("fs");
var server = http.createServer();
server.on("request", function (request, response) {
    console.log("收到客户端请求");
    fs.readFile("./02index.js",function (err,data) {
        response.end(data);
    });

});
server.listen(3000, function () {
    console.log("服务器启动");
});