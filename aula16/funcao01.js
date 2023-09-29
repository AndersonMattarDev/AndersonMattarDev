function parimpar(n) {
    if(n%2 == 0){
        return 'par!'
    } else {
        return 'impar!'
    }
}

let res = parimpar(146)

console.log(res);

console.log(parimpar(5)) //pode ser passado direto no console.log sem criar a variavel