import Cantidad from "./cantidad.js"
import Ingrediente from "./ingrediente.js"
import Receta from "./receta.js"

class Main{
    constructor(){
        this.unidad1 = "Kilos"
        this.unidad2 = "Litros"

        this.cantidad = new Cantidad(127,this.unidad1)
        this.cantidad2 = new Cantidad(5, this.unidad2)

        this.ingrediente = new Ingrediente(this.cantidad, "sal", 350)
        this.ingrediente2 = new Ingrediente(this.cantidad2, "leche", 23 )
    }

    getDescripcion(){
        console.log(`la cantidad es de  ${this.cantidad.getDescripcion()}`)
        console.log(`la cantidad es de  ${this.cantidad2.getDescripcion()}`)
    }

    getIngrediente(){
        console.log(this.ingrediente.getDescripcion())
        console.log(this.ingrediente2.getDescripcion())
    }
}

let verificar = new Main ()

verificar.getDescripcion()
verificar.getIngrediente()


