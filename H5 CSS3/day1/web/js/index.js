
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
				$(this).addClass("animate");
				$(this).find(".eight").on("mousemove", function (e) {
					$(".hand").css({
						left:e.pageX+80,
						top:e.pageY+20
					});
					$(".eight .btn_8 img").on("mouseover", function () {
						$(".eight .btn_8 img:last-child").show();
					}).on("mouseout", function () {
						$(".eight .btn_8 img:last-child").hide();
					});
					$(".eight .more").on("click", function () {
						$.fn.fullpage.moveTo(1);
					})
				});
			},
			//当离开某一屏进入到下一屏的动作
			onLeave:function (index, nextindex, direction) {
				$(".down").fadeOut();
				if(index==2 && nextindex == 3){
					$(".second .sofa_2").addClass("animated").on('animationend',function () {
						$(".chree .change img:last-child").show();
						$(".chree .cart img:last-child").show();
					});
				}else if(index==3 && nextindex == 4){
					$(".chree .sofa_hide").addClass("animated").on('animationend',function () {
						$(".four .cart_4  .sofaImg").show();
						$(".chree .sofa_hide").hide();
						$(".four .cart_4").addClass("animated").on("animationend",function () {
							$(".address").fadeIn();
							$(".address img:last-child").delay(3000).fadeIn();
							$(".text_4 img:last-child").fadeIn();
						})
					});
				}else if(index==4 && nextindex == 5){
					$(".five .head").addClass("animated").on("animationend", function () {
						$(".five .mouse2").show();
						$(".five .sofaImg").addClass("animated");
						$(".five .orderImg").addClass("animated");

					});
				}else if(index==5 && nextindex == 6){
					$(".six .sofa_6").addClass("animated");
					$(".six .box_6").addClass("animated").on("animationend", function () {
						$(".six .address6").show();
						$(".six").addClass("animated").on("transitionend", function () {
							$(".six .worker .worker_6").addClass("animated").on("animationend", function () {
								$(".six .worker .say").delay(500).fadeIn();
								$(".six .door").addClass("animated").on("transitionend", function () {
									$(".six .person").addClass("animated");
								})
							});
						})
					})

				}

			},
			//页面结构加载完成后
			afterRender: function () {
				$(".down").on("click", function () {
					$.fn.fullpage.moveSectionDown()
				});

			}
	});
});
