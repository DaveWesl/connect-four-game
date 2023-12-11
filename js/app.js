document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.button-rules').addEventListener('click', openGameRules);
    document.querySelector('.button-check').addEventListener('click', openMainMenu);
    document.querySelector('.button-pvsp').addEventListener('click', openGameBoard);
    document.querySelector('.button-menu').addEventListener('click', openIngameMenu);
    document.querySelector('.button-continue').addEventListener('click', openGameBoardContinue);
    document.querySelector('.button-quit').addEventListener('click', openMainMenuQuit);
});

const backgroundRulesElement = document.querySelector('.backgroundRules');
const backgroundMainMenuElement = document.querySelector('.backgroundMainMenu');
const backgroundGameBoardStart1Element = document.querySelector('.backgroundGameBoardStart1');
const backgroundIngameMenuElement = document.querySelector('.backgroundIngameMenu');

function openGameRules() {
    backgroundMainMenuElement.style.display = 'none';
    backgroundRulesElement.style.display = 'flex';
}

function openMainMenu() {
    backgroundRulesElement.style.display = 'none';
    backgroundMainMenuElement.style.display = 'flex';
}

function openGameBoard() {
    backgroundMainMenuElement.style.display = 'none';
    backgroundGameBoardStart1Element.style.display = 'flex';
}

function openIngameMenu() {
    backgroundGameBoardStart1Element.style.display = 'none';
    backgroundIngameMenuElement.style.display = 'flex';
}

function openGameBoardContinue() {
    backgroundIngameMenuElement.style.display = 'none';
    backgroundGameBoardStart1Element.style.display = 'flex';
}

function openMainMenuQuit() {
    backgroundIngameMenuElement.style.display = 'none';
    backgroundMainMenuElement.style.display = 'flex';
}





// your-script.js

const rows = 6;
const columns = 7;
const gameBoard = Array.from({ length: rows }, () => Array(columns).fill(null));

// Beispiel-JavaScript zum Anzeigen des Gameboards
function displayBoard() {
    const gameBoardElement = document.getElementById('game-board');
    gameBoardElement.innerHTML = '';
  
    for (let row = 0; row < rows; row++) {
      const rowElement = document.createElement('div');
      rowElement.className = 'row';
  
      for (let col = 0; col < columns; col++) {
        const cellElement = document.createElement('div');
        cellElement.className = 'cell';
        cellElement.textContent = gameBoard[row][col] !== null ? gameBoard[row][col] : '';
        rowElement.appendChild(cellElement);
      }
  
      gameBoardElement.appendChild(rowElement);
    }
  }  

// Beispiel: Setze einen Spielstein in Spalte 3 für Spieler 1
dropPiece(1, 3);

// Beispiel: Spieler 2 setzt einen Spielstein in Spalte 2
dropPiece(2, 2);

// Aktualisiere die Anzeige des Spielfelds
displayBoard();
