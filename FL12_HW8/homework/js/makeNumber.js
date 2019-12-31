let makeNumber = function(incomingString) {
    let returnNumber = '';
    let stringToArray = incomingString.split('');
    for(let i = 0; i < stringToArray.length;i++){
      if(!isNaN(stringToArray[i])){
        returnNumber += stringToArray[i];
      }
    }
    return returnNumber; 
  }
  
makeNumber('i1d2d3q4d5i6d7k8f9a0');