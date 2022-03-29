const cards=document.getElementById ("cards")
const templateCard=document.getElementById ("template-card").content
const fragment=document.createDocumentFragment()

document.addEventListener("DOMContentLoaded" , () => {
    printarCardsProducts();
});

function printarCardsProducts(){
    products.forEach(item => {
        templateCard.querySelector("img").setAttribute ("src", "item.img")
        templateCard.querySelector(".h3").textContent=item.name
        templateCard.querySelector("p").textContent=item.price
        templateCard.querySelector(".card-body i").textContent=item.type 
        const clone=templateCard.cloneNode(true)
        fragment.appendChild(clone)
        
    })
    cards.appendChild(fragment)
}