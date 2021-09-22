const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';
    let string2 = '';
    for (i = 0; i < num; i++) {
        string2 += string;
    }
    return string2;
};

// Do not edit below this line
module.exports = repeatString;
