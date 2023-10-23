//Задача №12: Реверс строки с исключением слов ****************

//Напишите функцию reverseStringWithException(str, exception), которая принимает строку и слово-исключение,
//а затем возвращает строку с перевернутыми словами, за исключением слова-исключения.
//Например, для Hello World и исключения World результат должен быть World olleH.





function reverseStringWithException(str, exception) {
    let words = str.split(" ");
    let reversedWords = [];
    for (let word of words) {
      if (word !== exception) {
        let reversedWord = word.split("").reverse().join("");
        reversedWords.push(reversedWord);
      } else {
        reversedWords.push(word);
      }
    }
    let reversedString = reversedWords.join(" ");
    return reversedString;
  };

//let string = "Hello World";
//let exception = "World";
//let reversedString = reverseStringWithException(string, exception);
//console.log(reversedString);