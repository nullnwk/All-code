// 核心模块
const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
// 第三方模块
const mime = require("mime");
const artTemplate = require("art-template");
// 用户模块
const com = require("./comments");

// 创建服务器
http.createServer(function (req, res) {
  // 获取请求url地址
  const url = req.url;
  // 获取请求的method是post还是get
  const method = req.method.toLowerCase();
  if (method === 'get' && url === "/") {
    fs.readFile("./views/index.html", "utf-8", function (err, data) {
      if (err) {
        return res.end("404 Not Found");
      }
      com.read(function (err, dbdata) {
        if (err) {
          return res.end("404 Not Found");
        }
        res.setHeader("Content-Type", "text/html; charset= utf-8");
        const htmlStr = artTemplate.render(data.toString(), {
          comments: dbdata
        })
        res.end(htmlStr);
      })
    })
  } else if (method === 'get' && url === '/fabiao') {
    fs.readFile("./views/fabiao.html", "utf-8", function (err, data) {
      if (err) {
        return res.end("404 Not Found");
      }
      res.setHeader("Content-Type", "text/html; charset= utf-8");
      res.end(data);
    })
  } else if (method === 'get' && (url.startsWith('/public/') || url.startsWith('/node_modules/'))) {
    // 要考虑是相对路径还是绝对路径，加上点变为相对路径
    let urlPath = `.${url}`; //写错会添加不上样式
    fs.readFile(urlPath, "utf-8", function (err, data) {
      if (err) {
        return res.end("404 Not Found");
      }
      res.setHeader("Content-Type", mime.getType(urlPath));
      res.end(data);
    })
  } else if (method === 'post' && url === '/fabiao') { //不能写./，写了就成相对路径了
    // 接收POST数据，
    let str = "";
    req.on("data", function (chunk) {
      str += chunk;
    })
    req.on("end", function () {
      //接收完成，转为对象，保存到数组中
      let arrData = queryString.parse(str);
      console.log(arrData);
      // 校验客户端提交的信息
      if (!arrData.name || !arrData.name.length) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        return res.end("name不能为空");
      }
      if (!arrData.play || !arrData.play.length) {
        return res.end("留言不能为空");
      }
      //将表单中的文件存到数组中
      // 把文件放到db.json中,先读取，然后添加进数组，最后再放到db.json中
      com.save(arrData, function (err, data) {
        if (err) {
          return res.end('404 Not Found.');
        }
        res.statusCode = 302;
        res.setHeader("location", "/");
        res.end(); //不管有没有响应内容，都要响应
      })
    })
  } else {
    res.end('404 Not Found.')
  }
}).listen(3000, function () {
  console.log("running...")
})