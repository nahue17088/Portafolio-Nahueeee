
/**
* // ARRAYS PRACTICE

let car1 = "Bmw";
let car2 = "Volvo"

const cars = new Array("Bmw", "Volvo", "Saab");
let car = cars[0]; //accedemos al array
document.getElementById('demo').innerHTML = cars //llamamos en el html al Array


//DIFERENCES WHIT OBJECT
const personArray = ["Jon", "James", "Job"]; //ARRAY
const personObject = {primerNombre:"Jon", segundoNombre:"James", edad:"21"} //OBJECT
document.getElementById('demo').innerHTML = personArray.shift("hola")
// Types
//.length // Devuelve el numero de los elementos
//.sort() // Devuelve el arrays ordenado al revéz
//fruits[6] = "Lemon";  // Crea indefinidos elementos
//.join() // Sirve para separar elementos, se usas así: ("N"), toString() puedes hacer lo mismo pero no podras especificar el separador
//.pop() // Devuelve el ultimo valor de un array
//.push() // Sirve para agregar otro valor a un array a lo último, pero devuelve la nueva logitud de la matriz (no devuelve el array con el nuevo objeto incorporado)

//.concat() //Sirve para fusionar arrays Ejemplo:
//const arr1 = ["Cecilie", "Lone"];
//const arr2 = ["Emil", "Tobias", "Linus"];
//const arr3 = ["Robin", "Morgan"];
//const myChildren = arr1.concat(arr2, arr3);
// Resultado: Cecilie, Lone, Emil, Tobias, Linus, Robin, Morgan

*/



// Práctica //

let input;
let input2;
let c;

document.getElementById('submit').onclick = function(){
    
    input = document.getElementById('input').value;
    input = Number(input);
    
    input2 = document.getElementById('input2').value;
    input2 = Number(input2);
    
    c = input + input2;
    
    document.getElementById('label').innerHTML = "Resultado: " + c;

}

let n;

n = document.getElementById('search');

document.getElementById('encontrado').onclick = function(e){
    e.preventDefault();
    if( n == "Hola"){
        alert("¡Encontrado!")
    }
}

let sum = input + input2;
let sub = input - input2;
let mult = input * input2;
let divs = input / input2;

let tipo = document.getElementById('tipo');

document.getElementById("sum").onchange = function(){
    input = document.getElementById('input').value;
    input = Number(input);
    
    input2 = document.getElementById('input2').value;
    input2 = Number(input2);
    
    c = input - input2;
}

document.getElementById("rest").onclick = function(){
    let sub = input - input2;
}


