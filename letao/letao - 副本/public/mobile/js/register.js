/**
 * Created by Administrator on 2017/12/1.
 */
$(function () {
    $(".registerBtn button").on("click",function () {
            userRegister()
    })
    // var urlSearch = location.href;
    // console.log(urlSearch);
    // var str = urlSearch.substr(urlSearch.lastIndexOf("?")+1);
    // var str1 = urlSearch.substr(urlSearch.indexOf("=")+1);
    // console.log(str);
    // console.log(str1);

});

var userRegister = function () {
    $.ajax({
        url:"/user/login",
        type:"post",
        data:$("form").serialize(),
        success : function (data) {
            console.log(data);
            if(data.error == "403"){
                $(".show").html("用户名或密码错误");
            }
            if(data.success == true){
                // var str = urlSearch.substr(urlSearch.lastIndexOf("?")+1);
                // console.log(str);
                var urlSearch = location.href;
                var str1 = urlSearch.substr(urlSearch.indexOf("=")+1);
                location.href = str1 || "../goodsIndex.html";
            }
        }
    })
};
