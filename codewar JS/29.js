function divisibleBy(numbers, divisor) {
    let arr = [];
    for (let a = 0; a < numbers.length; a++) {
        if (numbers[a] % divisor == 0) {
            arr.push(numbers[a]);
        }
    }
    return arr;
}