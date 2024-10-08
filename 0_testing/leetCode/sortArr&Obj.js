/**
 * Учитывая массив arr и функцию fn, верните отсортированный массив sortedArr. Вы можете предположить, что fn возвращает только числа, и эти числа определяют порядок сортировки sortedArr . sortedArr должен быть отсортирован по возрастанию с помощью вывода fn.

Вы можете предположить, что fn никогда не будет дублировать числа для данного массива.
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a,b)=>{
        if (fn(a)>fn(b)) return 1;
        if (fn(a)<fn(b)) return -1;
        return 0;
    })
};