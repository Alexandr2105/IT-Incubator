function removeExclamationMarks(s) {
    let str = "";
    for (let a = 0; a < s.length; a++) {
        if (s[a] != "!") {
            str += s[a];
        }
    }
    return str;
}