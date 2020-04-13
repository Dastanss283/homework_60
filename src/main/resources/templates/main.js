'use strict';

window.addEventListener('load', function () {
    const user = fetch("http://localhost:8080/Post");
    console.log(user);
});

function show() {
    const showImage = document.getElementById('myImage').style.visibility ="visible";
}


