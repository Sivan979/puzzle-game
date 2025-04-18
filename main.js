const boardElm = document.querySelector(".board");
const holdingBoardElm = document.querySelector(".holding-board");
const columns = 5;
const rows = 5;
let currTile;
let otherTile;
let moves = 0;

window.onload = function () {
    //blank img in the board
    for(let i = 0; i < columns * rows; i++){
        let boardimg = document.createElement("img");
        boardimg.src = "./images/blank.jpg";
        boardElm.appendChild(boardimg);

        boardimg.addEventListener("dragstart", dragStart); //click on image to drag
        boardimg.addEventListener("dragover", dragOver);   //drag an image
        boardimg.addEventListener("dragenter", dragEnter); //dragging an image into another one
        boardimg.addEventListener("drop", dragDrop);       //drop an image onto another one
        boardimg.addEventListener("dragend", dragEnd);     //after you completed dragDrop
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    const images = [];
    for (let i = 1; i <= 25; i++) {
        images.push(`./images/${i}.jpg`);
    }
    shuffleArray(images);

    //game images in the imgboard
    for(let i = 0; i < images.length; i++){
        let boardimg = document.createElement("img");
        boardimg.src = images[i];

        boardimg.addEventListener("dragstart", dragStart);
        boardimg.addEventListener("dragover", dragOver); 
        boardimg.addEventListener("dragenter", dragEnter);
        boardimg.addEventListener("drop", dragDrop);      
        boardimg.addEventListener("dragend", dragEnd);

        holdingBoardElm.appendChild(boardimg);
    }
}

//DRAG TILES
function dragStart() {
    currTile = this; //this refers to image that was clicked on for dragging
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragDrop() {
    otherTile = this; //this refers to image that is being dropped on
}

function dragEnd() {
    if (currTile.src.includes("blank")) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;
    moves++;
    document.querySelector(".moves").innerHTML =  `MOVES: ${moves}`;
}