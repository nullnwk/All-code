/**
 * Created by Administrator on 2017/10/13.
 */
$.fn.myShow= function () {
    $(this).mouseenter(function () {
        $(this).css("opacity","1").siblings("li").css("opacity",".5");
    });
};
$.fn.myHide = function () {
    $(this).mouseleave(function () {
        $(this).find("li").css("opacity","1");
    });
};