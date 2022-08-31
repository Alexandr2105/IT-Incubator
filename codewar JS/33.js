function powersOfTwo(n) {
    let arr = [];
    for (let a = 0; a <= n; a++) {
        arr.push(Math.pow(2, a));
    }
    return arr;
}