function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) newArray.push(array[i]);
  }
  return newArray;
}
const numbers = [1, 2, 3, 4, 5];

function isOdd(num) { /**Проверка на нечетность -> true / false */
  if (num % 2 !== 0) {
    return true;
  } else return false;
}
function isEven(num) { /**Проверка на четность -> true / false */
  if (num % 2 === 0) {
    return true;
  } else return false;
}

// Для проверки используйте логи (раскомментируйте их после написания функций)
console.log(filterArray(numbers, isEven)); // Должен вывести: [2, 4]
console.log(filterArray(numbers, isOdd)); // Должен вывести: [1, 3, 5]