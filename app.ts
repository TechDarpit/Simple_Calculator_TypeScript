const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById("num2");
const operator = document.getElementById("operator") as HTMLInputElement;
const resultLable = document.getElementById("resultLable") as HTMLInputElement;
const buttonElement = document.querySelector("button");

function calculateResult(num1: number, num2: number, op: string) {
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

enum OutputMode {
  CONSOLE,
  ALERT,
}

function printResult(result: string | number, printMode: OutputMode) {
  if (printMode === OutputMode.CONSOLE) {
    console.log(result);
    resultLable.innerHTML = `Result: ${result}`;
  } else if (printMode === OutputMode.ALERT) {
    alert(result);
  }
}

buttonElement.addEventListener("click", () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const op = operator.value;
  const result: number | string = calculateResult(num1, num2, op);
  if (typeof result == "string") {
    printResult(result, OutputMode.ALERT);
  } else {
    printResult(result, OutputMode.CONSOLE);
  }
});
