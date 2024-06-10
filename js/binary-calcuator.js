const res = document.getElementById("res");
res.innerHTML = "";
const operators = ["+", "-", "*", "/"];
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btnClr = document.getElementById("btnClr");
btnClr.addEventListener("click", () => {
  res.innerHTML = "";
});
let btnEql = document.getElementById("btnEql");
btnEql.addEventListener("click", () => {
  let resInputResult = res.innerHTML.split("");
  res.innerHTML = calculate(resInputResult);
});

function calculate(resInputResult) {
  let operand = "";
  resInputResult.forEach((input) => {
    operators.forEach((operator) => {
      if (input == operator) {
        const operatorIndex = resInputResult.indexOf(operator);
        const lastInputIndex = resInputResult.length - 1;
        const operand2Arr = resInputResult.splice(
          operatorIndex + 1,
          lastInputIndex
        );
        const operand1Arr = resInputResult.splice(0, operatorIndex);
        const operand1 = operand1Arr.toString().replaceAll(",", "");
        const operand2 = operand2Arr.toString().replaceAll(",", "");
        const operand1ToBaseTen = parseInt(operand1, 2);
        const operand2ToBaseTen = parseInt(operand2, 2);
        const operandCalculated = eval(
          `${operand1ToBaseTen} ${operator} ${operand2ToBaseTen}`
        );
        
        if (operandCalculated < 0) {
          const positiveBinaryResult = (operandCalculated >>> 0).toString(2);
          operand += positiveBinaryResult;
        } else {
          operand += operandCalculated.toString(2);
        }
      }
    });
  });
  return operand;
}
const btnSum = document.getElementById("btnSum");
const btnSub = document.getElementById("btnSub");
const btnMul = document.getElementById("btnMul");
const btnDiv = document.getElementById("btnDiv");

function resInput(s) {
  res.innerHTML += s;
}
