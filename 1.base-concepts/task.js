function solveEquation(a, b, c) {
    "use strict";
    let arr = [];
    // код для задачи №1 писать здесь
    let rootEquation;
    let discriminant = b**2 - 4*a*c;

    if (discriminant === 0) {
        rootEquation = -b / (2*a);
        arr.push(rootEquation);
    }
    else if (discriminant > 0) {
        rootEquation = (-b + Math.sqrt(discriminant) )/(2*a);
        arr.push(rootEquation);
        rootEquation = (-b - Math.sqrt(discriminant) )/(2*a);
        arr.push(rootEquation);
    }
    return arr; // array
  }
  
function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";
    let totalAmount, bodyCredit, termCredit, percentMonth, payMonth;
    let today = new Date();
    // код для задачи №2 писать здесь
    if (isNaN(parseFloat(percent)) && !isFinite(percent)) {
        return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    }
    if (isNaN(parseFloat(contribution)) && !isFinite(contribution)) {
        return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;    
    }
    if (isNaN(parseFloat(amount)) && !isFinite(amount)) {
        return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    }
    bodyCredit = amount - contribution;
    percent = percent / 100;
    percentMonth = percent / 12;
    termCredit = date.getMonth() - today.getMonth() + (12 * (date.getFullYear() - today.getFullYear()));
    payMonth = bodyCredit * (percentMonth + (percentMonth / (Math.pow(1 + percentMonth, termCredit) - 1)));
    totalAmount = payMonth * termCredit;
    return Math.round(parseFloat(totalAmount) * 100) / 100;;
}