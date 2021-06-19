/* Sintaxis del lenguaje  variables y tipos de datos*/
console.log("Funcionando...")
var numero = 10 
let nume1; // undefined
let nume2= null //nulo
let entero = 10
let decimal = 1.2
let string = "Hello world"
let booleano = false
let fecha = new Date()
let dd = fecha.getDate(),
    mm = fecha.getMonth() + 1
    aa = fecha.getFullYear(),
    hoy = `${aa}-${mm}-${dd}`
const pi = 3.1416 // constante
/* console.log("numero 1 =", nume1)
console.log('numero 2 =${nume2}')
console.log('fecha de hoy=${fecha}')
console.log(hoy) */

// arreglos, json y objetos
let numeros = [1,2,3,4,5];
let colors = ["red","green","blue"];

const json = {
    "nombres": ["Carla", "Veronica"],
    "genero": "Femenino"
};

const maestro = {
    nombre: 'daniel',
    genero: 'Masculino',
    juegos: ['Futbol','Volleyball'],
    Conocimientos: {
        lenguajes: [
            'js','Python','Java','php',
        ],
        Materias:{Nivel1:
        'Logica', Nivel2: 'POO',
         Nivel3: 'POOI' }  
    }
};
/* json.genero = "F"
maestro.nombre= "Daniel"
maestro.edad = 50
console.log('Json',json,json.genero);
console.log('Objeto',maestro.lenguajes[1],
maestro.Conocimientos.Materias.Nivel1); */

// estructuras de control
let num1 = 5
let num2 = 6
if (nume1 === undefined)
    //console.log(`${nume1}= undefined`);
if (nume2 === null)
    //console.log(`${nume2}= null`);

if (num1 == 0){
    //console.log(num1);
} else if (num1 === num2) {
    //console.log(`${num1}=${num2}`);
} else{
    //console.log(`${num1}!=${num2}`);
} 

let n = 5
let rec = n % 0;
switch(rec) {
    case 0:
        //console.log(`${n} el numero es Positivo`);
        break;
    case 1:
        //console.log(`${n} el numero es Negativo`);
        break;
    
    default:
        if (isNaN(rec))
            //console.log(`${rec}= Error`);
        break;
}
//console.log (`salir del Switch`)

// Bucles incremento ++
// While
let inc= 0
//console.log("Bucle While",colors)
while (inc < colors.length && colors[inc] != "blue"){
    //console.log(inc, colors[inc])
    inc= inc + 1
}

// Bucle for usado mas incrementos o decrementos automaticos
//console.log("Recorrido por incremento", colors);
for (let i = 0; i < colors.length; i++) {
    //console.log(i, colors[i]);
}

// in 
//console.log("Recorrido for in",colors)
for (let j in colors){
    //console.log(j, colors[j])
}
 // of
 //console.log("Recorrido por of", colors)
 for (let col of colors){
     //console.log(col)
}

let namee= "Daniel"
for (let car of namee){
    //console.log(car)
}

const Personas = [
    {"Nombre": "Carlos", "Apellidos":"Vera"},
    {"Nombre": "Steven", "Apellidos":"Orellana"},
    {"Nombre": "Jose", "Apellidos":"Garces"}
]
console.log("of");
for (let perso of Personas) {
    console.log(perso,perso.Nombre)
}

// recorridos de objetos iterables

// Foreach
console.log("Foreach");
Personas.forEach(perso => {
    if (personalbar.Nombre != "Jose") 
        console.log(perso.Nombre)
})
// Map
const persons = Personas.map(perso => perso.Nombre)
console.log("Map",persons);

//Filter
const pers = Personas.filter(perso => perso.Nombre != "Jose")
console.log("filter",pers);

// Find
const peopleone = Personas.find(perso => perso.Nombre === "Jose")
console.log("find",peopleone);

// funciones
function suma(){
    console.log(5 + 2);
}
suma()
const sum= () => console.log("ArrowFuncion",5+2)
sum()

function multiplicacion(num1,num2){
    return num1 * num2
}
let resp = multiplicacion (5,2)
console.log("Sin arrow",resp);
const mult = (num1,num2) => num1*num2
console.log("arrow", mult(5,2));

function dividir(num1,num2 = 4){
    let resp = 0
    try{
        resp= num1 / num2
    } catch (e) {
        console.log("Ha ocurrido un error: ", e.message)
    }
    return resp
}
resp = dividir(8,8)
console.log("sin arrow", resp);
resp = dividir(8,0)
console.log(resp);

const divid = (num1,num2 = 5) =>{
    let resp = 0
    try {
        resp = num1/num2
    }catch (e){
        console.log("Ha ocurridoun error: ", e.message)
    }
    return resp
}
console.log("Con arrow",divid(8,4));

//Api fetch
// fetch: Sirve para consumir api ==> Respuesta del servidor que entrega
// Una respuesta con datos para ser consumidos
fetch ('https://pokeapi.co/api/v2/item/')
    .then(res => (res.json()))
    .then(datos => {
        //console.log(datos.results)
        datos.results.forEach(poke=>console.log(poke.name))
    })
    .catch(error => console.log("Error del api: ", error))

// async await: devuelve un objeto asincronico

const obtenerDatos = async() => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/item/')
        const datos = await res.json()
        console.log("Async await");
        datos.results.forEach(poke =>
        console.log(poke.name, poke.url))
    }catch (error) {
        console.log("Error del Api con Async: ",error)
    }
}
obtenerDatos()

// DOM
let contenido = document.getElementById('contenedor')
let variable = document.getElementById('variable')
console.log(contenido);
console.log(variable);
variable.innerHTML = 'Enteros, Decimales, String, Boleanas,fechas';
variable.style.color = "green"
variable.style.background = "#7635"
console.log(variable)
let concepto = document.querySelector('.concepto')
console.log(concepto);
concepto.innerHTML = "Area de memoria"


//QuerySelector
let conceptos = document.querySelectorAll('.concepto')
let cont = 1
conceptos.forEach(parrafo=> {
    parrafo.innerHTML = `Area de Memorira #${cont}`
    //console.log (parrafo);
    cont = cont + 1
})
console.log(conceptos);

//Eventos en Js
let boton = document.getElementById ('boton2')
let valor = document.getElementById ('valor')
boton.addEventListener('mouseover',()=>{
    console.log ("Me has pasado encima :3")
})
boton.addEventListener('click',()=>{
    let nodo = document.createElement("p")
    nodo.innerHTML = "Nuevo Elemento"
    nodo.style.color = "blue"
    nodo.style.background = "#FFCC99"
    contenido.appendChild (nodo)
})

valor.addEventListener('keypress',(e)=>{
    console.log(e.target.value);
})

