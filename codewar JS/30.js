function billboard(name, price = 30) {
    let p = 0;
    for (let a = 0; a < name.length; a++) {
        p += price;
    }
    return p;
}