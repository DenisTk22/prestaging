function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('В функцию не переданы числа для сложения!')
    }
    return a + b;
}

try {
    sum(4, 5);
} catch (error) {
    console.error(error.message);
    console.log(error);
}

// sum();