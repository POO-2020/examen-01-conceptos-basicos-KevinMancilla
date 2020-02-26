import Cantidad from "./cantidad.js"
import Ingrediente from "./ingrediente.js"
import Receta from "./receta.js"

class Main{
    constructor(){
        this.unidad1 = "Kilos"
        this.cantidad = new Cantidad(127,this.unidad1)

        this.Ingrediente = new Ingrediente(this.cantidad, "azucar", 123)
    }

    getDescripcion(){
        console.log(`la cantidad es de  ${this.cantidad.getDescripcion()}`)
    }

    getIngrediente(){
        console.log(`El ingrediente añadido es ${this.Ingrediente}`)
    }
}

let verificar = new Main ()

verificar.getDescripcion()
verificar.getIngrediente()

