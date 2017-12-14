/**
 *获取中国格式的时间
 * @param 传入日期
 * @returns {string}返回日期
 */
function getDate(dt) {
    var year = dt.getFullYear();
    var month = dt.getMonth() + 1;
    var day = dt.getDate();
    var hours = dt.getHours();
    var minute = dt.getMinutes();
    var second = dt.getSeconds();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hours = hours < 10 ? "0" + hours : hours;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    return year + "年" + month + "月" + day + "日" + hours + ":" + minute + ":" + second;
}


/**
 *获取标签
 * @param id传入id属性
 * @returns {Element}返回元素
 */
function my$(id) {
    return document.getElementById(id);
}
/**
 * 获取标签
 * @param attr   标签名和属性id class
 * @returns {*} 返回元素
 */
function myElement(attr) {
    if(attr.charAt(0)=="."){
        return document.getElementsByClassName(attr.substr(1));
    }else if(attr.charAt(0)=="#"){
        return document.getElementById(attr.substr(1));
    }else {
        return document.getElementsByTagName(attr);
    }
}





/**
 * 设置任意的标签中的任意文本内容
 * @param ele 标签名
 * @param text 传入的内容
 */
function setInnerText(ele, text) {
    if (typeof ele.textContent == "undefined") {
        ele.innerText = text;
    } else {
        ele.textContent = text;
    }
}
/**
 * 获取任意的标签中的任意文本内容
 * @param ele  标签名
 * @returns {*} 返回内容
 */
function getInnerText(ele) {
    if (typeof ele.textContent == "undefined") {
        return ele.innerText;
    } else {
        return ele.textContent;
    }
}
/**
 * 获取第一个子节点
 * @param parent 传入的是父节点
 * @returns {*}返回的是第一个子节点
 */
function getFirstElement(parent) {
    if (parent.firstElementChild) {
        return parent.firstElementChild;
    } else {
        var node = parent.firstChild;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node
    }
}
/**
 * 获取最后一个子节点
 * @param parent 父节点
 * @returns {*} 返回最后一个子节点
 */
function getLastElement(parent) {
    if (parent.lastElementChild) {
        return parent.lastElementChild;
    } else {
        var node = parent.lastChild;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}

/**
 * 获取一个节点的上一个兄弟节点
 * @param ele 节点
 * @returns {*} 返回上一个兄弟节点
 */
function getPreviousElementSibling(ele) {
    if (ele.previousElementSibling) {
        return ele.previousElementSibling;
    } else {
        var node = ele.previousSibling;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}

/**
 * 获取一个 节点的下一个兄弟元素
 * @param ele 节点
 * @returns {*} 返回下一个兄弟节点
 */
function getNextElementSibing(ele) {
    if (ele.nextElementSibling) {
        return ele.nextElementSibling;
    } else {
        var node = ele.nextSibling;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}

/*function getChildren(parent) {
 if(parent.children){
 return parent.children;
 }else {
 var node = parent.children;
 while (node && node.nodeType != 1){
 node = node.children;
 }
 return node;
 }

 }*/


/**
 * 为任意元素绑定任意事件
 * @param element 元素
 * @param type 事件类型
 * @param fn  事件处理函数
 */
function addEventListener(element, type, fn) {
    if (element.addEventListener) {
        element.addEventListener(type, fn, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + type, fn);
    } else {
        element["on" + type] = fn;
    }
}

/**
 *为任意元素解绑任意事件
 * @param ele  元素
 * @param type  类型
 * @param fnName  事件处理函数的函数名
 */
function removeEventListener(ele, type, fnName) {
    if (ele.removeEventListener) {
        ele.removeEventListener(type, fnName, false);
    } else if (ele.detachEvent) {
        ele.detachEvent(type, fnName);
    } else {
        ele["on" + type] = null;
    }
}


/**
 * 匀速动画
 * @param ele 元素
 * @param target 终止位置
 */
function animate(ele, target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        //获取当前位置
        var current = ele.offsetLeft;
        //步长
        var step = 10;
        step = target > current ? step : -step;
        //每次移动后的距离
        current += step;
        if (Math.abs(target - current) > Math.abs(step)) {
            ele.style.left = current + "px";
        } else {
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    }, 10)
}



/**
 * 获取任意元素的任意属性值
 * @param ele  元素名
 * @param attr 属性名
 * @returns {*} 返回的是属性值
 */
function getStyle(ele, attr) {
    return window.getComputedStyle ? window.getComputedStyle(ele, null)[attr] : ele.currentStyle[attr];
}
/**
 *缓动动画
 * @param ele  元素
 * @param json  对象，存放属性名、属性值
 * @param fn 回调函数
 */
function animate1(ele, json, fn) {
    //要用定时器，先清定时器
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var bool = true;
        //for in循环遍历所有属性、属性值
        for (var attr in json) {
            //改变透明度
            if (attr == "opacity") {
                //获取当前透明度，放大100倍
                var current = parseInt(getStyle(ele, attr) * 100);//当前位置
                //目标透明度放大一百倍
                var target = json[attr] * 100;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                ele.style[attr] = current / 100;
            } else if (attr == "zIndex") {//改变层级
                ele.style[attr] = json[attr];
            } else {
                var current = parseInt(getStyle(ele, attr));//当前位置
                var target = json[attr];
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                ele.style[attr] = current + "px";
            }
            //看是否到达目标
            if (target != current) {
                bool = false;
            }
        }
        if (bool) {
            clearInterval(ele.timer);
            if (fn) {
                fn();
            }
        }
        console.log("目标位置:" + target + ",当前位置:" + current + ",每次移动步数:" + step);
    }, 20)
}



/**
 * 被卷去的地方
 * @returns {{left: (Number|number), top: (Number|number)}}  卷去的左部，上部
 */
function getScroll() {
    return {
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    }
}


