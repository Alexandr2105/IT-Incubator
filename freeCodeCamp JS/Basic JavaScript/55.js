// Понимание неопределенного значения, возвращаемого функцией
let sum = 0;

function addThree() {
    sum = sum + 3;
}
function addFive() {
    sum += 5;
}
addThree();
addFive();