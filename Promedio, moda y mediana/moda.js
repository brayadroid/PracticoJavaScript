const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
];

//Contar cuantas veces aparece cada numero de nuestro array
const lista1Count = {};

//map ayuda a recorrer el array
lista1.map(
    function(elemento){
        
        lista1Count[elemento] ? lista1Count[elemento] += 1 : lista1Count[elemento] = 1;

        /*if(lista1Count[elemento]){
            //si existe el elemento sumale 1.
            lista1Count[elemento] += 1;
        }else{
            lista1Count[elemento] = 1
        }
        //sino existe asignarle 1.*/
    }
);

//convertir el objecto en array.
const arrayList1 = Object.entries(lista1Count).sort((elementoA,elementoB) => elementoA[1] - elementoB[1] );

//Asignamos la ultima posicion el cual es el numero que mas se repite
const moda = arrayList1[arrayList1.length - 1]