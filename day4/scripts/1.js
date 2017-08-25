var password = document.querySelector("#password");
var myButton = document.querySelector('button');

myButton.onclick = function() {
    var text = password.value;
    if (text.length < 8) {
        alert("密码长度不够");
    }
    if (text.length > 20) {
        alert("密码太长");
    }
    if (text.match(/\W/) != null) {
        alert("密码只能包含数字，字母，下划线")
    }
    if (text.match(/[A-Z]/) == null) {
        alert('密码必须包含大写字母')
    }
    prompt("你输入的密码：" + text);
}
