console.log("JS Files Linked");


var h1 = document.querySelector("#main");
var h3 = document.querySelector("#text");

console.log(h1);

h3.innerText = "bob";

function changeToDarkMode() {
    // grab the entire div
    var wrapperElement = document.querySelector(".wrapper")
    wrapperElement.classList.remove("light-mode")
    wrapperElement.classList.add("dark-mode")
}

function removePara(element) {
    element.remove();
}
function removePara2() {
    // grab and remove
    var para2 = document.querySelector("para");

    para2.remove();
}