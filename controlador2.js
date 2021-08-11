//1. Almaceno la informacion general de los productos
let consolas={
    nombres:Array("PS5","XBOX Serie X", "Nintendo Switch"),
    precios:Array(750,700,409),
    pesos:Array(14.2,13.1,4.75)
}


//2. Calcular el costo del casillero
function calcularCostoCasillero(pesoConsola,cantidad){

    let costoCasillero=0;
    let pesoTotalEnvio=pesoConsola*cantidad;

    if(pesoTotalEnvio<=20){

        costoCasillero=85;

    }else{ //Me paso del paso

        let pesoExtra=pesoTotalEnvio-20;
        costoCasillero=85+(pesoExtra*2);

    }
    
    return costoCasillero;
}

//3. Calcular el costo de impuestos
function calcularCostoImpuestos(costoConsola,cantidad){

    const IMPUESTO_PAIS=114;
    const VALOR_SEGURO=7;

    let costoCompra=costoConsola*cantidad;
    let costoTotal=costoCompra+IMPUESTO_PAIS+VALOR_SEGURO;

    return costoTotal;

} 

//4. convertir dolares en pesos
function convertiraPesos(precioDolares){
    
    const TRM=3932; //3932 pesos equivalen a 1 dolar
    let precioPesos= precioDolares*TRM;

    return precioPesos;



}

//FLUJO COMPRA

//1. Obtener el costo del casillero de una compra
//SUPONER QUE EL USUARIO ELIGE PS5
let pesoPS5=consolas.pesos[0];
let cantidad=1;
let costoCasillero=calcularCostoCasillero(pesoPS5,cantidad);

//2. Obtener el costo del producto+impuestos
let precioPS5=consolas.precios[0];
let costoProductoImpuestos=calcularCostoImpuestos(precioPS5,cantidad);

//3. Obtener el total de la compra 
let totalCompra=costoCasillero+costoProductoImpuestos;
console.log(`El costo total de la compra fue de: $${totalCompra} USD`);

//4. Obtener el total de la compra en PESOS colombianos
let totalPesos=convertiraPesos(totalCompra);
console.log(`El costo total de la compra fue de: $${totalPesos} COP`);