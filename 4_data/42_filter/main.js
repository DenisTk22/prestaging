/**
 * 1) Дан массив строк names. Создайте новый массив shortNames, сохранив в него только значения из оригинального массива, длина которых не превышает 5 символов.

2) Дана коллекция products. Создайте на базе нее новую коллекцию cheapProducts, поместив в нее только элементы оригинальной коллекции, ключ price в которых ниже 300.

3) Дана коллекция developers, где у каждого элемента имеется свойство skills. Создайте новую коллекцию tsDevelopers, добавив туда только те элементы оригинальной коллекции, у которой в массиве skills есть значение 'TypeScript'.
 */

const names = ['Mikhail', 'Ivan', 'Albert', 'John', 'Ian', 'Petr', 'Alexandr', 'Oleg', 'Jaroslav', 'Vsevolod'];
const products = [
    {
        id: 1,
        name: 'Intro to JavaScript',
        category: 'books',
        price: 150,
    },
    {
        id: 2,
        name: 'Intro to CSS',
        category: 'books',
        price: 120,
    },
    {
        id: 3,
        name: 'Deep dive into JavaScript',
        category: 'books',
        price: 350,
    },
    {
        id: 4,
        name: 'Intro to PHP',
        category: 'books',
        price: 250,
    },
    {
        id: 5,
        name: 'Deep dive into PHP',
        category: 'books',
        price: 350,
    },
];

const developers = [
    {
        id: 1,
        fullName: 'Ivan Ivanov',
        skills: ['HTML', 'CSS', 'Git', 'Gulp', 'Pug']
    },
    {
        id: 2,
        fullName: 'Petr Petrov',
        skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'npm']
    },
    {
        id: 3,
        fullName: 'Ian Melnikov',
        skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'TypeScript']
    }
]

const shortNames = names.filter((value) => {
    return value.length <= 5;
})

const cheapProducts = products.filter((value) => {
    return value.price < 300;
})

const tsDevelopers = developers.filter((value) => {
    return (value.skills.includes('TypeScript'));

})

// console.log(shortNames)
// console.log(cheapProducts)
console.log(tsDevelopers)