"use strict";
console.log("Hello There");
window.addEventListener("load", handleLoad);
let activePlayer = "Player 1";
let columns = 7;
let rows = 6;
function handleLoad(_event) {
    console.log("page has loaded");
    let startButton = document.getElementById("buttoncreateboard");
    startButton.addEventListener("click", handleStart);
}
function handleStart(_event) {
    columns = parseInt(document.getElementById("columns").value);
    rows = parseInt(document.getElementById("rows").value);
    createBoard(rows, columns);
}
function createBoard(x, y) {
    console.log("board is being created...");
    let board = document.getElementById("board");
    ;
    for (let i = 0; i < y; i++) {
        let rowHeight = 100 + i * 100;
        for (let t = 0; t < x; t++) {
            let rowWidth = 200 + t * 100;
            let box = document.createElement("div");
            box.className = "box";
            box.style.display = "inline";
            box.style.position = "absolute";
            box.style.top = rowHeight + "px";
            box.style.left = rowWidth + "px";
            box.dataset.coord = String(t) + String(i);
            box.addEventListener("click", placeCoin);
            if (i == y - 1) {
                box.dataset.valid = "valid";
                console.log("hello");
            }
            else {
                box.dataset.valid = "invalid";
            }
            board.appendChild(box);
        }
    }
}
function placeCoin(_event) {
    console.log("coin placement");
    let coinSpot = _event.target;
    let coin = document.createElement("span");
    coin.id = String(coinSpot.dataset.coord);
    coinSpot.appendChild(coin);
    coinSpot.dataset.valid = "invalid";
    coinSpot.removeEventListener;
    let Coordinates = String(coinSpot.dataset.coord);
    let coordX = parseInt(Coordinates.substring(0));
    let coordY = parseInt(Coordinates.substring(1));
    let boxAbove = document.querySelector(`.box[data-coord='${coordX}${coordY - 1}']`);
    boxAbove.dataset.valid = "valid";
    boxAbove.addEventListener("click", placeCoin);
    checkWin;
}
function checkWin() {
    console.log("checking for victory");
}
function switchPlayer(Player) {
    console.log("player switch");
    if (Player == "Player 1") {
        activePlayer == "Player 2";
    }
    else {
        activePlayer == "Player 2";
    }
}
//# sourceMappingURL=Connect4.js.map