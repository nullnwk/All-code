/*
 * @Author: dhl
 * @Date:   2017-11-09 10:06:28
 * @Last Modified by:   dhl
 * @Last Modified time: 2017-11-09 16:10:17
 */

$(document).ready(function() {

    $('#fullpage').fullpage({

        verticalCentered:false,

        navigation:true,

        // 设置滚屏的速度
        scrollingSpeed: 1500,

        sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#fed", "#d04759", "#84d9ed", "#8ac060"],

        //当进入到当前屏幕的时候
        afterLoad:function (anchorLink , index) {

            $(".down").fadeIn();
            $(this).addClass('animate');
        },
        //当离开某一屏进入到下一屏的动作
        onLeave:function (index, nextindex, direction) {

            $(".down").fadeOut();


            //从第二屏进入第三屏
            if(index==2 && nextindex==3) {

                //添加动画效果，并监听结束事件
                $(".screen02 .hide").addClass('animated').on("animationend", function () {

                    $(".screen03 .size img:last-child").show();

                    $(".screen03 .btns img:last-child").show();
                });
            }else if(index==3 && nextindex==4) {

                $(".screen03 .hide").addClass('animated').on("animationend", function () {

                    $(".screen04 .cart  .sofaImg").show();

                    $(".screen04 .cart").addClass('animated').on("animationend", function () {


                        $(".screen04 .text img:last-child").fadeIn();

                        $(".screen04 .address").fadeIn();

                        $(".screen04 .address .addressImg").fadeIn();

                    });

                });


                $(".screen04 .cloud").addClass('animated');

            }


        },
        //页面结构加载完成后
        afterRender: function () {

            $(".down").on("click",function () {

                $.fn.fullpage.moveSectionDown();
            })
        }
    });
});