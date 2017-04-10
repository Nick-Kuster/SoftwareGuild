function rollDice(max) {
    return Math.ceil(Math.random() * (1 + max - 1));
}

for (var i = 0; i < 100; i++) {
    console.log(rollDice());
}
