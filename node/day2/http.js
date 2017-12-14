const http = require("http");
const fs = require("fs");
const server = http.createServer();
server.on("request", function (request, response) {
  const url = request.url;
  console.log(url)
  if (url === '/') {
    fs.readFile("./http/index.html", "utf-8", function (err, data) {
      if (err) {
        return response.end('404 Not Found.');
      }
      response.setHeader("Content-Type","text/html; charset=utf-8");
      response.end(data);
    })
  } else if (url === '/index.css') {
    fs.readFile("./http/css.css", "utf-8", function (err, data) {
      if (err) {
        return response.end('404 Not Found.');
      }
      response.end(data);
    })
  }





});
server.listen(3000, function () {
  console.log("开启服务器");
})