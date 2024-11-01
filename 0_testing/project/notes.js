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
        id: 1,
        note: 'Вам поставили лайк',
        isRead: false
    }
];

let isRead = notifications.filter((item) => item.isRead === false).map((note) => note.isRead);

console.log(isRead);