/**
 * Created by Administrator on 2017/11/28.
 */
var myScroll = new IScroll('#wrapper');


//一级菜单渲染
var firstMenu = function () {
    $.ajax({
        url:"/category/queryTopCategory",
        data:{},
        type:"get",
        success:function (data) {
            // console.log(data);
            var firstMenu = template("first",data);
            $('.left ul').html(firstMenu);
            //获取id,为二级菜单渲染做铺垫
            var firstId = data.rows[0].id;
            console.log(data);
            secondMenu(firstId)

        }
    })
};
firstMenu();

//二级菜单渲染
var secondMenu = function (id) {
    $.ajax({
        url:"/category/querySecondCategory",
        data:{id:id},
        type:"get",
        success:function (data) {
            console.log(data);
            var secondMenu = template("second",data);
            $('.brand ul').html(secondMenu);
        }
    })
};

$(".left ul").on("tap","a", function () {
    $(".left ul a").removeClass("active");
    $(this).addClass("active");
    var firstId = $(this).attr("data-id");
    secondMenu(firstId);
});


















