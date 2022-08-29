function abbrevName(name) {
    let s = name.split(" ");
    let s1;
    let s2 = "";
    for (let a = 0; a < s.length; a++) {
        s1 = s[a];
        s1 = s1.toUpperCase();
        s2 += s1.substring(0, 1) + ".";
    }
    return s2.slice(0, -1);
}