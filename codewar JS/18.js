function fakeBin(x) {
    let a = x.split("");
    let b="";
    for(let i=0;i<a.length;i++){
        if(a[i]<5){
            b+="0";
        }else{
            b+="1";
        }
    }
    return b;
}