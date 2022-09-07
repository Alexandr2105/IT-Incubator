// Локальный охват и функции
function myLocalScope() {
    let myVar;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);