//Задача №9: Расчет средней оценки ********************

//Создайте функцию calculateAverageGrade(grades),
//которая принимает строку со списком оценок и возвращает среднюю оценку. Оценки могут быть представлены числами от 1 до 10.




function calculateAverageGrade(grades) {
    let gradeList = grades.split(",");
    let sum = 0;
    for (let i = 0; i < gradeList.length; i++) {
      sum += parseFloat(gradeList[i]);
    }
    let averageGrade = sum / gradeList.length;
    return averageGrade;
  };



//let grades = "8, 7, 9, 6, 8";
//let average = calculateAverageGrade(grades);
//console.log("Средняя оценка: " + average);