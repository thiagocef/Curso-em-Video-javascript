let valores = [8, 1, 7, 4, 2, 9]

//pos vai de 0 até o tamanho do vetor valores
//e mostrar qual valor de cada indice
/* for (let pos = 0; pos < valores.length; pos++) {
    console.log(`Posição: ${pos} Valor: ${valores[pos]}`)
} */


//SIMPLIFICANDO O FOR CONVENCIONAL -- SÓ FUNCIONA COM ARRAY E OBJECT
//- FOR.. IN
for (let pos in valores) {
    valores.sort() //coloca os valores em ordem
    console.log(`Posição: ${pos} Valor: ${valores[pos]}`)
}
