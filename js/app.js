document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.button-rules').addEventListener('click', openGameRules);
    document.querySelector('.button-check').addEventListener('click', openMainMenu);
});

const backgroundRulesElement = document.querySelector('.backgroundRules');
const backgroundMainMenuElement = document.querySelector('.backgroundMainMenu');

function openGameRules() {
    backgroundRulesElement.style.display = 'flex';
    backgroundMainMenuElement.style.display = 'none';
}

function openMainMenu() {
    backgroundRulesElement.style.display = 'none';
    backgroundMainMenuElement.style.display = 'flex';
}

