var button = document.createElement("BUTTON");
var buttonText = document.createTextNode("Add Square.");
button.appendChild(buttonText);
document.body.appendChild(button);

document.getElementsByTagName("button")[0].addEventListener("click", addSquare);

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
    let searchNum = 1;
    id = parseInt(e.target.id);
    let squareBefore = document.getElementById(id-searchNum);
    let squareAfter = document.getElementById(id + searchNum);
    if(e.target.id&1) {
        while(squareBefore === null) {
            searchNum++;
            squareBefore = document.getElementById(id-searchNum);
            if(id-searchNum < 0) { 
                alert("no square before this.")
                break;
            }
        }
        if(squareBefore !== null) squareBefore.remove();

    } else {
        while(squareAfter === null) {
            searchNum++;
            squareAfter = document.getElementById(id+searchNum);
            if(id+searchNum > squareNum) { 
                alert("no square before this.")
                break;
            }
        }
        if(squareAfter !== null) squareAfter.remove();
    }
}