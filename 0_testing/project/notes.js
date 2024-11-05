// import {useState} from 'react';

const notifications = [
    {
        id: 1,
        note: 'Появился новый пользователь',
        isRead: false
    },
    {
        id: 2,
        note: 'Вам новое сообщение',
        isRead: true
    },
    {
        id: 3,
        note: 'Вам поставили лайк',
        isRead: false
    }
];

// notifications[0].isRead = true;
// console.log(notifications);

let isRead = notifications.filter((item) => item.isRead === false).map((note) => note.isRead);

// console.log(isRead);

// const [state, setState] = useState();
// const changeRead = (note) => {
//     setState(true)
// }

// const modifiedEmployees = employees_data.map(obj => {
//     if (obj.employee_id === 2) {
//         return { ...obj, employee_name: "rahul" };
//     }
//     return obj;
// });

const localNotes = [...notifications];

// const read = () => { 
//     const read = notifications.map((nota) => {
//     if (nota.isRead === false) {
//         return {...nota, isRead: 'true'};
//     } return nota;
// })
//     return read;
// }
let read = [...notifications];

const readEl = (id) => { 
    read = notifications.map((nota) => {
    if (nota.id === id) {
        return {...nota, isRead: true};
    } return nota;
})
    return read;
}

console.log(readEl(3));
console.log(read)