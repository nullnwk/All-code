

function get(url,callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("get", url);
  xhr.send(null);
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(this.responseText);
    }
  }
}
get("./ajax~get.1.json",function(data){
  console.log(data);
});