var myButton = document.querySelector("#b4");
myButton.onclick = function() {
    var enterString = prompt("请输入一个字符串");
    if (!isNaN(enterString)) {
        if (Math.floor(enterString) == enterString) {
            alert(enterString + "是整数");
        } else {
            alert(enterString + "不是整数")
        }
    } else {
        alert("输入的不是数字");
    }
}
