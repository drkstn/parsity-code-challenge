const findSum = function (array) {
    return array
        .reduce((acc, cur) => acc + cur);
};

const findFrequency = function (array) {
    const frequency = {};
    for (const element of array) {
        if (frequency[element]) {
            frequency[element] += 1;
        } else {
            frequency[element] = 1;
        }
    };
    const highest = Object.keys(frequency).reduce((acc, cur) => frequency[acc] > frequency[cur] ? acc : cur);
    const lowest = Object.keys(frequency).reduce((acc, cur) => frequency[acc] < frequency[cur] ? acc : cur);
    const highLow = {most: highest, least: lowest};
    return highLow;
};

const isPalindrome = function (str) {
    return [...str]
        .reduce((acc, cur) => cur + acc)
        .toLowerCase()
        === str.toLowerCase();
};

const largestPair = function (array) {
    return array
        .map((num, index, array) => num * array[index + 1])
        .slice(0, array.length - 1)
        .reduce((acc, cur) => acc > cur ? acc : cur);
};

const removeParenth = function (str) {
    return str
        .substring(0, str.indexOf('('))
        + str.substring(str.indexOf(')') + 1);
};

const scoreScrabble = function (str) {
    const letterValues = {
        a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1,
        d: 2, g: 2,
        b: 3, c: 3, m: 3, p: 3,
        f: 4, h: 4, v: 4, w: 4, y: 4,
        k: 5,
        j: 8, x: 8,
        q: 10, z: 10,
    };
    return [...str]
        .map(letter => letterValues[letter])
        .reduce((acc, cur) => acc + cur);
};
