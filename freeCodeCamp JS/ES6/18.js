//Используйте синтаксис класса для определения функции конструктора
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'