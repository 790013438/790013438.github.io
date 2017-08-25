var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'https://upload.wikimedia.org/wikipedia/commons/9/95/Internet_Explorer_9.png') {
        myImage.setAttribute('src','http://mdn.github.io/beginner-html-site/images/firefox-icon.png');
    } else {
        myImage.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/9/95/Internet_Explorer_9.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}


myButton.onclick = function() {
    setUserName();
}