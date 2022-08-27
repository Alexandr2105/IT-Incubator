function expressionMatter(a, b, c) {
    let maxNumber = 0;
    if (a * (b + c) > maxNumber) {
        maxNumber = a * (b + c);
    } if (a * b * c > maxNumber) {
        maxNumber = a * b * c;
    } if ((a + b) * c > maxNumber) {
        maxNumber = (a + b) * c;
    } if (a + b + c > maxNumber) {
        maxNumber = a + b + c;
    }
    return maxNumber;
}