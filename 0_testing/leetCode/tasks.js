/**проверить на закрытие скобок */

// const sc = ')()(';

// const scobs = (str) => {
// let sum = 0;

//     str.split('').forEach(el => {
//         console.log(sum);
//         if (sum < 0) return false;
//         if (el === '(') {
//             sum = sum + 1;
//         } else if (el === ')') {
//             sum = sum - 1;
//         }
//     });
//     if (sum === 0) return true
//     else return false
// }

// console.log((scobs(sc)));
/**
 * Во входном файле записан текст (вы можете читать данные из sys.stdin, подключив библиотеку sys). Словом считается последовательность непробельных символов идущих подряд, слова разделены одним или большим числом пробелов или символами конца строки. Определите, сколько различных слов содержится в этом тексте.
 */

const str = `She sells sea shells on the sea shore;
The shells that she sells are sea shells I'm sure.
So if she sells sea shells on the sea shore,
I'm sure that the shells are sea shore shells.
`;

const spaces = (str) => {
    const str1 = str.replaceAll('\n', ' ');
    const arr = str1.split(' ');
    console.log(arr);
    const arr2 = new Set(arr.filter(el => { return (el !== '' )}))
    console.log(arr2);
    console.log(arr2.size);
}

spaces(str);
