/**
 * 1) Дан массив чисел numbers. Создайте на его основе новый массив doubledNumbers, в котором каждый элемент из оригинального массива умножен на два.
 */
const numbers = [1, 22, 12, 66, 90, 51, 11];

const numByTwo = numbers.map(num => num * 2)

console.log(numByTwo);

/**
 * 2) Дана коллекция developers. Создайте на ее основе новую коллекцию middleDevelopers, увеличив значения ключа salary на 500, а также добавив к ключу skills значение 'TypeScript'.
 */
const developers = [
    {
        id: 1,
        fullName: 'Anton Petrov',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'React'],
        salary: 1000,
    },
    {
        id: 2,
        fullName: 'Ivan Ivanov',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Vue'],
        salary: 950,
    },
    {
        id: 3,
        fullName: 'Albert Sidorov',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'jQuery'],
        salary: 850,
    },
];

const middleDevelopers = developers.map((el) => ({
    ...el,
    skills: [...el.skills, 'TypeScript'],
    salary: el.salary + 500

}))

console.log(middleDevelopers);