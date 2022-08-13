function solveEquation(a, b, c) {
    "use strict";
    let arr;
    // код для задачи №1 писать здесь
    let rootEquation;
    let discriminant = b**2 - 4*a*c;

    if (discriminant === 0) {
        rootEquation = -b / (2*a);
        arr.push(rootEquation);
    }
    else if (discriminant < 0) {
        rootEquation = (-b + Math.sqrt(d) )/(2*a);
        arr.push(rootEquation);
        rootEquation = (-b - Math.sqrt(d) )/(2*a);
        arr.push(rootEquation);
    }
    return arr; // array
  }
  
function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;
   
    // код для задачи №2 писать здесь
   
    return totalAmount;
}