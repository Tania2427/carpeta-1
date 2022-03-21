// Exercici 4: QuerySelector
// Mostra per consola:
 
console.log("------ CARD ------------");
const card = document.querySelector('.card'); 
console.log(card);
//l’element de la classe info del contenidor premium
console.log("------ CARD: PREMIUM/INFO ------------");
var info = document.querySelector('.premium .info');
info = document.querySelector('.premium > .info');
console.log(info);
//la segona card de hospedaje
console.log("------ CARD: 2on card: hospedaje ------------");
var segundoCard = document.querySelector('.hospedaje .card:nth-child(2)');
segundoCard = document.querySelectorAll('.hospedaje .card')[1];
console.log(segundoCard);
//el formulari per id
console.log("------ form ------------");
const formulario = document.querySelector('form#formulario'); 
console.log(formulario);
//el primer menú de navegació  <nav> 
console.log("------ NAV ------------");
const nav = document.querySelector('nav');
console.log(nav);