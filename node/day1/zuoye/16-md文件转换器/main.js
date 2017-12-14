const fs = require("fs");
const http = require("http");
const marked = require("marked");


//读取文件
const getFile = function (get, set) {
    fs.readFile(get, "utf8", function (err, data) {
        if (err) {
            console.log("读取文件失败");
            return false;
        }
        //读取正确之后写入文件
        fs.writeFile(set, marked(data), function (err) {
            if (err) {
                console.log("写入文件失败");
                return false;
            }
            console.log("恭喜你，转入成功");
        })
    });
};
//监视文件变化
fs.watchFile("./REAMDME.md", {
    interver: 500
}, function () {
    getFile("./REAMDME.md", "./index.html");
});

//开启服务器
const server = http.createServer();
server.on("request", function (request, response) {
    fs.readFile("./index.html","utf8", function (err, data) {
        if (err) {
            return console.log("上传文件失败");
        }
        response.end(data);
    })
});
server.listen(3000, function () {
    console.log("开启服务器成功");
});