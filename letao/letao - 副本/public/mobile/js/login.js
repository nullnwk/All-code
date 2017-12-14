$(function () {

    $('.loginBtn [type="button"]').on("click", function () {
        login();

    })
    $('.code [type="button"]').on("click",function () {
        getCode();
    })




});
var login = function () {
    $.ajax({
        type: "post",
        url: "/user/register",
        data: $("form").serialize(),
        beforeSend:function () {
            // 判断用户是否为空
            if ($('[name="username"]').val() == '') {
                mui.toast("用户名不能为空");
                // return 和return false 在阻止ajax提交的是 尤其是jquery中  return不能阻止 只能用return false
                return false;
            }
            // 判断手机号是否为空 和格式
            var reg = /^1[34578]\d{9}$/;
            if (!reg.test($('[name="mobile"]').val() )){
                mui.toast("手机号不符合格式");
                // return 和return false 在阻止ajax提交的是 尤其是jquery中  return不能阻止 只能用return false
                return false;
            }
            // // 判断密码是否为空
            if ($('[name="password"]').val() == '') {
                mui.toast("密码不能为空");
                // return 和return false 在阻止ajax提交的是 尤其是jquery中  return不能阻止 只能用return false
                return false;
            }

            // 两次密码如果不一致 那么告诉用户 两次密码不一致
            if($('[name="password"]').val() != $('[name="rePass"]').val() ) {
                mui.toast("两次密码不一致");
                // return 和return false 在阻止ajax提交的是 尤其是jquery中  return不能阻止 只能用return false
                return false;
            }
            if ($('[name="vCode"]').val() == '') {
                mui.toast("请点击按钮获取验证码");
                // return 和return false 在阻止ajax提交的是 尤其是jquery中  return不能阻止 只能用return false
                return false;
            }
        },
        success: function (data) {
            console.log(data);
            if(data.success == true) {
                location.href = '../goodsIndex.html'
            }
        }

    })
};

var getCode = function(){
    $.ajax({
        type: 'get',
        url: '/user/vCode',
        data:null,
        success:function(data){
            console.log(data);
        }
    })
}