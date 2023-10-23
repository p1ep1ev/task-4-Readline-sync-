//Задача №6: Расчет времени пути

//Создайте функцию calculateTime(distance, speed),
//которая принимает расстояние и скорость (в км/ч), а затем возвращает время в пути в формате ХХч. ХХм.


function calculateTime(distance, speed) {
    let time = distance / speed;
    let hours = Math.floor(time);
    let minutes = Math.round((time - hours) * 60);
    return hours + "ч. " + minutes + "м.";
  };



//let distance = 100;
//let speed = 50;
//let travelTime = calculateTime(distance, speed);
//console.log("Время в пути: " + travelTime);