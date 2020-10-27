let button = document.createElement("BUTTON");
let buttonText = document.createTextNode("Add Square.");
button.appendChild(buttonText);
document.body.prepend(button);

document.getElementsByTagName("button")[0].addEventListener("click", addSquare);


let sq = {
    colors: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D', '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC', '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399', '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933', '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'],
    num: 0
}
let container = document.getElementsByClassName("container");

function addSquare(e) {
    let square = document.createElement("DIV");
    square.classList.add("item");
    square.id = sq.num;
    square.addEventListener("mouseover", idShown.bind(this, true));
    square.addEventListener("mouseout", idShown.bind(this, false));
    square.addEventListener("click", changeColor);
    square.addEventListener("dblclick", doubleClick);
    container[0].appendChild(square);
    sq.num++;
}

function idShown(show, e) {
    show ? (e.target.textContent = e.target.id) : (e.target.textContent = "");
}
function changeColor(e) {
    e.target.style.backgroundColor = sq.colors[Math.floor(Math.random() * sq.colors.length)];
}
function doubleClick(e) {
	if (Number(this.id) % 2 === 0) {
		this.nextSibling === null ? alert('no next square!') : container[0].removeChild(this.nextSibling);
	} else {
        this.previousSibling === null ? alert('no previous square!') : container[0].removeChild(this.previousSibling);
	}

    /*
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
            if(id+searchNum > sq.num) { 
                alert("no square after this.")
                break;
            }
        }
        if(squareAfter !== null) squareAfter.remove();
    }*/
}