document.querySelector("#b").onclick = function() {
    var enterString = prompt("第2题，输入数组，如a, 2, 3.4, 5, 6, 1","a, 2, 3.4, 5, 6, 1");
    myArray = enterString.match(/\d+(\.\d)*/g);
    newArray = [];
    for(var i = 0; i < myArray.length; ++i) {
        if (Math.floor(myArray[i]) == myArray[i])
            newArray.push(myArray[i]);
    }
    for (var i = 0; i < newArray.length; ++i) {
        for (var j = i + 1; j < newArray.length; ++j) {
            if (newArray[i] > newArray[j]) {
                var temp = newArray[i];
                newArray[i] = newArray[j];
                newArray[j] = temp;
            }
        }
    }
    alert(newArray);
}