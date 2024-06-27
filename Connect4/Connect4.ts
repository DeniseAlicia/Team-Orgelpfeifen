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

    for (let i: number = 0; i < y; i++) {

        let rowHeight: number = i * 10

        for (let t: number = 0; t < x; t++) {

            let box: HTMLElement = document.createElement("div");
            box.className = "box";
            box.style.display = "inline";
            box.style.position = "absolute";
            box.style.top = rowHeight + "px";
            box.id = String(x) + String(y);
            
            if (x = t)

            board.appendChild(box);
        }
    }


}

function placeCoin(_event: MouseEvent): void {
    console.log("coin placement");

    let coinSpot: HTMLElement = <HTMLElement>_event.target;

}

function checkWin(): void {
    console.log("checking for victory")
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
