const lista1 = [
    100,
    200,
    300,
    500
];


 //  let sumaLista = 0;
/*for (let i = 0; i < lista.length;i++) {
    sumaLista = sumaLista + lista[i]
}*/

function calcularMediaAritmetica(lista){
 
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;  
        }
    );

    const promedioLista1 = sumaLista / lista.length
    return promedioLista1
}