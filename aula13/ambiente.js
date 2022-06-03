/* function comerPizza() {
    var c = 1

    while(c <= 8){
        console.log(`Fatia ${c}`)
        
        if(c % 2 == 0) {
            console.log(`Pizza de queijo`)
        } else {
            console.log(`Pizza de frango`)
        }
        c++
    }
} */
console.log = comerPizza()

function encherCopo(){
    var c = 1
    console.log(`Enchendo copo...`)

    do {
        console.log(`Copo ${c}0% cheio!`)

        if(c == 5) {
            console.log(`Metade do copo cheio!`)
        }
        c++
         
    } while (c <= 10)
}
console.log = encherCopo()