var myButton = document.querySelector("#b5");
myButton.onclick = function() {
    var enterString = prompt("请输入一个字符串");
    if (enterString === null || enterString == "") {
        alert("字符串为空");
    } else {
        alert("字符串不为空");
    }
}