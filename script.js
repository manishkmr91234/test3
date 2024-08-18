function rollDice() {
    const diceCount = document.getElementById('diceCount').value;
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');
    const resultDiv = document.getElementById('result');

    let rollingInterval1, rollingInterval2;
    let result1, result2;

    function stopRolling() {
        clearInterval(rollingInterval1);
        if (diceCount == 2) clearInterval(rollingInterval2);

        dice1.className = `dice face-${result1}`;
        if (diceCount == 2) {
            dice2.className = `dice face-${result2}`;
            resultDiv.innerText = `Result: ${result1} + ${result2} = ${result1 + result2}`;
        } else {
            resultDiv.innerText = `Result: ${result1}`;
        }
    }

    rollingInterval1 = setInterval(() => {
        result1 = Math.floor(Math.random() * 6) + 1;
        dice1.className = `dice face-${result1}`;
    }, 100);

    if (diceCount == 2) {
        rollingInterval2 = setInterval(() => {
            result2 = Math.floor(Math.random() * 6) + 1;
            dice2.className = `dice face-${result2}`;
        }, 100);
    }

    setTimeout(stopRolling, 2000); // Stop rolling after 2 seconds
}

function toggleDice() {
    const diceCount = document.getElementById('diceCount').value;
    const dice2 = document.getElementById('dice2');
    if (diceCount == 2) {
        dice2.style.display = 'inline-block';
    } else {
        dice2.style.display = 'none';
    }
}
