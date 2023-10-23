//Задача №3: Расчет скидки в магазине

//Напишите функцию calculateDiscount(price, discountPercentage),
//которая принимает цену товара и процент скидки, а затем возвращает сумму с учетом скидки.


function calculateDiscount(price, discountPercentage) {
    let discount = price * (discountPercentage / 100);
    let discountedPrice = price - discount;
    return discountedPrice;
  };


//let price = 100;
//let discountPercentage = 20;
//let discountedPrice = calculateDiscount(price, discountPercentage);
//console.log("Сумма с учетом скидки: " + discountedPrice);