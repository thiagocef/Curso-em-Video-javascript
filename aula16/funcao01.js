function parImpar (n) {
    if(n % 2 == 0) {
        return `par`
    } else {
        return `ímpar`
    }
}
let res = parImpar(2)

console.log(`O número é ${res}`)