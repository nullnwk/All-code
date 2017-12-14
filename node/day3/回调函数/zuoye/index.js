const fs = require("fs");

let todosUrl = "./todos.json";
let todosNewUrl = "./todosNew.json";

// // 获取数组
const getTodos = function (callback) {
  fs.readFile(todosUrl, "utf-8", function (err, data) {
    if (err) {
      return callback(err);
    }
    data = JSON.parse(data).todos;
    callback(null, data);
  })
}
getTodos(function (err, data) {
  if (err) {
    return console.log("错误");
  }
  console.log(data);
});

// // copy
// const copy = function (todosUrl, todosNewUrl, callback) {
//   fs.readFile(todosUrl, "utf-8", function (err, data) {
//     if (err) {
//       return callback(err);
//     }
//     fs.writeFile(todosNewUrl, data, function (err) {
//       if (err) {
//         return callback(err);
//       }
//       callback(null);
//     })
//   })
// }

// copy(todosUrl, todosNewUrl, function (err) {
//   if (err) {
//     return console.log("错误");
//   }
// })


// 请帮我写一个方法，调用该方法可以帮我把指定的数据存储到 json 文件中的 todos 中。例如：
// addTodo
// const addTodo = function (add, callback) {
//   fs.readFile(todosUrl, "utf-8", function (err, data) {
//     if (err) {
//       return callback(err);
//     }
//     data = JSON.parse(data);
//     data.todos.push(add);
//     fs.writeFile(todosUrl, JSON.stringify(data, null, 2), function (err) {
//       if (err) {
//         return callback(err);
//       }
//       callback(null);
//     })
//   })
// }

// addTodo("weder", function (err) {
//   if (err) {
//     return console.log("错误");
//   }
//   console.log("正确");
// })