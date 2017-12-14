$(function(){
    /*1.注册人数  数据可视化*/
    /*1.1准容器渲染图标*/
    /*1.2准备数据 */
    /*1.3引入核心echarts文件*/
    /*1.4获取dom容器*/
    var firstDom = document.querySelector('.picTable:first-child');
    /*1.5初始化dom容器*/
    var firstCarts = echarts.init(firstDom);
    /*1.6进行配置和导入数据*/
    var option = {
        /*图标的标题*/
        title: {
            text: '2017年注册人数'
        },
        tooltip: {},
        legend: {
            data:['人数']
        },
        grid: {        //距离画布上下左右的距离
            left: '10px',
            right: '0',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            data: ["1月","2月","3月","4月","5月","6月"]
        },
        yAxis: {},
        series: [{
            name: '人数',
            type: 'bar',
            data: [1000, 2000, 3600, 1400, 1200, 2220],
            itemStyle: {
                normal: {   //每个柱状图显示不同的颜色
                    color: function (params) {
                        var colorList = ["orange", "red", "yellow", "pink", "blue", "yellowgreen"];
                        return colorList[params.dataIndex];
                    }
                },
                emphasis: {   //阴影效果
                    shadowBlur: 10,  //阴影面积
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: 'rgba(0, 0, 0, .3)'
                }
            }
        }]
    };
    /*1.7 渲染图标*/
    firstCarts.setOption(option);

    /*2.品牌销量  数据可视化*/
    var secondDom = document.querySelector('.picTable:last-child');
    var secondCarts = echarts.init(secondDom);
    var secondOption = {
        title : {
            text: '热门品牌销售',  //主标题
            subtext: '2017年6月',  //副标题，时间
            x:'center'     //标题显示的位置
        },
        // tooltip : {
        //     trigger: 'item',
        //     formatter: "{b} : {c} ({d}%)"
        // },
        legend: {   //小图标
            orient: 'vertical',
            left: 'right',    //小图标显示位置
            data: ['耐克','阿迪','百伦','安踏','李宁'] //各个小图标对应名称
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                // roseType:'angle',   //南丁格尔图

                radius : '60%',    //饼状图的大小
                center: ['60%', '60%'], //饼状图在画布中的位置
                data:[    //画布上显示的内容及所占比例
                    {value:335, name:'耐克'},
                    {value:310, name:'阿迪'},
                    {value:34, name:'百伦'},
                    {value:135, name:'安踏'},
                    {value:1548, name:'李宁'}
                ],
                itemStyle: {
                    normal: {   //每个柱状图显示不同的颜色
                        color: function (params) {
                            var colorList = ["green", "red", "yellow", "pink", "orange", "yellowgreen"];
                            return colorList[params.dataIndex];
                        }
                    },
                    emphasis: {   //阴影效果
                        shadowBlur: 10,  //阴影面积
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowColor: 'rgba(0, 0, 0, .3)'
                    }
                }
            }
        ]
    };
    secondCarts.setOption(secondOption);
})

    var flag = true;
    $(".header-l").on("click", function () {
        if (flag) {
            $(".com-l").hide();
            $(".com-r").css("padding", "10px 10px 20px 10px");
            $(".header-l").css("position", "fixed");
            flag = false;
        } else {
            $(".com-l").slideDown(1000);
            $(".com-r").css("padding", "10px 10px 20px 190px");
            $(".header-l").css("position", "");
            flag = true;
        }
    });