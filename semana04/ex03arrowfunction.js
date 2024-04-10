const arrayNumbers = [10,20,30,30];

const mediaArray = (arrayNumbers) => {
    if (arrayNumbers.length === 0) {
        return `O valor total do array está vazio, insira números no array para poder calcular a média!`;
    }

    const arraySize = arrayNumbers.length;

    let somaArray = 0;

    for (let i = 0; i < arraySize; i++) {
        somaArray += arrayNumbers[i];
    }
    const mediatotal = somaArray / arraySize;
    return mediatotal;
}

console.log(`A média do array é ${mediaArray(arrayNumbers)}`);
console.log(`Quantidade de valores inseridos no array é de: ${arrayNumbers.length} valores`)