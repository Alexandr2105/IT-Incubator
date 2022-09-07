//Используйте рекурсию для создания диапазона чисел
function rangeOfNumbers(startNum, endNum) {
    if(startNum>endNum){
        return [];
    }else {
        const arr=rangeOfNumbers(startNum+1,endNum);
        arr.unshift(startNum);
        return arr;
    }
}

console.log(rangeOfNumbers(2,6));