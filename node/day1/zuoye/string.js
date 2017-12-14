/**
 * Created by Administrator on 2017/12/4.
 */
var fs = require("fs");

function getFile() {
    fs.readFile("index.txt","utf8", function (err,data) {
        if(err){
            console.log("读取失败");
            return false;
        }
        fs.writeFile("index.html",data, function () {
            console.log("写入成功");
        })
    });
}
fs.watchFile("index.txt",{
    interval:500
},function () {
    getFile();
});

