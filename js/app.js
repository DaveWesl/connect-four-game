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
