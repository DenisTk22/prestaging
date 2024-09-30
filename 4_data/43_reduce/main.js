/**
 * Дана коллекция товаров в корзине order. У каждого товара есть цена price и количество quantity.
Подсчитайте общую стоимость товаров в корзине и сохраните значение в переменной totalPrice.
 */
const order = [
    {
        id: 1,
        name: 'Лопата',
        price: 1000,
        quantity: 1,
    },
    {
        id: 2,
        name: 'Удочка',
        price: 1200,
        quantity: 2,
    },
    {
        id: 3,
        name: 'Ведро',
        price: 500,
        quantity: 3,
    },
    {
        id: 4,
        name: 'Мороженое',
        price: 100,
        quantity: 8,
    },
];

const totalPrice = order.reduce((acc, value) => {
    return acc = acc + (value.price * value.quantity);
}, 0)

console.log('Общая сумма: ', totalPrice)