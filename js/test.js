const rows = 6;
const columns = 7;
const gameBoard = Array.from({ length: rows }, () => Array(columns).fill(null));

// Beispiel-JavaScript zum Anzeigen des Gameboards
function displayBoard() {
    const gameBoardElement = document.querySelector('.board');
    gameBoardElement.innerHTML = '';

    for (let row = 0; row < rows; row++) {
        const rowElement = document.createElement('div');
        rowElement.className = 'row';

        for (let col = 0; col < columns; col++) {
            const cellElement = document.createElement('div');
            cellElement.className = 'cell';
            cellElement.textContent = gameBoard[row][col] !== null ? gameBoard[row][col] : '';

            // Hinzufügen eines Event-Listeners für den Klick auf die Zelle
            cellElement.addEventListener('click', () => {
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

            rowElement.appendChild(cellElement);
        }

        gameBoardElement.appendChild(rowElement);
    }
}

// Funktion zum Hinzufügen eines Steins in die nächste freie Zeile
function addStone(row, col) {
    gameBoard[row][col] = 'X'; // Hier wird ein einfacher String 'X' als Beispielwert verwendet.
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

// Aktualisiere die Anzeige des Spielfelds
displayBoard();
