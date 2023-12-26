document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.button-rules').addEventListener('click', openGameRules);
    document.querySelector('.button-check').addEventListener('click', openMainMenu);
    document.querySelector('.button-pvsp').addEventListener('click', openGameBoard);
    document.querySelector('.button-menu').addEventListener('click', openIngameMenu);
    document.querySelector('.button-continue').addEventListener('click', openGameBoardContinue);
    document.querySelector('.button-quit').addEventListener('click', openMainMenuQuit);
    document.querySelector('.button-pvscpu').addEventListener('click', openGameBoardCPU);
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

let cpu = 0;
function openGameBoard() {
    backgroundMainMenuElement.style.display = 'none';
    backgroundGameBoardStart1Element.style.display = 'flex';

    cpuImg.src = './assets/images/player-two.svg';
    playerTwoHeading.textContent = 'PLAYER 2';

    currentPlayerTime = 30;
    cpu = 0;
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

//CPU
const cpuImg = document.querySelector('.containerPlayerTwo .player-two');

// Zugriff auf das h3-Element
const playerTwoHeading = document.querySelector('.containerPlayerTwo .cpu');

function openGameBoardCPU() {
    backgroundMainMenuElement.style.display = 'none';
    backgroundGameBoardStart1Element.style.display = 'flex';

    cpuImg.src = './assets/images/cpu.svg';
    playerTwoHeading.textContent = 'CPU';

    currentPlayerTime = 30;
    cpu = 1;
}