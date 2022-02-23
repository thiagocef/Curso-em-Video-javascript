let valores = [8, 1, 7, 4, 2, 9]

/* for (let pos = 0; pos < valores.length; pos++) {
    console.log(`Posição: ${pos} Valor: ${valores[pos]}`)
} */


//SIMPLIFICANDO O FOR CONVENCIONAL - FOR.. IN
for (let pos in valores) {
    console.log(`Posição: ${pos} Valor: ${valores[pos]}`)
}
