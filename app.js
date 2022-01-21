var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num2");
var operator = document.getElementById("operator");
var resultLable = document.getElementById("resultLable");
var buttonElement = document.querySelector("button");
function calculateResult(num1, num2, op) {
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return +(num1 / num2).toFixed(2);
        case "%":
            return num1 % num2;
        default:
            return "Invalide Operator, Please select valid operator.";
    }
}
var OutputMode;
(function (OutputMode) {
    OutputMode[OutputMode["CONSOLE"] = 0] = "CONSOLE";
    OutputMode[OutputMode["ALERT"] = 1] = "ALERT";
})(OutputMode || (OutputMode = {}));
function printResult(result, printMode) {
    if (printMode === OutputMode.CONSOLE) {
        console.log(result);
        resultLable.innerHTML = "Result: ".concat(result);
    }
    else if (printMode === OutputMode.ALERT) {
        alert(result);
    }
}
buttonElement.addEventListener("click", function () {
    var num1 = +num1Input.value;
    var num2 = +num2Input.value;
    var op = operator.value;
    var result = calculateResult(num1, num2, op);
    if (typeof result == "string") {
        printResult(result, OutputMode.ALERT);
    }
    else {
        printResult(result, OutputMode.CONSOLE);
    }
});
