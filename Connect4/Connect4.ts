console.log("Hello There");

window.addEventListener("load", handleLoad);
let activePlayer: string = "Player 1";

let columns: number = 7;
let rows: number = 6;


function handleLoad(_event: Event): void {
    console.log("page has loaded");



    

}

function createBoard(rows: number, columns: number): void {
    console.log("board is being created...");
    for(let i:number = 0; i < columns; i++){

        for (let t:number = 0; t < rows; t++){

            let box: HTMLElement = document.createElement("div");
            box.style.position = "absolute"
        }
    }
}

function placeCoin(_event: MouseEvent): void {
    console.log("coin placement");
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
