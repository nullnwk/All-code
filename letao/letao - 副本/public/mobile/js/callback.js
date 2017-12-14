/**
 * Created by Administrator on 2017/11/26.
 */
var headerCallback = document.querySelector(".lt-header a:first-child");
headerCallback.addEventListener("click", function () {
    window.history.go(-1);
});
