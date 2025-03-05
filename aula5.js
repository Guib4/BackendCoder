const generateRandomNumbers = (count, min, max) => {
    const numberCounts = {};

    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        numberCounts[randomNumber] = (numberCounts[randomNumber] || 0) + 1;
    }

    return numberCounts;
};

const result = generateRandomNumbers(100, 1, 20);
console.log(result);
