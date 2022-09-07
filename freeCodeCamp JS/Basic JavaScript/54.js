// Глобальная и локальная область видимости в функциях
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    let outerWear = "sweater"
    return outerWear;
}

myOutfit();