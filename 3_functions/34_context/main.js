// Дан объект supporter1. Опишите его метод chant, при вызове которого с задержкой в 1 секунду в консоль выводится сообщение "Forza Milan".
// Затем привяжите к объекту supporter2 метод chant таким образом, чтобы при вызове спустя 1 секунду в консоль выводилось сообщение "Forza Inter".

const supporter1 = {
    club: 'Milan',
    chant() {
        setTimeout(() => {
            console.log("Forza " + this.club)
        }, 1000);
    }
}

const supporter2 = {
    club: 'Inter',
}

supporter2.chant = supporter1.chant.bind(supporter2);

supporter1.chant()
supporter2.chant()