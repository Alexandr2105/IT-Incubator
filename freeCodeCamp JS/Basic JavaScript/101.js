//Вложение циклов
function multiplyAll(arr) {
    let product = 1;
    for (let a = 0; a < arr.length; a++) {
        for (let i = 0; i < arr[a].length; i++) {
            product *= arr[a][i];
        }
    }
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);