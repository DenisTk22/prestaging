/**
 * 
 * @param {Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.}

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.} nums 
 * @param {*} fn 
 * @param {*} init 
 * @returns 
 */

const reduce = function (nums, fn, init) {
    for (let i = 0; i < nums.length; i++) {
        init = fn(init, nums[i])
    } return init
}

const arr1 = [1, 2, 3, 4];
const fn1 = function sum(accum, curr) { return accum + curr; };
const init1 = 0;
const result1 = reduce(arr1, fn1, init1);

console.log(result1); //10

const arr2 = [1, 2, 3, 4];
const fn2 = function sum(accum, curr) { return accum + curr * curr; };
const init2 = 100;
const result2 = reduce(arr2, fn2, init2);

console.log(result2); //130

const arr3 = [];
const fn3 = function sum(accum, curr) { return 0; };
const init3 = 25;
const result3 = reduce(arr3, fn3, init3);

console.log(result3); //25