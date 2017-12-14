function $() {
  console.log("f1被调用了");
}

$.get = function () {
  console.log("get被调用了");
}
$.post = function () {
  console.log("post被调用了");
}

module.exports = $;
module.exports = function{
   console.log("f1被调用了");
}

f1();
f1.name;