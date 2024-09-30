/**
 * Дана функция getInfo, возвращающая массив в результате вызова. Создайте переменные carName и carSeries и при помощи деструктуризации назначьте ей значения, возвращаемые функцией.
 */

function getInfo() {

    const [carName, carSeries] = ['BMW', 'X3']

    return [carName, carSeries];
}

console.log(getInfo());