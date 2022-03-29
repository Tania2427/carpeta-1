//asignar la función 
const card= document.getElementById("card1");

//construir la card de manera dinámica al carregar la plana

function firstCard() {
    card.querySelector ("img").setAttribute ("src", "./assets/img/shop_01.jpg")
    card.querySelector(".h3").textContent="colonia"
    card.querySelector("p").textContent="10€"
    card.querySelector( ".card-body i").textContent=" belleza"

}

document.addEventListener("DOMContentLoaded" , () => {
    firstCard();
});