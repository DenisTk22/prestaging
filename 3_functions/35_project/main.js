/**
 * Создайте функцию censor, которая не принимает аргументов. Функция должна возвращать новую функцию, принимающую опционально 1 или 2 параметра (оба - строки).
1) Когда возвращаемая функция принимает 2 параметра, то она ничего не возвращает, а сохраняет полученные знания как пару (пара - это массив с 2мя значениями).
2) Когда возвращаемая функция принимает 1 параметр, то она возвращает полученную строку, заменив в ней все слова, согласно ранее сохранённым парам.
Пример использования:
const changeScene = censor();
changeScene('PHP','JS');
changeScene('backend', 'frontend')
console.log(changeScene('PHP is the most popular programming language for backend web-development'));
 */

const arr2 = [];
// function censor() {

function str(str1, str2 = '') {

    if (str2 !== '') {
        const arr1 = [];
        arr1.push(str1, str2);
        // console.log(arr1);
        arr2.push(arr1)
        console.log(arr2);
    } else {
        let str1ToArr = str1.split(' '); // из введенной строки делаем массив элементов
        for (let i = 0; i < arr2.length; i++) { // arr2 - массив с массивами
            const elem = arr2[i]; // elem массив из двух значений [0, 1]
            for (let j = 0; j < str1ToArr.length; j++) {
                if (str1ToArr[j] === elem[0]) {
                    str1ToArr[j] = elem[1];
                } else if ((str1ToArr[j] === elem[1])) {
                    str1ToArr[j] = elem[0]
                }
            } 
        }
        return str1ToArr.join(' '); // из массива возвращаем строку
    } 
}
// }

str('PHP', 'JS');
str('backend', 'frontend');
str('popular', 'favorite')

console.log(str('PHP is the most popular programming language for backend web-development')); // -->JS is the most favorite programming language for frontend web-development


