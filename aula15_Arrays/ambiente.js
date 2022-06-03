let num = [5, 8, 2, 9, 3]
//num[3] = 6 //adiciona o elemento 6 na posição 3 (índice 4)

console.log(`Cria um índice no final do vetor e adiciona o elemento 7 ${num.push(7)}`) // 

console.log(`Este vetor contém os elementos: ${num} `)

console.log(`Mostra o valor na primeira posição [índice 0]: ${num[0]}`)

console.log(`O comprimento desse vetor é: ${num.length}`)

console.log(`Os elementos em ordem ficam: ${num.sort()}`)

console.log(`Pesquisando o valor 8 dentro do vetor. 8 está na posição: ${num.indexOf(8)}`)
//se o valor não for encontrado, o javascript vai retornar -1

//pesquisando o valor 4 que não existe
let pos = num.indexOf(4)
if (num == -1) { //se ele não existir, retorna -1
    console.log(`Número não encontrado!`)
} else {
    console.log(`O valor 4 está na posição ${pos}`)
}