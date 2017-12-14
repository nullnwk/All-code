// 核心模块
var path = require('path');
// 第三方模块
var express = require('express');
const artTL = require("art-template");
const artTemplate = require('express-art-template');
const bodyParser = require("body-parser");
const session = require("express-session");

// 自定义模块
const routes = require("./routes");
const config = require("./config");


// 实例化
var app = express();

// 配置使用模板引擎
app.engine("html", artTemplate);

// 设置bodyParser
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// 存 Session
//   req.session.xxx = xxx
// 取 Session
//   req.session.xxx
// 配置session
app.use(session({
  secret: 'itcast',
  resave: false,
  saveUninitialized: true
}))

//开放静态资源
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')));
app.use('/public/', express.static(path.join(__dirname, './public/')));






// 加载使routes生效
app.use(routes);
app.listen(config.port, () => console.log("running..."))