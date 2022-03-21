/*//Exercici 1, DOMContentLoaded
//Escriu un hola mundo al carregar la plana

window.addEventListener("DOMContentLoaded", (event) => {
    console.log("Hola Mundo");
});

//Exercici 2:
//a) Al entrar al menú de navegació, canviarem el seu estil de backgroundColor= White

const nav = document.querySelector(".navegacio");
console.log(nav)
nav.addEventListener("mouseenter", cambioFondo);

function cambioFondo() {
    console.log("entrando a navegación")
    nav.style.backgroundColor = "white";
}
b)Al sortir del menú de navegació, tornarem a deixar l'estil inicial (backgroundColor=
transparent )
nav.addEventListener("mouseout", () => {
    console.log("saliendo de la navegación");
    nav.style.backgroundColor = "transparent";
});

//exercici 3
a)Afegeix un event perquè ens mostri un alert cada vegada que escrivim una lletra al
buscador
const busqueda=document.querySelector(".busqueda");
busqueda.addEventListener("input",()=>{
    alert("escribint...");
})
b)Afegeix un event perquè ens mostri un alert cada vegada que escrivim la lletra a al
buscador
busqueda.addEventListener("input", e => {
    if (e.target.value =="a") {
        alert("has escrit a...");
    }
})

//c)El mateix que l'exercici 2, però ara fes servir una funció.
busqueda.addEventListener("input",leerInput);
function leerInput(eventoform){
    if(eventoform.target.value=="a"){
        alert("ha escrit a ...");
    }
}
//exercici4
var formulari=document.getElementById("btn-submit");
console.log(formulari);
formulari.addEventListener("click",validacio);
function validacio(buscar){
    buscar.preventDefault();
}*/
/*exercici 5:Captura l’event click, per cada una de les classes: categoria concierto, titulo, precio.
Fe servir les delegacions, per controlar els events de cada categoría.*/

const cardDiv = document.querySelector('.card');
console.log ("hola ");
cardDiv.addEventListener('click', (event) => {
let element = event.target.className;
switch (element) {
case 'categoria concierto':
console.log('categoria concierto');
event.stopPropagation();
break;
case 'titulo':
console.log('titulo');
event.stopPropagation();
break;
case 'precio':
console.log('precio');
event.stopPropagation();
break;
default:
    console.log ("card");
    break;
}
});
//exercici 6:
cardDiv.addEventListener('click', e => {
    console.log ("click card");
    e.stopPropagation();
})
const infoDiv = document.querySelector('.info');
infoDiv.addEventListener ("click",e => {
    console.log ("click info");
    e.stopPropagation();
})
const titulo = document.querySelector('.titulo');
titulo.addEventListener ("click", e => {
    console.log ("click titulo");
    e.stopPropagation();
})
