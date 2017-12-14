const http = require("http");
const fs = require("fs");

const server = http.createServer();
server.on("request", function (req, res) {
  const url = req.url;
  console.log(url);
  if (url === "/") {
    fs.readFile('./http/index.html',"utf-8", function (err, data) {
      if (err) {
        return res.end("404");
      }
      res.setHeader("Content-Type","text/html; charset=utf-8");
      res.end(data);
    })

  }

});
server.listen(3000, function () {
  console.log("开启服务器");
});