const lista1 = [
    100,
    200,
    500,
    400000000
];
//Funcion comparar para ordenar la lista.
function comparar(a,b){
    console.log("A: "+a+" B:"+b);
    const resultado = a-b;
    console.log("Resultado: "+resultado)
    return resultado;
}
//Ordenar lista
listaOrdenada = lista1.sort((a,b) => a-b );

//Debemos encontrar la mitad de la lista.
const mitadLista1 = parseInt(lista1.length / 2);

//calcular el promedio
function calcularMediaAritmetica(lista){
 
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;  
        }
    );

    const promedioLista1 = sumaLista / lista.length
    return promedioLista1
}

//Funcion para saber si es par
function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        //Impar
        return false;
    }
}


//Si nuestra lista es Impar, solo necesitamos el elemento que se encuentre en la mitad.
//Pero si nuestra lista es Par, necesitaremos calcular el promedio de los dos elementos que
// se encuentren en medio.
let mediana;
if (esPar(lista1.length)){
   const numero1 = lista1[mitadLista1 - 1]
   const numero2 = lista1[mitadLista1]

   const promedioNum1yNum2 = calcularMediaAritmetica([numero1,numero2]);

   mediana = promedioNum1yNum2;
}else{
    mediana = lista1[mitadLista1];
}