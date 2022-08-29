function digitize(n) {
    let s = n + "";
    let a = s.split("");
    let d = [];
    for (const i of a) {
        d.push(Number(i));
    }
    return d.reverse();
}