/**
 * Дана коллекция players. Создайте новую переменную jsonPlayers и сохраните в ней оригинальную коллекцию в формате JSON.
 */

const players = [
    {
        id: 1,
        name: 'Andres',
        surname: 'Iniesta',
        club: 'Vissel Cobe',
    },
    {
        id: 2,
        name: 'Eden',
        surname: 'Hazard',
        club: 'Real Madrid',
    },
    {
        id: 3,
        name: 'Mo',
        surname: 'Salah',
        club: 'Liverpool',
    },
    {
        id: 4,
        name: 'Lionel',
        surname: 'Messi',
        club: 'Barcelona',
    },
];

const json = players.join

console.log(json);