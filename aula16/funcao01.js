function parImpar (n) { //n como parâmetro
    if(n % 2 == 0) {
        return `par`
    } else {
        return `ímpar`
    }
}
let res = parImpar(3) //chamando a função com o parâmetro

console.log(`O número é ${res}`)