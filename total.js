// Find total price
const products = [
    {name : 'Shirt' , price : 500},
    {name : 'Pant' , price : 1200},
    {name : 'Shari' , price : 2000},
    {name : 'Watch' , price : 900},
    {name : 'Perfume' , price : 750},
    {name : 'Wallet' , price : 600},
]

function getShoppingTotal(items){

    let total = 0;

    for(const entity of items){

        total = total + entity.price;

    }

    return total;

}
const totalCost = getShoppingTotal(products);
console.log("My total cost = ", totalCost);