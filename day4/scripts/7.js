var myButton = document.querySelector("#b7");
myButton.onclick = function() {
    var enterString = prompt("请输入要想加的数：","1, 2, 3, 4, 5, 6, 7");
    var myArray = enterString.match(/\d+(\.d+)*/g);
    var newArray = [];
    for (var i = 0; i < myArray.length; ++i) {
        newArray[i] = new Number(myArray[i]);
    }
    var len = newArray.length;
    var sum = 0;
    for (var i = 0; i < len / 2; ++i) {
        sum += add(newArray[i], newArray[(len - 1) - i]);
    }
    if (len % 2 !== 0) {
        sum -= newArray[parseInt(len / 2)];
    }
    alert(sum);
}
function add() {
    var sum = 0;
    for (var i = 0; i< arguments.length; ++i) {
        sum += arguments[i];
    }
    return sum;
}