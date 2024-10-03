/** */

const filter = function (arr, fn) {
    const filteredArr = [];
    arr.forEach((item, i) => {
        if (fn(item, i)) {
            filteredArr.push(item);
        }
    })
    return filteredArr;
};

arr1 = [0, 10, 20, 30];
const fn1 = function greaterThan10(n) { return n > 10; };
const result1 = filter(arr1, fn1);

console.log(result1);

arr2 = [1, 2, 3];
const fn2 = function firstIndex(n, i) { return i === 0; };
const result2 = filter(arr2, fn2);

console.log(result2);

arr3 = [-2, -1, 0, 1, 2];
const fn3 = function plusOne(n) { return n + 1 };
const result3 = filter(arr3, fn3);

console.log(result3);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}