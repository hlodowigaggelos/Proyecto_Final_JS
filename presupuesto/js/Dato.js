class Dato {
    constructor(descripcion,valor){
        this._descripcion = descripcion;
        this._valor = valor;
    }
    get regresadescripcion(){
        return this._descripcion;
    }
    set recibedescripcion(valor){
        this._descripcion=valor;
    }
    get regresavalor(){
        return this._valor;
    }
    set recibevalor(valor){
        this._valor=valor;
    }
}