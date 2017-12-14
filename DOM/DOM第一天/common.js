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
