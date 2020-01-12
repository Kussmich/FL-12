let reverseConvert = function(inputArray) {
    let outArray = [];
    for (const i in inputArray) {
        if (typeof inputArray[i] === 'number') {
            outArray[i] = `${inputArray[i]}`;
        } else {
            outArray[i] = parseInt(inputArray[i]);
        }
    }
    return outArray;
}

console.log(reverseConvert([1, '2', '3', 4]));

let executeforEach = function(inputArray, element) {
    for(let i = 0; i < inputArray.length; i++){
        inputArray[i] = element(inputArray[i]);
    }
}

executeforEach([1, 2, 3], function(el) {
    console.log(el * 2)
})

let mapArray = function(inputArray, element) {
    executeforEach(inputArray, el => parseInt(el))
    executeforEach(inputArray, element);
    return inputArray;
}

console.log(mapArray([2, '5', 8], function(el) {
    return el + 3
}))

let filterArray = function(inputArray, element) {
    let returnArray = [];
    executeforEach(inputArray, el => {
        if(element(el)) {
            returnArray.push(el)
        }
    })
    return returnArray;
}

console.log(filterArray([2, 5, 8], function(el) { 
    return el % 2 === 0; 
}))

let flipOver = function(inputString) {
    let flipOverString = '';
    for(let i = inputString.length - 1; i >= 0; i--) {
        flipOverString += inputString[i];
    }
    return flipOverString;
}

console.log(flipOver('hello world'));

let makeListFromRange = function(inputArray) {
    let returnArray = [];
    for(let i = inputArray[0]; i <= inputArray[1]; i++) {
        returnArray.push(i);
    }
    return returnArray
}

console.log(makeListFromRange([2, 7]));

let getArrayOfKeys = function(inputArray, key) {
    let returnArray = [];
    executeforEach(inputArray, element => returnArray.push(element[key]))
    return returnArray;
}

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];

console.log(getArrayOfKeys(actors, 'name'));

let substitute = function (inputArray) {
    const num = 30;
    mapArray(inputArray, element => element < num ? '*' : element);
    return inputArray;
}

console.log(substitute([58, 14, 48, 2, 31, 29]));

let getPastDay = function(inputDate, days) {
    let oneDayInMs = 86400000;
    return new Date(inputDate - days * oneDayInMs).getDate();
}

const date = new Date(2019, 0, 2);
console.log(getPastDay(date, 1));
console.log(getPastDay(date, 2));
console.log(getPastDay(date, 365));

let formatDate = function(inputDate) {
    let day = inputDate.getDate();
    let month = inputDate.getMonth() + 1;
    let year = inputDate.getFullYear();
    let minutes = inputDate.getMinutes();
    if(minutes < 10) {
        minutes = `0${inputDate.getMinutes()}`;
    }
    let hours = inputDate.getHours();
    if(hours < 10) {
        hours = `0${inputDate.getHours()}`;
    }
    return `${year}/${month}/${day} ${hours}:${minutes}`;
}

console.log(formatDate(new Date('6/15/2018 09:15:00')));
console.log(formatDate(new Date()))