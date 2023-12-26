const rows = 6;
const columns = 7;
let currentPlayer = 1; // Spieler 1 beginnt
const gameBoard = Array.from({ length: rows }, () => Array(columns).fill(null));
let timerInterval;
let currentPlayerTime = 30; // Zeit in Sekunden für jeden Spieler

function displayBoard() {
    const gameBoardElement = document.querySelector('.board');
    gameBoardElement.innerHTML = '';

    for (let row = 0; row < rows; row++) {
        const rowElement = document.createElement('div');
        rowElement.className = 'row';

        for (let col = 0; col < columns; col++) {
            const columnElement = document.createElement('div');
            columnElement.className = 'column';

            // Änderung hier: Setze den Textinhalt als DOM-Element
            columnElement.appendChild(gameBoard[row][col] !== null ? gameBoard[row][col] : document.createTextNode(''));

            // Hinzufügen eines Event-Listeners für den Klick auf die Zelle
            columnElement.addEventListener('click', () => {
                // Hier wird die ausgewählte Spalte ermittelt
                const selectedCol = col;

                // Hier wird die nächste freie Zeile für den Stein ermittelt
                const nextFreeRow = findNextFreeRow(selectedCol);

                if (nextFreeRow !== -1) {
                    // Füge den Stein hinzu und aktualisiere die Anzeige
                    addStone(nextFreeRow, selectedCol, currentPlayer);
                    // Wechsle den Spieler und setze die Timer-Zeit zurück
                    currentPlayer = currentPlayer === 1 ? 2 : 1;
                    currentPlayerTime = 30;
                    // Starte den Timer für den nächsten Spieler
                    startTimer();
                    displayBoard();
                }
            });

            rowElement.appendChild(columnElement);
        }

        gameBoardElement.appendChild(rowElement);
    }

    // Füge ein h1-Element für die Timer-Anzeige hinzu
    const timerElement = document.querySelector('.timer');
    const currentPlayerElement = document.querySelector('.currentPlayer');
    currentPlayerElement.textContent = `PLAYER ${currentPlayer}'S TURN`;
    timerElement.textContent = `${currentPlayerTime}s`;
    playerTurn(currentPlayer);
}


function playerTurn(player) {
    const timeElement = document.querySelector('.timeTurn');
    if (player === 1) {
        timeElement.style.backgroundColor = 'rgba(253, 102, 135, 1)';
    } else {
        timeElement.style.backgroundColor = 'rgba(255, 206, 103, 1)';
    }
}

document.querySelector('.button-restart').addEventListener('click', playAgain);
document.querySelector('.button-restart-ingame').addEventListener('click', playAgain);
//const backgroundMainMenuElement = document.querySelector('.backgroundMainMenu');
//const backgroundIngameMenuElement = document.querySelector('.backgroundIngameMenu');
function playAgain() {
    backgroundIngameMenuElement.style.display = 'none';
    backgroundMainMenuElement.style.display = 'flex';
}

// Funktion zum Hinzufügen eines Steins in die nächste freie Zeile
function addStone(row, col, player) {
    // Erstelle ein neues div-Element für den Stein
    if (!checkWin(1) && !checkWin(2)) {
        const stoneElement = document.createElement('div');
        stoneElement.className = player === 1 ? 'stone1' : 'stone2';

        // Füge das div-Element dem DOM hinzu
        const columnElement = document.querySelector(`.row:nth-child(${row + 1}) .column:nth-child(${col + 1})`);
        columnElement.appendChild(stoneElement);

        // Setze das div-Element in der gameBoard-Matrix
        gameBoard[row][col] = stoneElement;

        // Überprüfe auf Gewinner
        if (checkWin(player)) {
            const winnerElement = document.querySelector('.winner');
            const timeElement = document.querySelector('.timeTurn');
            timeElement.style.display = 'none';
            winnerElement.style.display = 'flex';
            const h2Element = winnerElement.querySelector('h2');
            h2Element.textContent = `PLAYER ${player}`;
            const backgroundWinnerElement = document.querySelector('.backgroundGameBoardStart2');
            if (player === 1) {
                backgroundWinnerElement.style.backgroundColor = 'rgba(253, 102, 135, 1)';
            } else {
                backgroundWinnerElement.style.backgroundColor = 'rgba(255, 206, 103, 1)';
            };

        }
        // Hier kannst du weitere Aktionen für das Ende des Spiels hinzufügen
    }
}



// Funktion zum Suchen der nächsten freien Zeile in einer Spalte
function findNextFreeRow(col) {
    for (let row = rows - 1; row >= 0; row--) {
        if (gameBoard[row][col] === null) {
            return row;
        }
    }
    // Wenn keine freie Zeile gefunden wurde, wird -1 zurückgegeben
    return -1;
}

