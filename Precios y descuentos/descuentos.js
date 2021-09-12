/*const precioOriginal = 120;
const descuento = 18;*/


function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento =  100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickCalcularPrecio(){
    const inputPrecio = document.getElementById("inputPrecio");
    const inputDescuento = document.getElementById("inputDescuento");
    var precio = inputPrecio.value;
    var descuento = inputDescuento.value;

    precio = calcularPrecioConDescuento(precio,descuento);
    const resultadoPrecio = document.getElementById("resultadoPrecio");

    const inputCupon = document.getElementById("inputCupon");
    const nombreCupon = inputCupon.value;

    //Cupones
    const cupones = [
        {nombre: "inviero2021",
        descuento: 25},
        {nombre: "primavera2021",
        descuento: 50},
        {nombre:"verano2021",
        descuento: 75},
        {nombre:"otoño2021",
        descuento: 90}
    ];

    const buscarCupon = cupones.find(function(cupon){
        return cupon.nombre === nombreCupon;
    });

    if(nombreCupon != ""){
        if(!buscarCupon){
            alert("El cupon "+nombreCupon+" no es valido");
            
        }else{
           descuento = buscarCupon.descuento;
           precio = calcularPrecioConDescuento(precio,descuento);          
        }        
    }
    resultadoPrecio.innerText = "El precio con descuento es de: $"+precio;
}




