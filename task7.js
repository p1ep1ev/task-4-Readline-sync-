//Задача №7: Подсчет количества слов в строке

//Напишите функцию countWords(sentence), которая принимает строку и возвращает количество слов в ней.





function countWords(sentence) {
    let words = sentence.split(" ");
    return words.length;
  };


//let sentence = "Это предложение содержит семь слов.";
//let wordCount = countWords(sentence);
//console.log("Количество слов: " + wordCount);