var button = document.createElement("BUTTON");
var buttonText = document.createTextNode("Add Square.");
button.appendChild(buttonText);
document.body.appendChild(button);

document.getElementsByTagName("button")[0].addEventListener("click", addSquare);

let squareNum = 0;
let colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
                '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
                '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
                '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
                '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
                '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
                '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
                '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
                '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
                '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];


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
    let searchNum = 1;
    id = parseInt(e.target.id); //id is a string
    let squareBefore = document.getElementById(id-searchNum);
    let squareAfter = document.getElementById(id + searchNum);
    // & or %, in other news aparently 0 is an even number
    if(e.target.id&1) { // odd
        while(squareBefore === null) {
            searchNum++;
            squareBefore = document.getElementById(id-searchNum);
            if(id-searchNum < 0) { 
                alert("no square before this.")
                break;
            }
        }
        if(squareBefore !== null) squareBefore.remove();

    } else { // even
        while(squareAfter === null) {
            searchNum++;
            squareAfter = document.getElementById(id+searchNum);
            if(id+searchNum > squareNum) { 
                alert("no square after this.")
                break;
            }
        }
        if(squareAfter !== null) squareAfter.remove();
    }
}