//Используйте параметр Rest с параметрами функции
const sum = (...args) => args.reduce((a, b) => a + b, 0);