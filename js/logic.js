const rows = 6;
const columns = 7;
const gameBoard = Array.from({ length: rows }, () => Array(columns).fill(null));

function displayBoard() {
    const gameBoardElement = document.querySelector('.board');
    gameBoardElement.innerHTML = '';

    for (let row = 0; row < rows; row++) {
        const rowElement = document.createElement('div');
        rowElement.className = 'row';

        for (let col = 0; col < columns; col++) {
            const columnElement = document.createElement('div');
            columnElement.className = 'column';
            columnElement.textContent = gameBoard[row][col] !== null ? gameBoard[row][col] : '';

            // Hinzufügen eines Event-Listeners für den Klick auf die Zelle
            columnElement.addEventListener('click', () => {
                // Hier wird die ausgewählte Spalte ermittelt
                const selectedCol = col;
                
                // Hier wird die nächste freie Zeile für den Stein ermittelt
                const nextFreeRow = findNextFreeRow(selectedCol);
                
                if (nextFreeRow !== -1) {
                    // Füge den Stein hinzu und aktualisiere die Anzeige
                    addStone(nextFreeRow, selectedCol);
                    displayBoard();
                }
            });

            rowElement.appendChild(columnElement);
        }

        gameBoardElement.appendChild(rowElement);
    }
}


// Funktion zum Hinzufügen eines Steins in die nächste freie Zeile
function addStone(row, col) {
    // Hier setzen Sie den Wert im Spielbrett auf irgendetwas (z.B., 1)
    gameBoard[row][col] = 1;
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

displayBoard();
