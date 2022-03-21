// Exercici 2:  Accedim a les classes y mostrar por consola
 
// Todos tus selectores inician con document...
//•	el header ( class = header )
console.log("------ header ------------");
const header = document.getElementsByClassName('header'); 
console.log(header);
//•	el contenido-hero ( class = contenido-hero )
console.log("------ contenido-hero  ------------");
const hero = document.getElementsByClassName('contenido-hero');
console.log(hero);

// Como las classes se pueden repetir, obviamente todas las coincidencias de classes se asignaran a contenedores.
//•	els contenidors ( class = contenedor)
console.log("------ contenedor  ------------");
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

console.log("------ No encuentra Classe  ------------");
// Si una clase no existe, no va a retornar nada...
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);

