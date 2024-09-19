var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это съедобное', 'это фрукт'],
    tries: 3,
    checkAnswer(answer) {
        // TODO: написать логику проверки правильного ответа
        // alert для пользователя, console.log()
        if (answer === this.correctAnswer) {
            alert('Правильный ответ');
            console.log('Правильный ответ');
        } else {
            this.tries--;
            if (this.tries === 0){
                alert('Игра окончена');
                console.log('Игра окончена');
            } else {
                alert('Неправильный ответ');
                console.log('Неправильный ответ');
                if (this.tries === 1) { alert(`Подсказка: ${this.hints[Math.floor(Math.random() * this.hints.length)]}`)}
            }
        }
    },
}

window.onload = function() {
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