let card1 =document.getElementById("card1");
console.log (card1);
const cardId1= card1.getAttribute ("data-id");

card1.addEventListener('click', e => {

    if (e.target.classList =="fas fa-cart-plus cardAdd") {
        alert("afegim" + cardId1);
        addToCart(cardId1);
    }
    if (e.target.classList == "fas fa-trash-alt cardRemove") {
     removeFromCart (cardId1);   
}
});
let card2 =document.getElementById("card2");
console.log (card2);
const cardId2= card2.getAttribute ("data-id");

card2.addEventListener('click', e => {

    if (e.target.classList =="fas fa-cart-plus cardAdd") {
        alert("afegim" + cardId2);
        addToCart(cardId2);
    }
    if (e.target.classList == "fas fa-trash-alt cardRemove") {
     removeFromCart (cardId2);   
}
});
let card3 =document.getElementById("card3");
console.log (card3);
const cardId3= card3.getAttribute ("data-id");

card3.addEventListener('click', e => {

    if (e.target.classList =="fas fa-cart-plus cardAdd") {
        alert("afegim" + cardId3);
        addToCart(cardId3);
    }
    if (e.target.classList == "fas fa-trash-alt cardRemove") {
     removeFromCart (cardId3);   
}
});
 


function addToCart(id) {
   alert("add to cart")
}


function removeFromCart(id) {
    alert("remove to cart")
}

