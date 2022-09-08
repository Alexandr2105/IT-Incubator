//Используйте геттеры и сеттеры для управления доступом к объекту
class Thermostat {
    constructor(temperature) {
        this._temperature = temperature;
    }

    get temperature() {
        return 5 / 9 * (this._temperature - 32);
    }

    set temperature(value) {
        this._temperature = value*9/5+32;
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius