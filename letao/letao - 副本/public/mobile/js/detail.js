/**
 * Created by Administrator on 2017/11/30.
 */

$(function () {
    var url = new URLSearchParams(location.search);
    var id = url.get("id");
    detail(id);

    var urlSearch = location.href;
    var str = urlSearch.substr(urlSearch.lastIndexOf("?")+1);
    var arr = str.split("&");

    // var arr3 = arr2.split("=");
    // var obj = {};
    // console.log(arr);
    // for(var i=0; i<arr.length; i++){
    //     var arr1 = arr[i].split("=");
    //     obj[arr1[0]] = arr1[1];
    // }
    // console.log(obj);
    // console.log(obj.id);
    // console.log(obj.num);
    // // console.log(arr);
    // $(".jianshu").val(obj.size);
    // $(".asd").html(obj.num);


// 添加到购物车
    //点击product-size下面的span，添加样式
    $(".mui-content").on("click", " .product-size span", function () {
        $(".mui-content .product-size span").removeClass("activee");
        $(this).addClass("activee");

    });
    //数量
    var num = 0;
    $(".mui-content").on("click", ".product-number .jian", function () {
            num--;
        $(".lt-detail .product-number input").val(num);
    })
    $(".mui-content").on("click", ".product-number .jia", function () {
        num++;
        $(".lt-detail .product-number input").val(num);
    });

    //加入购物车
    $(".add-cart").on("click", function () {
        //判断有没有选择尺码
        if($(".lt-detail .product-number input").val() <=0){
            $(".show").html("亲，您还没有选择 数量 哦");
            $(".show").animate({"display":"block"},1000,function () {
                $(".show").animate({"display":"none"},1000);
            });
            return false;
        }
        if($(".mui-content .product-size span").hasClass("activee") == false){
            $(".show").html("亲，您还没有选择 尺码 哦");
            $(".show").animate({"display":"block"},1000,function () {
                $(".show").animate({"display":"none"},1000);
            });
            return false;
        }
        var productid = id;
        var size = $(".lt-detail .product-number input").val();
        var num = $(".mui-content .product-size span").html();

        if($(".lt-detail .product-number input").val() > 0 && $(".mui-content .product-size span").hasClass("activee") == true){
            shopping(productid,size,num);
        }

    });
});
//动态添加页面内容
var detail = function (id) {

    $.ajax({
        type: "get",
        url: '/product/queryProductDetail',
        data: {
            id: id
        },
        success: function (data) {
            // console.log(data);
            var temp = template("detail", data);
            $(".mui-content").html(temp);

            var size = data.size;
            var pliceSize = size.split("-");
            // console.log(pliceSize);
            var start = pliceSize[0];
            var end = pliceSize[1];
            var obj = {
                start: start,
                end: end
            };
            console.log(obj);
            var temp1 = template("count", obj);
            $(".product-size").append(temp1);


            // 轮播图
            var gallery = mui('.mui-slider');
            gallery.slider({
                interval: 2000//自动轮播周期，若为0则不自动播放，默认为0；
            });
        }
    })
};

//加入购物车
var shopping = function (id, size, num) {
    $.ajax({
        type: "post",
        url: "/cart/addCart",
        dataTaye: "json",
        data: {
            productId: id,
            size: size,
            num: num
        },
        success: function (data) {
            console.log(data);
            if(data.error == 400){
                location.href = "../user/register.html?returnUrl="+location.href+"&size="+size+"&num="+num;
            }
            if(data.success == true){
                location.href = "../shopping.html";
            }


        }
    });
};








