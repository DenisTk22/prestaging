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

function censor() {
    const arrayOfPairs = [];

    function swaping(str1, str2 = '') {
        if (str2 !== '') {
            const pairs = [];
            pairs.push(str1, str2);
            arrayOfPairs.push(pairs)
        } else {
            for (let i = 0; i < arrayOfPairs.length; i++) { // arrayOfPairs - массив с массивами
                const elem = arrayOfPairs[i]; // elem массив из двух значений [0, 1]
                const text = new RegExp(`${elem[0]}`, 'gi');
                str1 = str1.replace(text, `${elem[1]}`);
            }
            return str1
        }
    } return swaping;
}

const changeScene = censor();
changeScene('PHP', 'JS');
changeScene('backend', 'frontend');
changeScene('popular', 'favorite');
changeScene('fo', 'of');
console.log(changeScene('PHP is the most popular programming language for backend web-development'));// -->JS is the most favorite programming language ofr frontend web-development