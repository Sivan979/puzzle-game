const boardElm = document.querySelector(".board");

const columns = 5;
const rows = 5;
window.onload = function () {
    for(i = 0; i < columns * rows; i++){
        const boardimg = document.createElement("img");
        boardElm.appendChild(boardimg);
        boardimg.src = "./images/blank.jpg";
     }
}

