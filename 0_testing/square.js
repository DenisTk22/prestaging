// метод касательных
function sqrt(number) {
    let t;     
    let squareRoot = number / 2;     
    do {
        t = squareRoot;
        squareRoot = (t + (number / t)) / 2;
    } while ((t - squareRoot) != 0);     
    return squareRoot;
}

// console.log(sqrt(100))

let a = {a:1}; 
let b = a;
// let b={a:1}; 

let c = 4;
let d = 4;

// console.log(b)
// console.log(Boolean(a==b)) // false
// console.log(Boolean(c==d))

// arr = [1, null];

// if (!arr[0]) {
//     console.log('пусто') 
// } else console.log('не постой')

var isEmpty = function(obj) {
    if (JSON.stringify(obj).length <= 2) {
        return true
    } else return false
};

const arr1 = [];
const arr2 = [1, 2];
const obj1 = {};
const obj2 = {2:2};


// console.log(JSON.stringify(arr1).length)


    var chunk = function(arr, size) {
        const result = [];
        for (let i = 0; i < arr.length; i += size) { // i = i + size - шаг
            result.push(arr.slice(i, i + size)); // slice возвращает новый массив
            console.log(result)
        }
        return result;
    };


console.log(chunk([1, 2, 3],2));