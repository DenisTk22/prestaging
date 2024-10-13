const x = 1; // не будет доступна вовне

function addOne(num) {
    return x + num;
}


export function sum(a, b) {
    return a + b
}
// или
export { // именованный экспорт
    sum,
    addOne
}