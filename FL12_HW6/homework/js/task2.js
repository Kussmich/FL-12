var a = parseInt(prompt("Enter 'a' value", ""), 10);

var b = parseInt(prompt("Enter 'b' value", ""), 10);

var c = parseInt(prompt("Enter 'c' value", ""), 10);

if(isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("input values should be ONLY numbers");
}

if(a === 0 || b === 0 || c === 0) {
    alert("A triangle must have 3 sides with a positive definite length");
}

if (a + b < c || a + c < b || b + c < a) {
    alert("Triangle doesn’t exist");
} else {
    if (a === b && b === c && a === c) {
        alert("Equilateral triangle");
    }
    
    if (a === b && a !== c || c === b && c !== a || a === c && a !== b) {
        alert("Isosceles triangle")
    }
    
    if (a !== b && c !== a) {
        alert("Scalene triangle")
    }
}