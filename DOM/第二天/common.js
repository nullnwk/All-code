/**
 *
 * @param 返回日期
 * @returns {string}
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
 *
  * @param id
 * @returns {Element}
 */
function my$(id) {
    return document.getElementById(id);
}

/**
 *设置任意的标签中的任意文本内容
 */
function setInnerText(ele, text) {
    if(typeof ele.textContent == "undefined"){
        ele.innerText = text;
    }else{
        ele.textContent = text;
    }
}
/**
 * 获取任意标签的文本内容
 */
function getInnerText(ele) {
    if(typeof ele.textContent == "undefined"){
       return ele.innerText;
    }else {
        return ele.textContent;
    }
}

