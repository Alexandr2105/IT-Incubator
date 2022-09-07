//Перебор массива с помощью цикла for
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let a = 0; a < myArr.length; a++) {
    total += myArr[a];
}
console.log(total);