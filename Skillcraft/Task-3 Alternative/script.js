let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const statusText = document.getElementById("status");
const boardDiv = document.getElementById("board");

const winConditions = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

function createBoard() {
    boardDiv.innerHTML = "";
    board.forEach((cell, index) => {
        const div = document.createElement("div");
        div.classList.add("cell");

        if (cell === "X") div.classList.add("x");
        if (cell === "O") div.classList.add("o");

        div.innerText = cell;
        div.addEventListener("click", () => handleClick(index));
        boardDiv.appendChild(div);
    });
}

function handleClick(index) {
    if (board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    createBoard();
    checkWinner();

    if (gameActive) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.innerText = `Player ${currentPlayer}'s turn`;

        if (document.getElementById("mode").value === "cpu" && currentPlayer === "O") {
            setTimeout(cpuMove, 400);
        }
    }
}

function cpuMove() {
    let empty = board.map((v,i) => v === "" ? i : null).filter(v => v !== null);
    let move = empty[Math.floor(Math.random() * empty.length)];
    handleClick(move);
}

function checkWinner() {
    for (let condition of winConditions) {
        let [a,b,c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            statusText.innerText = `🎉 Player ${currentPlayer} Wins!`;
            gameActive = false;
            return;
        }
    }

    if (!board.includes("")) {
        statusText.innerText = "It's a Draw!";
        gameActive = false;
    }
}

function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    statusText.innerText = "Player X's turn";
    createBoard();
}

createBoard();