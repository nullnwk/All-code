var express = require('express');
const validator = require("validator");
const dbHelp = require("../db-help");

var router = express.Router();


router.get("/", (req, res)=> {
  res.render("index.html");
})
router.get('/login', (req, res) => {
  res.render('login.html')
})
router.get('/register', (req, res) => {
  res.render('register.html')
})

router.post("/register", (req, res) => {
  // 简单验证
  const body = req.body;
  console.log(body);
  if (!body.email || validator.isEmpty(body.email) || !validator.isEmail(body.email)) {
    return res.json({
      code: 404,
      success: 'email invalid'
    })
  }
  if (!body.nickname || validator.isEmpty(body.nickname) || validator.isEmail(body.nickname)) {
    return res.json({
      code: 404,
      success: 'nickname invalid'
    })
  }
  // 业务验证
  dbHelp.query("SELECT * FROM users WHERE email=?", [body.email], function (err, data) {
    if (err) {
      return console.log("操作错误");
    }
    if (data[0]) {
      return res.json({
        code: 1,
        message: "邮箱已存在"
      })
    }
  })
  dbHelp.query("SELECT * FROM users WHERE nickname=?" [body.nickname], function (err, data) {
    if (err) {
      return console.log("操作错误");
    }
    if (data[0]) {
      return res.json({
        code: 2,
        messige: "昵称已存在"
      })
    }
  })
  // 通过验证
  dbHelp.query("insert into users set?", {
    id:null,
    email: body.email,
    nickname: body.nickname,
    password: body.password,
    avatar: "avatar-max-img.png",
    createdAt: new Date,
    updatedAt: new Date,
  }, function (err, data) {
    if (err) {
      return res.json({
        code: 500,
        messige: `Server Error: ${err.message}`
      })
    }
    // 在登录之前，在session中存储用户的登录状态
    req.session.isLogin = true;
    res.json({
      code: 0,
      messige: "ok"
    })
  })







})

module.exports = router;