/**
 * Created by Administrator on 2017/12/4.
 */
var http = require("http");
var server = http.createServer();
server.on("request", function (request,response) {
    console.log("收到用户请求");
    response.end("sdfsdsdf")
});
server.listen(3000,function () {
    console.log("服务器开启");
});