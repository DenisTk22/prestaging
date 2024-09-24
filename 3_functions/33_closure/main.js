/**
 * Создайте функцию addByX. Которая принимает 1 параметр (число) и возвращает новую функцию, которая также принимает число и возвращает его сумму с исходным параметром.
Примеры использования:
const addByTwo = addByX(2);
addByTwo(3); // 5
addByTwo(5); // 7

const addByFour = addByX(4);
addByFour(3); // 7
addByFour(5); // 9
 */

function addByX(a) {
    function sum(b) {return a + b;}
    return sum;
}

const addByTwo = addByX(2); /**Функция addByX принимает число в качестве параметра а */
addByTwo(3); // 5 /**Функция addByTwo принимает число в качестве парамера b */

console.log(addByTwo(3))
console.log(addByTwo(5))

const addByFour = addByX(4);

console.log(addByFour(3))
console.log(addByFour(5))