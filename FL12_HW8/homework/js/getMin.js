let getMin = function() {
    let incomingArguments = [...arguments];
    let currentArgument = 0;
    let minArgument = incomingArguments[currentArgument];
    for(let i = currentArgument + 1; i <= incomingArguments.length; i++){
        if(incomingArguments[i] < minArgument) {
            minArgument = incomingArguments[i];
        }
    }
    return minArgument;
}

getMin(140,220,221,222,463,1337);