if (cpu === 1 && currentPlayer === 2) {
    // Simulate a delay between 3 and 8 seconds
    const delay = Math.floor(Math.random() * (8000 - 3000 + 1)) + 3000;

    setTimeout(() => {
        addStone(nextFreeRow, selectedCol, currentPlayer);
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        currentPlayerTime = 30;
    }, delay);
}


if(cpu === 1 && player === 2){
    col = Math.floor(Math.random() * columns);
    row = findNextFreeRow(col);
    console.log("Selected Column: ", col);
    console.log("Next Free Row: ", row);
}