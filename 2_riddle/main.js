var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это съедобное', 'это фрукт'],
    tries: 3,
    checkAnswer(answer) {
        // TODO: написать логику проверки правильного ответа
        // alert для пользователя, console.log()
        if (this.tries <= 0) { /**Проверка закончились ли попытки */
            console.log('Игра окончена! Перезагрузите страницу');
            return alert('Игра закончена! Перезагрузите страницу');
        }

        if (answer.toLowerCase() === this.correctAnswer) { /**Проверка на правильность ответа с приведением в нижний регистр */
            alert('Правильный ответ');
            console.log('Правильный ответ');
            this.tries = 0; /**При правильном ответе попытки обнуляются, чтобы завершить игру */
        } else if (this.tries - 1 > 0) { /**Код срабатывает при неправильном ответе и если попытка не последняя, чтобы дать подсказку */
            this.tries--;
            alert(`Неправильный ответ. \nПодсказка: ${this.hints[this.hints.length - this.tries]}`); /**Вывод подсказки из массива подсказок */
            console.log(`Неправильный ответ. \nПодсказка: ${this.hints[this.hints.length - this.tries]}`);
        }
        else { /**Код срабатывает при неправильном ответе и использовании последней попытки */
            this.tries--;
            console.log('Неправильный ответ, попытки закончились!');
            alert('Неправильный ответ, попытки закончились!');
        }
    },
}

window.onload = function () {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    var input = document.getElementsByTagName('input')[0];

    var guessedAnswer = input.value;

    if (guessedAnswer && guessedAnswer.trim().length !== 0) {/**Проверка что строка не пустая и не введены одни пробелы */
        // TODO: вызвать функцию checkAnswer у объекта загадки, передав туда ответ
        riddle.checkAnswer(guessedAnswer);
    } else {
        alert('Нужно ответить!');
        console.log('Нужно ответить!');
    }
}