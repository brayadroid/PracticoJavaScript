//Codigo del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimetro del cuadrado es: "+ perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El area del cuadrado es: "+ areaCuadrado + "cm2");
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

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: "+ perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: "+areaTriangulo + "cm2");

console.groupEnd();
//Codigo Circulos
console.group("Circulos");

// Radio
const radioCirculo = 4;
console.log("Radio circulo: " + radioCirculo);

// Diametro
const diametroCirculo = radioCirculo * 2;
console.log("Diametro circulo: " + diametroCirculo);
// PI
const PI = Math.PI;
// Circunferencia

const perimetroCirculo = diametroCirculo * PI;
console.log("Permitro circulo : " + perimetroCirculo);
// Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("Area circulo : " + areaCirculo);

console.groupEnd();