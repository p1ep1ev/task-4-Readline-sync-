//Задача №10: Генератор случайных уравнений

//Напишите функцию generateRandomEquation(),
//которая генерирует случайное уравнение вида ax + b = c, где a, b и c - случайные числа.



function generateRandomEquation() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let c = Math.floor(Math.random() * 10) + 1;
    let equation = `${a}x + ${b} = ${c}`;
    return equation;
  };



//let equation = generateRandomEquation();
//console.log(equation);