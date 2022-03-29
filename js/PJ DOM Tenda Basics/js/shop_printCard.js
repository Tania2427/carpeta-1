document.addEventListener("DOMContentLoaded" , () => {
    printarCards();
});
function printarCards(){
    for (let i=1; i< 10; i++){
        const card=document.getElementById("card"+i);
        card.querySelector("img").setAttribute ("src","./assets/img/shop_01.jpg")
        card.querySelector(".h3").textContent="cooking oil"
        card.querySelector("p").textContent="250.00"
        card.querySelector(".card-body i").textContent="grocery"
        
        
    }
}