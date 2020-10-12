var button = document.createElement("BUTTON");
var buttonText = document.createTextNode("Add Square.");
button.appendChild(buttonText);
document.body.appendChild(button);

let x = document.getElementsByTagName("button");
x[0].addEventListener("click", addSquare);

let ids = [];
let squareNum = 0;
let colors = ["red", "yellow", "blue", "green", "orange", "purple", "cyan", "black", "white"];


function addSquare(e) {
//    console.log("ok");
    let newDiv = document.createElement("DIV");
    newDiv.classList.add("item");
    newDiv.id = squareNum;
    let container = document.getElementsByClassName("container");
    container[0].appendChild(newDiv);
    squareNum++;
    runListener();
}
let squares = document.getElementsByClassName("item");
function runListener() {
    for(const square of squares) {
        /* found a way to add parameters to functions within addEventListener by using .bind */
        square.addEventListener("mouseover", idShown.bind(this, true));
        square.addEventListener("mouseout", idShown.bind(this, false));
        square.addEventListener("click", changeColor);
        square.addEventListener("dblclick", doubleClick);
    }
    //console.log(squares);
}
function idShown(show, e) {
    let fetchSquare = document.getElementById(e.target.id);
    let squareText = null;
    show ? (fetchSquare.textContent = e.target.id) : (fetchSquare.textContent = "");
}
function changeColor(e) {
    document.getElementById(e.target.id).style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
function doubleClick(e) {
    /*******************
     * could use % but I read bitwise is theoretically faster
     */
    let squareBefore = document.getElementById(parseInt(e.target.id)-1);
    let squareAfter = document.getElementById(parseInt(e.target.id) + 1);
    if(e.target.id&1) {
        if(squareBefore === null) {
            alert("No Square Found."); //This only really works once... once square 2 is gone it won't find square one to delete it
        } else squareBefore.remove();
    } else {
        if(squareAfter === null) {
            alert("No Square Found.");
        } else squareAfter.remove(); // again this doesn't go further then one check.
    }
}