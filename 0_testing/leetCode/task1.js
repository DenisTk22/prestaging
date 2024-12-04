
const scoba  = (str) => {
    let sum = 0;
    str.split('').forEach((value) => {
        if (sum < 0) return false;
        if (value === '(') {
            sum = sum + 1;
            console.log(sum);
        } else if (value === ')') {
            sum = sum - 1;
            console.log(sum);
        } 
    })
    console.log(sum)
    if (sum === 0) return true
    else return false
}

const sc = '((()))()';

// console.log(sc.split(''))
console.log(scoba(sc));