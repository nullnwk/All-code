/**
 *获取中国格式的时间
 * @param 传入日期
 * @returns {string}返回日期
 */
function getDate(dt) {
    var year = dt.getFullYear();
    var month = dt.getMonth()+1;
    var day = dt.getDate();
    var hours = dt.getHours();
    var minute = dt.getMinutes();
    var second = dt.getSeconds();
    month = month<10 ? "0"+month : month;
    day = day<10 ? "0"+day : day;
    hours = hours<10 ? "0"+hours : hours;
    minute = minute<10 ? "0"+minute : minute;
    second = second<10 ? "0"+second : second;
    return year+"年"+month+"月"+day+"日"+hours+":"+minute+":"+second;
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
 * 设置任意的标签中的任意文本内容
 * @param ele 标签名
 * @param text 传入的内容
 */
function setInnerText(ele, text) {
    if(typeof ele.textContent == "undefined"){
        ele.innerText = text;
    }else{
        ele.textContent = text;
    }
}
/**
 * 获取任意的标签中的任意文本内容
 * @param ele  标签名
 * @returns {*} 返回内容
 */
function getInnerText(ele) {
    if(typeof ele.textContent == "undefined"){
       return ele.innerText;
    }else {
        return ele.textContent;
    }
}
/**
 * 获取第一个子节点
 * @param parent 传入的是父节点
 * @returns {*}返回的是第一个子节点
 */
function getFirstElement(parent) {
    if(parent.firstElementChild){
        return parent.firstElementChild;
    }else{
        var node = parent.firstChild;
        while(node && node.nodeType != 1){
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
    if(parent.lastElementChild){
        return parent.lastElementChild;
    }else{
        var node = parent.lastChild;
        while(node && node.nodeType != 1){
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
    if(ele.previousElementSibling){
        return ele.previousElementSibling;
    }else {
        var node = ele.previousSibling;
        while(node && node.nodeType != 1){
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
    if(ele.nextElementSibling){
        return ele.nextElementSibling;
    }else {
        var node = ele.nextSibling;
        while (node && node.nodeType !=1){
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
function addEventListener(element,type,fn) {
    if(element.addEventListener){
        element.addEventListener(type,fn,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+type,fn);
    }else{
        element["on"+type]=fn;
    }
}

/**
 *为任意元素解绑任意事件
 * @param ele  元素
 * @param type  类型
 * @param fnName  事件处理函数的函数名
 */
function removeEventListener(ele, type, fnName) {
    if(ele.removeEventListener){
        ele.removeEventListener(type, fnName, false);
    }else if (ele.detachEvent){
        ele.detachEvent(type, fnName);
    }else{
        ele["on"+type] = null;
    }
}