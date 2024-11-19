const boardElm = document.querySelector(".board");
const holdingBoardElm = document.querySelector(".holding-board");
const columns = 5;
const rows = 5;
window.onload = function () {
    //blank img in the board
    for(let i = 0; i < columns * rows; i++){
        const boardimg = document.createElement("img");
        boardElm.appendChild(boardimg);
        boardimg.src = "./images/blank.jpg";
    }
    //game images in the imgboard
    for(let i = 0; i < 25; i++){
        const boardimg = document.createElement("img");
        holdingBoardElm.appendChild(boardimg);
        boardimg.src = "./images/3.jpg";
    }

}

