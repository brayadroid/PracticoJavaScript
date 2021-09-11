//Codigo del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

//const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: "+ perimetroCuadrado(ladoCuadrado) + "cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){
    return lado * lado;
}

console.log("El area del cuadrado es: "+ areaCuadrado(ladoCuadrado) + "cm2");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del triangulo miden: "
    +ladoTriangulo1
    +" cm, "
    +ladoTriangulo2
    +" cm, "
    +baseTriangulo
    +" cm"
);
console.log("Altura de triangulo: "+alturaTriangulo + "cm ")

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo){
 return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}
console.log("El perimetro del triangulo es: "+ perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo) + "cm");

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
function areaTriangulo(baseTriangulo,alturaTriangulo){
    return (baseTriangulo * alturaTriangulo) / 2;
}
console.log("El area del triangulo es: "+areaTriangulo(baseTriangulo,alturaTriangulo) + "cm2");

console.groupEnd();
//Codigo Circulos
console.group("Circulos");

// Radio
const radioCirculo = 4;
console.log("Radio circulo: " + radioCirculo);

// Diametro
//const diametroCirculo = radioCirculo * 2;
function diametroCirculo(radioCirculo){
    return radioCirculo * 2;
}

console.log("Diametro circulo: " + diametroCirculo(radioCirculo));
// PI
const PI = Math.PI;
// Circunferencia

//const perimetroCirculo = diametroCirculo * PI;
function perimetroCirculo(diametroCirculo, PI){
    return (diametroCirculo * PI);
}
console.log("Permitro circulo : " + perimetroCirculo(diametroCirculo(radioCirculo) ,PI));

// Area
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
function areaCirculo(radioCirculo, PI){
    return (radioCirculo * radioCirculo) * PI;
}
console.log("Area circulo : " + areaCirculo(radioCirculo,PI));

console.groupEnd();

//Obtener input


//Funciones llamadas desde HTML.
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const valor = input.value;
    alert(perimetroCuadrado(valor));
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const valor = input.value;
    alert(areaCuadrado(valor));
}

//TRIANGULOS
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("inputLado1Triangulo");
    const inputLado2 = document.getElementById("inputLado2Triangulo");
    const inputBase = document.getElementById("inputBaseTriangulo");
    const inputAlturaTriangulo = document.getElementById("inputAlturaTriangulo");

    const lado1 = parseInt(inputLado1.value);
    const lado2 = parseInt(inputLado2.value);
    const base = parseInt(inputBase.value);
    const altura = parseInt(inputAlturaTriangulo.value);

    alert("El Perimetro del triangulo es: "+perimetroTriangulo(lado1,lado2,base,altura));
    

}

function calcularAreaTriangulo(){
    const inputLado1 = document.getElementById("inputLado1Triangulo");
    const inputLado2 = document.getElementById("inputLado2Triangulo");
    const inputBase = document.getElementById("inputBaseTriangulo");
    const inputAlturaTriangulo = document.getElementById("inputAlturaTriangulo");

    const lado1 = inputLado1.value;
    const lado2 = inputLado2.value;
    const base = inputBase.value;
    const altura = inputAlturaTriangulo.value;

    alert("Area de triangulo: "+areaTriangulo(base,altura));
}

//CIRCULO
calcularPerimetroCirculo
calcularAreaCirculo

//Funciones llamadas desde HTML.
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const valor = input.value;
    const PI = Math.PI;
    alert(perimetroCirculo(diametroCirculo(valor),PI));
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const valor = input.value;
    const PI = Math.PI;
    alert(areaCirculo(valor,PI));
}

//TRIANGULO ISOSCELES 
function calcularAlturaIsosceles(){
    const inputCateto1 = document.getElementById("inputCateto1Triangulo");
    const inputHipotenusa = document.getElementById("inputHipotenusaTriangulo");

    const cateto1 = inputCateto1.value;
    const hipotenusa = inputHipotenusa.value;

    alert(alturaTrianguloIsosceles(cateto1,hipotenusa));
}

function alturaTrianguloIsosceles(cateto1,hipotenusa){
    hipotenusa  = hipotenusa * hipotenusa;
    cateto1 = cateto1 * cateto1;
    altura = hipotenusa - cateto1;
    altura = Math.sqrt(altura);
    return altura;
};
