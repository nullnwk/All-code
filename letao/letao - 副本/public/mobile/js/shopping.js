/**
 * Created by Administrator on 2017/11/26.
 */
//滑动效果
$(function () {
    // var myScroll = new IScroll('#wrapper');
    mui('.mui-scroll-wrapper').scroll({
        scrollY: true, //是否竖向滚动
        scrollX: false, //是否横向滚动
        startX: 0, //初始化时滚动至x
        startY: 0, //初始化时滚动至y
        indicators: true, //是否显示滚动条
        deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
        bounce: true //是否启用回弹
    });


//长按

    $(".commentBox").on("longTap",".com-box", function () {
        $(".zhezhao").css("display","block");
        $(this).children().eq(0).addClass("active");
        //点击删除，删除购物车中内容
        $(".removeComBox").on("click", function () {
            var id = $(this).attr("data-id");
            removeShopping(id);
            getShopping();
        });
        //点击body隐藏模态框
        var that = $(this);
        $("body").on("click", function () {
            $(".zhezhao").css("display","none");
            that.children().eq(0).removeClass("active");
        })
    });
    //点击cheBox，里面的i显示;
    var flag = true;
    $(".commentBox").on("click",".cheBox", function () {
        if(flag){
            $(this).children().eq(0).css("opacity","1");
            var cost = $(this).next().next().children("p.price").children("i").html();
            var cost1 = Number($(".term").html())+Number(cost);
            $(".term").html(cost1);
            flag = false;
        }else {
            $(this).children().eq(0).css("opacity","0");
            var cost = $(this).next().next().children("p.price").children("i").html();
            var cost1 = Number($(".term").html());
            $(".term").html(cost1-Number(cost));
            flag = true;
        }
    });
    getShopping();
});

//查询购物车
var getShopping = function () {
    $.ajax({
        type: 'get',
        url: '/cart/queryCart',
        data: {},
        success: function (data) {
            console.log(data);
            var cartList = template("getShopping", {list: data});
            $(".commentBox").html(cartList);

        }

    })
};
//删除购物车
var removeShopping = function (id) {
    $.ajax({
        type:"get",
        url:"/cart/deleteCart",
        data:{
            id:id
        },
        success:function (data) {
            console.log(data);
        }
    })
};
