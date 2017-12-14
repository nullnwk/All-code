/**
 * Created by Administrator on 2017/11/28.
 */
var myScroll = new IScroll('#wrapper');



//一级菜单渲染
var firstMenu = function () {
    // 发送ajax请求，获取数据
    $.ajax({
        type:'get',
        url:"/category/queryTopCategory",
        data:{},
        success: function (data) {
            var firstMenu = template("first-menu",data);
            $('.left ul').html(firstMenu);
            var firstId = data.rows[0].id;
            secondMenu(firstId);
        }
    })
};
firstMenu();



//二级菜单渲染
var secondMenu = function (id) {
    //发送ajax请求
    $.ajax({
        type:'get',
        url:"/category/querySecondCategory",
        data:{id:id},
        success: function (data) {
            console.log(data);
            var secondMenu = template("second-menu",data);
            $('.brand ul').html(secondMenu);
            // console.log(secondMenu);
        }
    })
};

//获取元素，添加事件
$(".left ul").on("click","a", function () {
    $(".left ul").find("a").removeClass("active");
    $(this).addClass("active");
    var firstId = $(this).attr("data-id");
    secondMenu(firstId);
});