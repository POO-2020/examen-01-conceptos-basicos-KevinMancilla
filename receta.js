export default class Receta{
    /**
     * 
     * @param {string} nombre 
     * @param {string} autor 
     * @param {*} ingredientes 
     */
    constructor(nombre, autor,){
        this.nombre = nombre
        this.autor = autor
        this.ingredientes = []
    }

    getIngredientes(ingrediente){
        this.ingredientes.push(ingrediente)
    }

    getCosto(){
        let total=0
        this.ingredientes.forEach( (ingrediente, i) => {
            total = (total + ingrediente.costo)
        })
        return total
    }

    getNumeroIngredientes(){
        this.ingredientes.forEach( (ingrediente, i) => {
            console.log(`${i+1}. ${ingrediente.getDescripcion()}`)
        })
    }

    imprimirEnConsola(){
        console.log(`Receta de: "${this.nombre}" El autor de esta receta es: ${this.autor}`)
        console.log("")
        console.log("------------- Los Ingredientes Son: -------------")
        console.log("")
        console.log(`${this.getNumeroIngredientes()}`)
        console.log(`El costo total para poder hacer esta receta es de $${this.getCosto()} pesos`)
        console.log (" ")
        console.log("¡Listo ya tienes todos los ingredientes necesarios para hacer esta receta!")
        
    }
}