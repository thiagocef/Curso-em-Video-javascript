let cadastro = {nome:'Thiago', 
sexo: 'M', 
peso: '85.4',
engordar(p = 0) {
    console.log(`Engordou`)
    this.peso += p
    }
}

cadastro.engordar(2.0)
console.log(`${cadastro.nome} pesa ${cadastro.peso}`)


