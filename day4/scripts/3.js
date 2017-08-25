var myPara = document.querySelector("#p3");
var myButton = document.querySelector("#c");
var msg = "";
var myArray = [];
myButton.onclick = function() {
    var len = 8;
    for (var i = 0; i < len; ++i) {
        msg += "<div style='width:100%;text-align:center;'>";
        myArray.push(Math.pow(2, i));
        alert(myArray);
        msg += "&nbsp;"
        for (var j = 0; j < i * 2 + 1; ++j) {
            if (j <= i) {
                msg += myArray[j] + "&nbsp;";
            } else {
                msg += myArray[(myArray.length -2) - j % myArray.length] + "&nbsp;";
            }
        }
        msg += "</div>";
    }
    myPara.innerHTML = msg;
}
