/**
 * Created by Administrator on 2017/12/2.
 */
var flag = true;
$(".header-l").on("click", function () {
    if(flag){
        $(".com-l").hide();
        $(".com-r").css("padding","10px 10px 20px 10px");
        $(".header-l").css("position","fixed");
        flag = false;
    }else{
        $(".com-l").slideDown(1000);
        $(".com-r").css("padding","10px 10px 20px 190px");
        $(".header-l").css("position","");
        flag = true;
    }
});