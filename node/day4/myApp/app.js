var express = require('express');
var expressArtTemplate = require("express-art-template");
const bodyParser = require('body-parser');

var com = require('./routes/comments');

//创建实例app
var app = express();

//开放静态资源
app.use("/node_modules/", express.static("./node_modules/"));
app.use("/public/", express.static("./public/"));

//配置art-template模板，运行模块
app.engine("html", expressArtTemplate);

//配置使用 body-parser 插件
//该插件会把请求体数据解析到 req.body 中
//也就是我们可以直接在后面的请求处理方法中通过访问 req.body 来获取表单 post 请求体数据
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())


// 请求对应处理函数
app.get("/", (req, res) => {
  com.read((err, comments) => {
    if (err) {
      return res.send("404")
    }
    res.render("index.html", {
      comments
    });

  })

})
app.get("/fabiao", (req, res) => {
  res.render("./fabiao.html"); //自动从view中找
})
app.post("/fabiao", (req, res) => {
  let body = req.body;
  console.log(body);
  if (!body.name || !body.name.length) {
    return res.send("name invalid");
  }
  if (!body.play || !body.play.length) {
    return res.send("play invalid");
  }
  com.save(body, (err) => {
    if (err) {
      return res.send("500 Server Error");
    }
    // 重定向会自动结束响应
    res.redirect('/')
  })
})
app.listen(3000, () => {
  console.log("running");
})