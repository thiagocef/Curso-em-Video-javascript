//VARIÁVEL PODE RECEBER UMA FUNÇÃO
var mult = function multiplicar(x=2) {// x valerá 2 se o parâmetro não for passado na chamada da função
    return x * 2
}

console.log(mult(3))