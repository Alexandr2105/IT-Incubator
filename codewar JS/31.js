function reverseWords(str) {
    let a = str.split(" ");
    a.reverse();
    let s = "";
    for (const i of a) {
        s += i + " ";
    }
    return s.trim(); // reverse those words
}