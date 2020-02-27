import Cantidad from "./cantidad.js"
import Ingrediente from "./ingrediente.js"
import Receta from "./receta.js"

class Main{
    constructor(){
        this.unidad1 = "Kilos"
        this.unidad2 = "Gramos"

        this.cantidad = new Cantidad(127,this.unidad1)
        this.cantidad2 = new Cantidad(500, this.unidad2)
        this.cantidad3 = new Cantidad(50, this.unidad2)

        this.ingrediente = new Ingrediente(this.cantidad, "Huevos", 350)
        this.ingrediente2 = new Ingrediente(this.cantidad2, "Jamon", 23 )
        this.ingrediente3 = new Ingrediente(this.cantidad3, "Sal", 123)

        this.receta = new Receta("Huevos con jamon", "Kevin Mancilla")
    }

    getDescripcion(){
        console.log(`la cantidad es de  ${this.cantidad.getDescripcion()}`)
        console.log(`la cantidad es de  ${this.cantidad2.getDescripcion()}`)
    }

    getIngrediente(){
        console.log(this.ingrediente.getDescripcion())
        console.log(this.ingrediente2.getDescripcion())
    }

    getReceta(){
        this.receta.getIngredientes(this.ingrediente)
        this.receta.getIngredientes(this.ingrediente2)
        this.receta.getIngredientes(this.ingrediente3)
        this.receta.imprimirEnConsola()
    }
}

let verificar = new Main ()

verificar.getReceta()


