function addOne(x) {
    return x + 1;
}

function pipe(value, ...args) {
    for(let i = 0; i < args.length;i++) {
        value = args[i](value);
    }
    return value;
}

pipe(1, addOne, addOne)