function f1() {
  setTimeout(function () {
    data = 123;
    return function () {
    var f2 = function () {
        return data;

      }
    }
  }, 1000)
}
const res = f1();
console.log(res);