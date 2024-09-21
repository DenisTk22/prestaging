var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это съедобное', 'это фрукт'],
    tries: 3,
    checkAnswer(answer) {
        // TODO: написать логику проверки правильного ответа
        // alert для пользователя, console.log()
        if (this.tries <= 0) {
            console.log('Игра окончена! Перезагрузите страницу');
            return alert('Игра закончена! Перезагрузите страницу');
        }

        if (answer.toLowerCase() === this.correctAnswer) {
            alert('Правильный ответ');
            console.log('Правильный ответ');
            this.tries = 0;
        } else if (this.tries - 1 > 0) {
            this.tries--;
            alert(`Неправильный ответ. \nПодсказка: ${this.hints[this.hints.length - this.tries]}`);
            console.log(`Неправильный ответ. \nПодсказка: ${this.hints[this.hints.length - this.tries]}`);
        }
        else {
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

    if (guessedAnswer && guessedAnswer.trim().length !== 0) {
        // TODO: вызвать функцию checkAnswer у объекта загадки, передав туда ответ
        riddle.checkAnswer(guessedAnswer);
    } else {
        alert('Нужно ответить!');
        console.log('Нужно ответить!');
    }
}