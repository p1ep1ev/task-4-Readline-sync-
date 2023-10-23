//Задача №1: Калькулятор налога на доходы

//Напишите функцию incomeTaxCalculator(income), которая принимает на вход сумму дохода и возвращает сумму налога на доходы.
//Пусть ставка налога составляет 15%.


function incomeTaxCalculator(income) {
    let tax = income * 0.15;
    return tax;
};



//let income = 50000;
//let tax = incomeTaxCalculator(income);
//console.log("Налог на доходы: " + tax);