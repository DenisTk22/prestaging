/**
 * Дан массив food и коллекция players. Создайте одну общую функцию сортировки, которая бы позволяла сортировать food по алфавиту от А-Я, а также игроков коллекции по ключу surname. И отсортируйте данные массивы, с помощью созданной функции.
 */

const food = ["Apple", "Melon", "Banana", "Yogurt", "Orange", "Stawberry"];

const players = [
    {
        id: 1,
        name: 'Cristiano',
        surname: 'Ronaldo',
        club: 'Juventus',
    },
    {
        id: 2,
        name: 'Lionel',
        surname: 'Messi',
        club: 'Barcelona',
    },
    {
        id: 3,
        name: 'Karim',
        surname: 'Benzema',
        club: 'Real Madrid',
    },
    {
        id: 4,
        name: 'Maxi',
        surname: 'Gomez',
        club: 'Valencia',
    },
    {
        id: 5,
        name: 'Quincy',
        surname: 'Promes',
        club: 'Spartak',
    },
];

function sorting(a, b) {
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }
    return 0;
}

food.sort((a, b) => sorting(a, b)); // происходит мутирование основного массива
players.sort((a, b) => sorting(a.surname, b.surname)); // происходит мутирование основной коллекции

console.log(food);
console.log(players);