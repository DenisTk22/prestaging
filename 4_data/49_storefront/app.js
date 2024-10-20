const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400
    },
];

let order = [];
let itemsId = []

function addToBasket(productId) {
    if (itemsId.includes(productId)) {
        alert('Такой товар уже есть в корзине')
    } else {
        products.forEach((item) => {
            if (productId === item.id) {
                itemsId.push(item.id)
                order.push(item)
            }
        })
    }


    // TODO: добавить проверку наличия товара в заказе (при наличии выдать alert, что товар уже в корзине)

    // TODO: если товар еще не в корзине, добавить его из массива products

    // Эти строчки не трогаем, они отвечают за переотрисовку страницы
    renderCart();
    rerenderTotalPrice();
}

function removeFromBasket(productId) {
    // TODO: описать логику удаления товара из корзины
    order.forEach((item, i) => {
        if (item.id === productId) {
            order.splice(i, 1);
            indexId = itemsId.indexOf(productId);
            itemsId.splice(indexId, 1);
        }
    })
    // Эти строчки не трогаем, они отвечают за переотрисовку страницы
    renderCart();
    rerenderTotalPrice();
}


function rerenderTotalPrice() {
    let totalPrice = 0;
    // TODO: опишите функционал подсчета общей стоимости заказа
    order.forEach((item) => {
        totalPrice += item.price;
    })

    // Не меняйте эту строчку
    document.getElementById('total').innerText = totalPrice;
}

// Этот метод остается без изменений
function renderCart() {
    const cart = document.getElementById('basket-items');

    cart.innerHTML = '';
    order.forEach(item => {
        const el = document.createElement('li');
        el.innerText = item.title;
        el.onclick = () => removeFromBasket(item.id);
        cart.appendChild(el);
    })
}