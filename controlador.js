//1 necesitp almacenar el precio en dolares
//ps5-xbox seriex ninytendo swith
let preciosConsolas=Array(750,700,409);
//2 almacenar la cantidad de consola
let cantidad=1;
//3 calcular el costo del casilleto lb
let pesoConsolas=Array(14.2,13.1,4.75);
let pesoTotal=pesoConsolas[0]*cantidad;
let constoCasillero=0;
if(pesoTotal>=10 && pesoTotal<=20){

    constoCasillero=85; 
}else{
    let diferencia=pesoTotal-20;
    constoCasillero=85+(diferenciaPeso*2);
}
//4 costos de envio+impuestos
const IMPUESTO_PAIS=114;
const VALOR_SEGURO=7;
//5 calculo el costo final de la compra
let costoTotal=(preciosConsolas[0]*cantidad)+constoCasillero+IMPUESTO_PAIS+VALOR_SEGURO;
console.log(costoTotal);