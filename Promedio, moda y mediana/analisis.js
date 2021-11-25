//Para efectos de analisis necesitamos obtener el salario de las personas.
const salarioPersonas = chile.map(function(personaObjeto){
    return personaObjeto.salario;
}).sort(function(elementoA,elementoB){
    return elementoA - elementoB;
});


//Lo mismo pero usando ArrowFunction
//const salarioPersonasArrow = chile.map((personaObjeto) => (personaObjeto.salario)).sort((a,b)=>(a-b));

//Ahora debemos calcular la mediana
// nota: Acuerdate que debemos saber si es par o impar.
// par: debemos obtener los dos numeros de la mitad y calcular el promedio(media aritmetica).
// impar: debemos obtener el numero de la mitad, ese sera la mediana.

let mediana; 

function esPar(numero){
    return (numero % 2 === 0);
}
/*function esPar(numero){
    if(numero%2 = 0){
        numero1 = salarioPersonas[mitadSalarioPersonas - 1];
        numero2 = salarioPersonas[mitadSalarioPersonas];

    }else{

    }
}*/

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(function(suma=0,nuevoValor){
        return suma + nuevoValor;
    });

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function medianaSalarios(lista) {
    mitadLista = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        numero1 = salarioPersonas[mitadLista - 1];
        numero2 = salarioPersonas[mitadLista];
        
        mediana = calcularMediaAritmetica([numero1,numero2]);  
        return mediana;
    }else{
        mediana = mitadLista;
        return mediana;
    }
}

console.log(medianaSalarios(salarioPersonas));

//AHORA DEBEMOS SEPARAR EL TOP 10% Y CALCULAR LA MEDIANA DE ESE TOP 10%
/*100
200
100
300
400   
500
600
200
400
600
100
200
100
300
400   
500
600
200
400
600

//5  sacar el 10% de n (en este caso 20)  -->       20 * 0.10 =  2 
*/
function calcularTOP10Porciento (listaOrdenada){
    const numeroRegistro = parseInt((listaOrdenada.length * 0.10));
    
    const top10Sueldo = salarioPersonas.slice(salarioPersonas.length - numeroRegistro, salarioPersonas.length);
    
    return calcularMediaAritmetica(top10Sueldo);
}

console.log(calcularTOP10Porciento(salarioPersonas));