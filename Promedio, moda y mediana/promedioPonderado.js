//Definir el conjunto de numeros junto al peso de cada elemento
// Para ponernos en contexto,  muchas veces existen promedios que tienen creditos,
// con este programilla vamos a poder calcular estos.

const notas = [
    {
        curso: "Pre Clinico",
        nota: 10,
        credito: 2
    },
    {
        curso: "Histologia",
        nota: 8,
        credito: 5
    },
    {
        curso: "Anatomia",
        nota: 7,
        credito: 5
    }
];

//Ahora debemos multiplicar cada nota por su peso.
const notaConCredito = notas.map(function(notaObjeto){
    return notaObjeto.nota * notaObjeto.credito;
});

//Ahora vamos a sumar todas las notas con sus respectivos creditos
const sumaNotasConCreditos = notaConCredito.reduce(function(suma=0,nuevoValor){
    return suma + nuevoValor;
});

//creamos nuevo arreglo creditos 
const creditos = notas.map(function(notaObjeto){
    return notaObjeto.credito;
});

const sumaCreditos = creditos.reduce(function(suma=0,nuevoValor){
    return suma + nuevoValor;
});

//Hacer la division entre ambas sumas

const promedioPonderadoNotasConCredito = sumaNotasConCreditos / sumaCreditos;
