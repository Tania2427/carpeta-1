//printem cards sobre l'objecte products(data)
document.addEventListener("DOMContentLoaded" , () => {
    printarCardsProductes();
});

//pintar todos los productos
function printarCardsProductes() {
    products.forEach (e => {
        const card= document.getElementById("card"+ e.id);
        card.querySelector("img").setAttribute("src", item.img);
        card.querySelector(".h3").textContent= item.hola;
        card.querySelector("p").textContent= item.price;
        card.querySelector(".card-body i").textContent=item.type;
        
    })
}