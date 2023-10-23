//Задача №4: Расчет периметра и площади прямоугольника

//Создайте функцию calculateRectangleProperties(width, height),
//которая принимает ширину и высоту прямоугольника, а затем возвращает объект с его периметром и площадью.



function calculateRectangleProperties(width, height) {
    let perimeter = 2 * (width + height);
    let area = width * height;
    return { perimeter: perimeter, area: area };
  };


//let width = 5;
//let height = 10;
//let rectangleProperties = calculateRectangleProperties(width, height);
//console.log("Периметр прямоугольника: " + rectangleProperties.perimeter);
//console.log("Площадь прямоугольника: " + rectangleProperties.area);