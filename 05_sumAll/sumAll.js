const sumAll = function(firstNumber, secondNumber) {
    let sum = 0;
    if (typeof firstNumber === 'number' && typeof secondNumber === 'number') {
    if (firstNumber < secondNumber) {
    for (let index = firstNumber; index <= secondNumber; index++) {
        sum = sum + index;
    }

    } else {
        for (let index = secondNumber; index <= firstNumber; index++) {
            sum = sum + index;
        }
    }

    if (sum < 0 ) {
        return 'ERROR';
    } else return sum;
} else {
    return 'ERROR';
}
};

// Do not edit below this line
module.exports = sumAll;
