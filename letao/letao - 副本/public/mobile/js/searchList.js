mui('.mui-scroll-wrapper').scroll({
    scrollY: true, //是否竖向滚动
    scrollX: false, //是否横向滚动
    startX: 0, //初始化时滚动至x
    startY: 0, //初始化时滚动至y
    indicators: true, //是否显示滚动条
    deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
    bounce: true //是否启用回弹
});


$(function () {
    var url = new URLSearchParams(location.search);
    var key = url.get("key");
    $(".code .inputHis").val(key);
    result(1, 4, key);
    //价格：升序降序
    var flag = true;
    $('.lt-list .lt-order [data-type="price"]').on("click", function () {
        $('.lt-list .lt-order a').removeClass("activee").find('span').removeClass("fa-angle-up").addClass("fa-angle-down");
        $(this).addClass("activee");
        if (flag) {
            result(1, 4, key, 1);
            $(this).find('span').addClass("fa-angle-up");
            $(this).find('span').removeClass("fa-angle-down");
            flag = false;
        } else {
            result(1, 4, key, 2);
            $(this).find('span').removeClass("fa-angle-up");
            $(this).find('span').addClass("fa-angle-down");
            flag = true;
        }
    });
    //销量排序
    $('.lt-list .lt-order [data-type="num"]').on("click", function () {
        $('.lt-list .lt-order a').removeClass("activee").find('span').removeClass("fa-angle-up").addClass("fa-angle-down");
        $(this).addClass("activee");

        if(flag){
            result(1, 4, key,null,2);
            $(this).find('span').removeClass("fa-angle-up");
            $(this).find('span').addClass("fa-angle-down");
            flag = false
        }else {
            result(1, 4, key,null,1);
            $(this).find('span').addClass("fa-angle-up");
            $(this).find('span').removeClass("fa-angle-down");
            flag = true;
        }
    });
    //点击按钮跳转页面
    $(".lt-search-result").on("click","button",function(){
        var id = $(this).attr('data-id');
        location.href = "./detail.html?id="+id;
    })
});


var result = function (page, pageSize, proName, price, num, brandId) {
    $.ajax({
        url: "/product/queryProduct",
        type: "get",
        data: {
            page: page || 1,
            pageSize: pageSize || 4,
            proName: proName || '',
            brandId: brandId || '',
            price: price || '',
            num: num || ''
        },
        success: function (data) {
            var temp = template("result-template", data);
            $(".lt-search-result").html(temp);
        }
    })
};