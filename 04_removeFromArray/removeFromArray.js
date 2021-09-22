// First try - passes first test
/* const removeFromArray = function(array, value) {
    oneToRemove = array.indexOf(value)
    array.splice(oneToRemove, 1);
    return array;
}; */

// Second try - moving to using rest arguments and arrays
const removeFromArray = function(array, ...valuesToRemove) {
    for (let i = 0; i < valuesToRemove.length; i++) {
        if (array.includes(valuesToRemove[i])) {
        valueToRemove = array.indexOf(valuesToRemove[i]);
        array.splice(valueToRemove, 1);
        } else continue;        
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
