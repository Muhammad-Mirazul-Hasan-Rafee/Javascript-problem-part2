// find multiple items total just like cart
const products = [
    {name : 'Shirt' , price : 500 , quantity : 2},
    {name : 'Pant' , price : 1200 , quantity : 2},
    {name : 'Shari' , price : 2000 , quantity : 4},
    {name : 'Watch' , price : 900 , quantity : 1},
    {name : 'Perfume' , price : 750 , quantity : 2},
    {name : 'Wallet' , price : 600 , quantity : 1},
]


function cartTotalCost(items){

    let total = 0;

    for(entity of items){

        const currentProductPrize = entity.price * entity.quantity;
        total = total + currentProductPrize; 
    }
    return total;
}

const totalCost = cartTotalCost(products);
console.log('Total amount for shopping = ' , totalCost , "Taka");