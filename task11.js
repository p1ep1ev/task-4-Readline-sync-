//Задача №11: Калькулятор бонусов сотрудника *************

//Создайте функцию calculateEmployeeBonus(salary, performanceRating), которая принимает зарплату сотрудника и его рейтинг производительности,
//а затем возвращает бонус. Если рейтинг выше 8, бонус составляет 20% от зарплаты, в противном случае - 10%.




function calculateEmployeeBonus(salary, performanceRating) {
    let bonus;
    if (performanceRating > 8) {
      bonus = 0.2 * salary;
    } else {
      bonus = 0.1 * salary;
    }
    return bonus;
  };


//let salary = 5000;
//let rating = 9;
//let bonus = calculateEmployeeBonus(salary, rating);
//console.log(bonus);