/**
 * Created by Administrator on 2017/12/4.
 */
const fs =  require('fs');
// fs.open("./index.txt", function (err,data) {
//     console.log(data);
// });
// //读取文件
// fs.readFile("./index.txt","utf8",(err, data)=> {
//     console.log(data.toString());
// })
// 写入文件
// fs.writeFile("./ind.txt",'ffdgdfgdffgcd  ',function (err) {
//     if(err){
//         console.log("写入失败");
//     }else{
//         console.log("写入成功");
//     }
// });
// 文件内添加内容
fs.appendFile("./it","nbnjmnbc",function (err) {
    if(err){
        console.log("写入失败");
    }else{
        console.log("写入成功");
    }
});