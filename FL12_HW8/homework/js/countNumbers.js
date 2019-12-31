let makeNumber = function(incomingString) {
    let returnNumber = [];
    let stringToArray = incomingString.split('');
    for(let i = 0; i < stringToArray.length;i++){
      if(!isNaN(stringToArray[i])){
        returnNumber += stringToArray[i];
      }
    }
    return returnNumber; 
  }
  
let countNumber = function(incomingNumbers) {
    let numbersCounter = {};
    let returnCounter = makeNumber(incomingNumbers).split('');
    for (let i of returnCounter) {
        if(numbersCounter[i] === undefined) {
            numbersCounter[i] = 1;
        } else {
            numbersCounter[i]++;
        }
    }
  return numbersCounter;
}

countNumber('3s1d4f1g5h9j2k6l5')