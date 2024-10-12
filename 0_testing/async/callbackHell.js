/// Функция загрузки изображения с помощью callback
function loadImage(url, callback) {
    let image = new Image();
    image.src = url;
    image.onload = () => callback(null, image);
    image.onerror = () => callback(new Error("Cannot load image"), null);
}

// используем callback для выполнения нескольких асинхронных действий, для загрузки нескольких картинок
loadImage("image1.png", function (error1, image1) {
    if (error1 != null) {
        alert("Ошибка при загрузке 1-го изображения");
    } else {
        loadImage("image2.png", function (error2, image2) {
            if (error2 != null) {
                alert("Ошибка при загрузке 2-го изображения");
            } else {
                loadImage("image3.png", function (error3, image3) {
                    if (error3 != null) {
                        alert("Ошибка при загрузке 3-го изображения");
                    } else {
                        alert("Все три изображения загружены!");
                    }
                })
            }
        })
    }
});

///Реализуем функцию загрузки изображения с помощью промиссов
function loadImageWithPromise(url) {
    return new Promise(function (resolve, reject) {
        let image = new Image();
        image.src = url;
        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error("Cannot load image " + url));
    })
}

// промис для загрузки одной картинки
let promise = loadImageWithPromise("image1.png");
promise.then(
    function (image) { alert("Картинка " + image.src + " загружена!") },
    function (error) { alert("Ошибка " + error.message) }
)
// реализуем загрузку нескольких картинок с помощью промис
loadImageWithPromise("image1.png")
    .then(
        function (image) {
            console.log(image.src + "loaded")
            return loadImageWithPromise("image2.png") // цепочка остановится пока не загрузится 2я картинка
        },
        function (error) { alert("Ошибка " + error.message) }
    )
    .then(
        function (image) {
            console.log(image.src + "loaded")
            return loadImageWithPromise("image3.png") // цепочка остановится пока не загрузится 3я картинка
        },
        function (error) { alert("Ошибка " + error.message) }
    )
    .then(
        function (image) {
            console.log(image.src + "loaded")
            alert("Все три изображения загружены!")
        },
        function (error) { alert("Ошибка " + error.message) }
    )

// загрузка наскольких картинок с помощью async await
async function func() {
    let i1 = await loadImageWithPromise("image1.png"); // Интерпритатор будет ждать пока не выполнится этот код прежде чем пойти дальше
    let i2 = await loadImageWithPromise("image2.png");
    let i3 = await loadImageWithPromise("image3.png");
    return [i1, i2, i3] // возвращает промис с массивом
}

func()
    .then(function (result) {
        console.log("Результат промиса: " + result);
    })