window.onload = function () {
    var searchHis = document.querySelector(".searchHis"); //放大镜
    var inputHis = document.querySelector(".inputHis");  //输入框
    var clear = document.querySelector(".clear");   //清空记录文字
    var browse = document.querySelector(".browse"); //p标签，beowse的父元素
    var historyUl = document.querySelector(".historyUl");   //UL
    var jilu = document.querySelector(".jilu"); //历史记录
    var history = new History();
    history.init();
    history.getHistory();
    history.objHistory(historyUl);
    history.handle(searchHis, inputHis, historyUl, browse, jilu);
    history.clear(clear, browse, historyUl, jilu);
    history.liHistory(historyUl);
};

//创建历史记录的构造函数
function History() {
}

//初始化本地存储
History.prototype.init = function () {
    //获取本地数据
    this.getHistory = function () {
        return JSON.parse(localStorage.getItem('history') || '[]');
    };
    //将数据上传到本地
    this.setHistory = function (value, historyUl) {
        var arr = this.getHistory();
        for (var i = 0; i < 10; i++) {
            if (arr.indexOf(value) == -1) {
                arr.push(value);
            }
        }
        localStorage.setItem("history", JSON.stringify(arr));
        //写上不刷新才显示
        this.objHistory(historyUl);
        this.liHistory(historyUl);

    };
    //删除单个数据
    this.clearHistory = function () {
        var arr = this.getHistory();
        for (var i = 0; i < 10; i++) {
            if (arr.indexOf(value) != -1) {
                arr.splice(i, 1);
            }
        }
        localStorage.setItem("history", JSON.stringify(arr));
    };
    //删除所有数据
    this.removeHistory = function () {
        localStorage.removeItem("history")
    };
};

//创建一个对象，添加到模板中
History.prototype.objHistory = function (historyUl) {
    var obj = {
        list: this.getHistory()
    };
    var tmp = template("hisHistory", obj);
    historyUl.innerHTML = tmp;
};

//操作search,点击放大镜，将表单valle添加到本地存储，并显示到页面上
History.prototype.handle = function (searchHis, inputHis, historyUl, browse, jilu) {
    var that = this;
    //点击，inp不为空，那么添加到本地，显示到页面上,browse显示，jilu隐藏
    searchHis.addEventListener("click", function () {
        if (inputHis.value != "") {
            that.setHistory(inputHis.value, historyUl);
            browse.style.display = "block";
            jilu.style.display = "none";
            location.href = "./searchList.html?key=" + inputHis.value;
        }
        inputHis.value = "";
    });
    // 按回车键也执行操作
    document.addEventListener("keyup", function (e) {
        if (e.keyCode == 13) {
            if (inputHis.value != "") {
                that.setHistory(inputHis.value, historyUl);
                browse.style.display = "block";
                jilu.style.display = "none";
                location.href = "./searchList.html?key=" + inputHis.value;
            }
            inputHis.value = "";
        }
    })
};

//点击clear,清空本地存储
History.prototype.clear = function (clear, browse, historyUl, jilu) {
    var historyLi = historyUl.children;
    var that = this;
    clear.addEventListener("click", function () {
        that.removeHistory();
        historyUl.innerHTML = null;
        browse.style.display = "none";
        jilu.style.display = "block";
    });
    //如果historyLi小于等于0，那么browse显示，jilu隐藏
    if (historyLi.length <= 0) {
        browse.style.display = "none";
        jilu.style.display = "block";
    }
};

//点击li，跳转
History.prototype.liHistory = function (historyUl) {
    var historyLi = historyUl.children;
    historyUl.addEventListener("click", function (e) {
            console.log(e.target.nodeName.toLowerCase());
            if (e.target.nodeName.toLowerCase() == 'li') {
                location.href = "./searchList.html?key=" + e.target.innerText;
            }
    })
};
