let start = confirm('Do you want to play a game?');
let reStart;
let userInput;
let devMult = 2;
let ext = 4;
let minRandomNumber = 0;
let maxRandomNumber = 8;
let randomNum = Math.floor(minRandomNumber + Math.random() * (maxRandomNumber + 1 - minRandomNumber)); 
console.log(randomNum);
let attemptPrize = 100;
let totalPrize = 0;
let userAttempts = 3;
const attempt = 3;

if (start) {
  while(userAttempts >= 1) {
    userInput = parseInt(prompt(`
      Choose the roulette pocket number from ${minRandomNumber} to ${maxRandomNumber}
      Attempts left: ${userAttempts}
      Total prize: ${totalPrize}
      Possible prize on current attempt: ${attemptPrize}$`, ''));
    if(userInput === randomNum) {
      totalPrize += attemptPrize;
      reStart = confirm(`Congratulation, you won! Your prize is: 
      ${totalPrize}$. Do you want to continue?`);
      if(!reStart) {
        break;
      } else {
        userAttempts = attempt;
        maxRandomNumber += ext;
        attemptPrize *= devMult;
        randomNum = Math.floor(minRandomNumber + Math.random() * (maxRandomNumber + 1 - minRandomNumber)); 
        console.log(randomNum);
      }
    } else {
      userAttempts--;
      attemptPrize /= devMult;
    }  
  }
  alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
} else {
  alert('You did not become a billionaire, but can');
}