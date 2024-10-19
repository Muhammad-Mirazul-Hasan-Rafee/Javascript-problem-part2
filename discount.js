// Find total cost when you have got discount

/**
 * for tickets ---------------------------------->
 * upto 100: --> 100/=
 * 101-200: --> 90/=
 * more than 200: --> 70/=
 */


function discountPrize(quantity){
    if(quantity <= 100)
    {
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200)
    {
        const total = quantity * 90;
        return total;
    }
    else
    {
        const total = quantity * 70;
        return total;
    }
    
}

const totalAmount = discountPrize(500);
console.log("Total prize of tickets : " , totalAmount , "Taka");