/**
 * Created by Administrator on 2017/12/4.
 */
var fs = require("fs");
fs.readFile("01index.js","utf8", function (err,data) {
    console.log(data);
});
fs.writeFile("01index.js","zxcvbafd", function (err,data) {
    console.log(fs);
});
fs.appendFile("01index.js","123456", function (err,data) {
    console.log(data);
});
