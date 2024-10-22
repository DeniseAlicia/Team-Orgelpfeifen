console.log("Hello There");

window.addEventListener("load", handleLoad);
let activePlayer: string = "Player 1";

let columns: number = 7;
let rows: number = 6;


function handleLoad(_event: Event): void {
    console.log("page has loaded");
    let startButton: HTMLElement = <HTMLElement>document.getElementById("buttoncreateboard");
    startButton.addEventListener("click", handleStart);




}

function handleStart(_event: MouseEvent): void {

    columns = parseInt((<HTMLInputElement>document.getElementById("columns")).value);
    rows = parseInt((<HTMLInputElement>document.getElementById("rows")).value);

    createBoard(rows, columns);
}

function createBoard(x: number, y: number): void {
    console.log("board is being created...");
    let board: HTMLElement = <HTMLElement>document.getElementById("board");
  ;

    for (let i: number = 0; i < y; i++) {

        let rowHeight: number = 100 + i * 100;

        for (let t: number = 0; t < x; t++) {

            let rowWidth: number = 200 + t * 100;

            let box: HTMLElement = document.createElement("div");
            box.className = "box";
            box.style.display = "inline";
            box.style.position = "absolute";
            box.style.top = rowHeight + "px";
            box.style.left = rowWidth + "px";
            box.dataset.coordX = String(t);
            box.dataset.coordY = String(i);
            box.addEventListener ("click", placeCoin);

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

function placeCoin(_event: MouseEvent): void {
    console.log("coin placement");

    let coinSpot: HTMLElement = <HTMLElement>_event.target;
    
    let coin: HTMLElement = <HTMLElement>document.createElement("span");
    coin.id = String(coinSpot.dataset.coord);
    coin.className = activePlayer;

    coinSpot.appendChild(coin);
    coinSpot.dataset.valid = "invalid";
    coinSpot.removeEventListener;

    let coordinates: String = String(coinSpot.dataset.coord);
    let coordX: number = parseInt(coordinates.substring(0));
    let coordY: number = parseInt(coordinates.substring(1));
    let yAbove: string = String(parseInt(coinSpot.dataset.coordY) -1);
    let boxAbove:  HTMLElement = <HTMLElement> document.querySelector(`.box[data-coordY=yAbove]`)

    boxAbove.dataset.valid = "valid";
    boxAbove.addEventListener("click", placeCoin);

    checkWin(coordX, coordY);

}

function checkWin(coinX: number, coinY: number): void {
    console.log("checking for victory")

    let winCount: number = 1;
    switchPlayer(activePlayer);
}


function switchPlayer(Player: string): void {
    console.log("player switch");

    if (Player == "Player 1") {
        activePlayer == "Player 2";
    }
    else {
        activePlayer == "Player 2";
    }
}
