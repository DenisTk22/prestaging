/**
 * Дана коллекция players. Найдите в ней объект с информацией об игроке с фамилией Messi и сохраните в новую переменную messi.
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

const messi = players.find((player) => {
    return player.surname === 'Messi';
});

console.log(messi)