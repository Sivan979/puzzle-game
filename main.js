const boardElm = document.querySelector(".board");
const holdingBoardElm = document.querySelector(".holding-board");
const columns = 5;
const rows = 5;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Generate an array of image paths
const images = [];
for (let i = 1; i <= 25; i++) {
    images.push(`./images/${i}.jpg`);
}
// Shuffle the images array
shuffleArray(images);


window.onload = function () {
    //blank img in the board
    for(let i = 0; i < columns * rows; i++){
        const boardimg = document.createElement("img");
        boardElm.appendChild(boardimg);
        boardimg.src = "./images/blank.jpg";
    }
    //game images in the imgboard
    for(let i = 0; i < images.length; i++){
        const boardimg = document.createElement("img");
        holdingBoardElm.appendChild(boardimg);
        boardimg.src = images[i];
    }
    

}

