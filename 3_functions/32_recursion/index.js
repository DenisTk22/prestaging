/**Напишите функцию getLength, которая в качестве параметра будет принимать массив и рекурсивно высчитывать его длину (количество элементов). По условию задачи нельзя использовать встроенное свойство length массива. Используйте метод pop для удаления элементов массива, чтобы подсчитать итоговое количество. */
let arrLength = 0;
function getLength(array) {
	if (!array.pop()) {return 0}
	array.pop()
	return arrLength + +!Boolean(getLength(array))
}

const array = [4, 45, 89, 5, 8, 33, 10]
// array.pop()
console.log(getLength(array))
// console.log(!Boolean(getLength(array)))