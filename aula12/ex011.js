var idade = 66
if((idade >= 16 && idade < 18) || (idade > 65)){
    console.log(`${idade} anos. \nPode votar, mas não é obrigatório`)

}   else if (idade < 16){
        console.log(`${idade} anos. \nAinda não pode votar`)
        }

    else {
    console.log(`${idade} anos. \nVota obrigatoriamente`)
}
