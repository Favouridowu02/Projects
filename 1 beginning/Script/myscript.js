// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Be Kind';
/*global document, window, LocalStorage*/

//ImageChanger
var dogImage = document.querySelector('img');
 
dogImage.onclick = function () {
    'use strict';
    var myImage = dogImage.getAttribute('src');
    if (myImage === 'Images/davido1.jpg'){
        dogImage.setAttribute('src', 'Images/mayorkun1.jpg')
    } else { 
       dogImage.setAttribute('src', 'Images/davido1.jpg')
    }

};

//Personalised welcome page
var nameButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


if (myName == null) {
    myHeading.textContent = 'Have a nice day';
}
function setUserName () {
    'use strict';
    var myName = window.prompt('Please enter your Name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Have a nice day' + " " + myName;
    if (myName == null) {
        myHeading.textContent = 'Have a nice day';
    }
 
};
if (!localStorage.getItem('name')) {
    setUserName ();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Have a nice day' + ' ' + storedName;
};
// nameButton.onclick = function () {
//     'use strict';
//     setUserName ();
// };