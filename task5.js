//Задача №5: Расчет расстояния между двумя точками в 2D

//Создайте функцию calculateDistance(x1, y1, x2, y2),
//которая принимает координаты двух точек в 2D пространстве и возвращает расстояние между ними.



function calculateDistance(x1, y1, x2, y2) {
    let distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
    return distance;
  };


//let x1 = 3;
//let y1 = 5;
//let x2 = 8;
//let y2 = 12;
//let distance = calculateDistance(x1, y1, x2, y2);
//console.log("Расстояние между точками: " + distance);