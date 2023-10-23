//Задача №8: Калькулятор расходов и доходов ******************

//Напишите функцию calculateBalance(incomes, expenses), которая принимает на вход две строки,
//содержащие перечьни доходов и расходов, а затем возвращает баланс (разницу между общим доходом и общими расходами).





function calculateBalance(incomes, expenses) {
    let totalIncome = 0;
    let totalExpense = 0;
  
    // Расчет общего дохода
    let incomeItems = incomes.split(",");
    for (let i = 0; i < incomeItems.length; i++) {
      totalIncome += parseFloat(incomeItems[i]);
    }
  
    // Расчет общих расходов
    let expenseItems = expenses.split(",");
    for (let i = 0; i < expenseItems.length; i++) {
      totalExpense += parseFloat(expenseItems[i]);
    }
  
    let balance = totalIncome - totalExpense;
    return balance;
  };



//let incomes = "1000, 2000, 500";
//let expenses = "300, 500, 200";
//let balance = calculateBalance(incomes, expenses);
//console.log("Баланс: " + balance);