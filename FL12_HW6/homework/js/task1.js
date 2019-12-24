var aValue = parseInt(prompt("Enter 'a' value", ""), 10);

var bValue = parseInt(prompt("Enter 'b' value", ""), 10);

var cValue = parseInt(prompt("Enter 'c' value", ""), 10);

if(isNaN(aValue) || isNaN(bValue) || isNaN(cValue)) {
    alert("Invalid input data");
}

var discriminantLeftOperand = Math.pow(bValue, 2);

var discriminantRightOperand = 4 * aValue * cValue;

var discriminant = discriminantLeftOperand - discriminantRightOperand;

var devider = 2 * aValue;

if (discriminant < 0) {
    alert("no solution");
} else {
    if (discriminant === 0) {
        var x = -bValue / devider;
        alert("x = " + x)
    } else {
        var discriminantSQRT = Math.sqrt(discriminant);
        var x1 = -bValue + discriminantSQRT;
        x1 /= devider;
        var x2 = -bValue - discriminantSQRT;
        x2 /= devider;
        alert("x1 = " + Math.round(x1) + " x2 = " + Math.round(x2));
    }
}