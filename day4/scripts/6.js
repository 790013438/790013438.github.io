var myButton = document.querySelector("#b6");
myButton.onclick = function() {
    var enterString = prompt("请输入手机号");
    if (enterString.length != 11) {
        alert("手机号必须是11位数字");
        return;
    }
    for (var i = 0; i < 10; ++i) {
        if (enterString.search(130 + i) == 0 || 
        enterString.search(158) == 0 ||
        enterString.search(159) == 0 ||
        enterString.search(186) == 0) {
            alert("合法手机号");
            return;
        }
    }
    alert("前三位必须是130-139,158-159,186");
}