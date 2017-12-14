
//读取文件
var fs = require("fs");
var marked = require("marked");
var http = require("http");
function getFile(read,write) {
  fs.readFile(read, "utf-8", (err,data)=> {
    if(err){
      console.log("读取文件失败");
      return false;
    }
    console.log("读取文件成功");
    var strHtml = marked(data);
    fs.writeFile(write,strHtml, err=> {
      if(err){
        console.log("写入失败");
        return false;
      }
      console.log("写入成功");
    })
  });
}
//监听文件
fs.watchFile("./REAMDME.md",{
  interve:500
}, function () {
  getFile("./REAMDME.md","./index.html");
});

var server = http.createServer();
server.on("request",(request,response)=> {
  fs.readFile("./index.html",(err,data)=> {
    if(err){
      console.log("请求失败");
      return false;
    }
    response.end(data);
  })
});
server.listen(3000, ()=> {
  console.log("服务器已开启");
});