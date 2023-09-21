let ingresos;
let egresos;


function cargarCabecero(){
    presupuesto=totalIngresos()-totalEgresos();
    porcentajeEgreso=totalEgresos()/totalIngresos();
}
function totalIngresos(){
    var totalIngresos=0;
    for( var ingreso=0; ingreso <= ingresos; ingreso++) {
        var totalIngreso=totalIngresos+ingreso;
    }
    return totalIngreso;
}
function totalEgresos(){
    var totalEgreso=0
    for(var egreso; egreso<=egresos; egreso++){
        var totalEgreso=totalEgreso+egreso;
    }
    return totalEgreso;
}
function formatoMoneda(){
    const amount = Number(input.value).toLocaleString("es-MXN", {
        style:"currency",
        currency: "MXN"
    });
}



let agregarDato=()=>{

    let valor=parseInt(document.getElementById("valor").value);
    let descripcion=document.getElementById("descripcion").value;
    let tipo=document.getElementById("tipo").value;

    if(tipo=="ingreso"){
        let newboxent = document.createElement("div");
        newboxent.setAttribute("id","limpiar_estilo");
        newboxent.setAttribute("class","elemento limpiarEstilos");
        let nuevocontenedor=document.getElementById("ingreso_padre");
        nuevocontenedor.insertAdjacentElement("beforeend",newboxent);

        let newboxentdes = document.createElement("div");
        newboxentdes.innerText= descripcion;
        newboxentdes.setAttribute("class","elemento_descripcion");
        let contdes=document.getElementById("limpiar_estilo");
        contdes.insertAdjacentElement("beforeend",newboxentdes);
        

        let newboxentval = document.createElement("div");
        newboxentval.innerText= "+" + valor;
        newboxentval.setAttribute("class","derecha limpiarEstilos");
        let contval=document.getElementById("limpiar_estilo");
        contval.insertAdjacentElement("beforeend",newboxentval);
    }
    if(tipo=="egreso"){
        let newboxent = document.createElement("div");
        newboxent.setAttribute("id","limpiar_estilo");
        newboxent.setAttribute("class","elemento limpiarEstilos");
        let nuevocontenedor=document.getElementById("egreso_padre");
        nuevocontenedor.insertAdjacentElement("beforeend",newboxent);

        let newboxentdes = document.createElement("div");
        newboxentdes.innerText= descripcion;
        newboxentdes.setAttribute("class","elemento_descripcion");
        let contdes=document.getElementById("limpiar_estilo");
        contdes.insertAdjacentElement("beforeend",newboxentdes);
        

        let newboxentval = document.createElement("div");
        newboxentval.innerText= "-" + valor;
        newboxentval.setAttribute("class","derecha limpiarEstilos");
        let contval=document.getElementById("limpiar_estilo");
        contval.insertAdjacentElement("beforeend",newboxentval);
    }
}