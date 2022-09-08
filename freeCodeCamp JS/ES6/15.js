//Создание строк с использованием шаблонных литералов
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    let failureItems=[];
    for (let a of arr) {
        failureItems.push(`<li class="text-warning">${a}</li>`);
    }
    return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);