// Funktion zum Starten des Timers
function startTimer() {
    // Überprüfe, ob der Timer bereits läuft
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            currentPlayerTime--;
            const timerElement = document.querySelector('.timer');
            const currentPlayerElement = document.querySelector('.currentPlayer');
            currentPlayerElement.textContent = `PLAYER ${currentPlayer}'S TURN`;
            timerElement.textContent = `${currentPlayerTime}s`;

            if (currentPlayerTime === 0) {
                // Timer abgelaufen, wechsle zum nächsten Spieler
                currentPlayer = currentPlayer === 1 ? 2 : 1;
                currentPlayerTime = 30;
                clearInterval(timerInterval);
                timerInterval = null; // Setze timerInterval zurück
                startTimer();
                displayBoard();
            }
        }, 1000); // Intervall von 1 Sekunde
    }
}

// Funktion zum Überprüfen, ob ein Spieler gewonnen hat
function checkWin(player) {
    // Überprüfe horizontale Linien
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col <= columns - 4; col++) {
            if (
                gameBoard[row][col]?.classList.contains(`stone${player}`) &&
                gameBoard[row][col + 1]?.classList.contains(`stone${player}`) &&
                gameBoard[row][col + 2]?.classList.contains(`stone${player}`) &&
                gameBoard[row][col + 3]?.classList.contains(`stone${player}`)
            ) {
                gameBoard[row][col].classList.add(`winningStone${player}`);
                gameBoard[row][col + 1]?.classList.add(`winningStone${player}`);
                gameBoard[row][col + 2]?.classList.add(`winningStone${player}`);
                gameBoard[row][col + 3]?.classList.add(`winningStone${player}`);
                return true;
            }
        }
    }

    // Überprüfe vertikale Linien
    for (let col = 0; col < columns; col++) {
        for (let row = 0; row <= rows - 4; row++) {
            if (
                gameBoard[row][col]?.classList.contains(`stone${player}`) &&
                gameBoard[row + 1][col]?.classList.contains(`stone${player}`) &&
                gameBoard[row + 2][col]?.classList.contains(`stone${player}`) &&
                gameBoard[row + 3][col]?.classList.contains(`stone${player}`)
            ) {
                gameBoard[row][col].classList.add(`winningStone${player}`);
                gameBoard[row + 1][col]?.classList.add(`winningStone${player}`);
                gameBoard[row + 2][col]?.classList.add(`winningStone${player}`);
                gameBoard[row + 3][col]?.classList.add(`winningStone${player}`);
                return true;
            }
        }
    }

    // Überprüfe diagonale Linien (von links oben nach rechts unten)
    for (let row = 0; row <= rows - 4; row++) {
        for (let col = 0; col <= columns - 4; col++) {
            if (
                gameBoard[row][col]?.classList.contains(`stone${player}`) &&
                gameBoard[row + 1][col + 1]?.classList.contains(`stone${player}`) &&
                gameBoard[row + 2][col + 2]?.classList.contains(`stone${player}`) &&
                gameBoard[row + 3][col + 3]?.classList.contains(`stone${player}`)
            ) {
                gameBoard[row][col].classList.add(`winningStone${player}`);
                gameBoard[row + 1][col + 1].classList.add(`winningStone${player}`);
                gameBoard[row + 2][col + 2].classList.add(`winningStone${player}`);
                gameBoard[row + 3][col + 3].classList.add(`winningStone${player}`);
                return true;
            }
        }
    }

    // Überprüfe diagonale Linien (von rechts oben nach links unten)
    for (let row = 0; row <= rows - 4; row++) {
        for (let col = 3; col < columns; col++) {
            if (
                gameBoard[row][col]?.classList.contains(`stone${player}`) &&
                gameBoard[row + 1][col - 1]?.classList.contains(`stone${player}`) &&
                gameBoard[row + 2][col - 2]?.classList.contains(`stone${player}`) &&
                gameBoard[row + 3][col - 3]?.classList.contains(`stone${player}`)
            ) {
                gameBoard[row][col].classList.add(`winningStone${player}`);
                gameBoard[row + 1][col - 1].classList.add(`winningStone${player}`);
                gameBoard[row + 2][col - 2].classList.add(`winningStone${player}`);
                gameBoard[row + 3][col - 3].classList.add(`winningStone${player}`);
                return true;
            }
        }
    }

    return false;
}



// Starte den Timer für den ersten Spieler
startTimer();
displayBoard();


//computer player
//color winner
//Test