//exercici1:

function buy(id) {

    // console.table(products);
    //console.log(cartList);
    console.table(products[id - 1]);
    cart.push(products[id - 1]);

    /*const addproduct = products.find(element => element.id == id);
    cart.push (addproduct );*/

}

//Exercici2: eliminar l’array generat.hauràs d’escriure la funció cleanCart(),i reinicialitzar la variable cartList.
//console.log ("limpiamos el carrito");
//cleanCart();

//Exercici 3: crearem la funció que calculi els subtotals per acadascun dels tipus de productes.//

var tipus = Object.keys(subtotal);

function calculateSubtotals() {

    for (var i = 0; i < cartList.length; i++) {
        switch (carList[i].type) {
            case "grocery":
                subtotal.grocery.value = subtotal.grocery.value + carList[i].price;
                break;
            case "beauty":
                subtotal.beauty.value += carList[i].price;
            case "clothes":
                subtotal.clothes.value += carList[i].price;
                break;
            default:
                console.log("hi ha hagut un error");
        }

        /*for (var i = 0; i < cartList.length; i++) {
            // El segon recorre tots els tipus
            for (var j = 0; j < tipus.length; j++) {
                if (cartList[i].type == tipus[j]) {
                    var total2 = subtotal[tipus[j]].value + cartList[i].price;
                    subtotal[tipus[j]].value = parseFloat(total2.toFixed(2));
                }
            }
        }*/

        for (var i = 0; i < cartList.length; i++) {
            // El segon recorre tots els tipus
            tipus.forEach(element => {
                //Si el tipus del producte de la cistella, és la mateixa que la del tipus, aleshores sumem
                // OJO toFixed retorna string .. per aixo abans de tornar a sumar hem de passar a float.
                if (cartList[i].type == element) {
                    var total2 = subtotal[element].value + cartList[i].price;
                    subtotal[element].value = parseFloat(total2.toFixed(2));
                }
            });
        }
    }}