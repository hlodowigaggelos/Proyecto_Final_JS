class Ingreso extends Dato{
    static contadorIngresos=0;
    constructor (descripcion, valor) {
        console.log(Dato,descripcion);
        console.log(Dato,valor);
        this._id=Dato.contadorIngresos;
    }
    get id(){
        return this._id;
    }
}