function calculateTax(income , expense){

    if(income < 0 || expense < 0 || expense > income){
        return "Invalid Input";
    }

    let remainingAmount = 0;

    remainingAmount = remainingAmount + (income - expense);
    const tax = remainingAmount * 0.2;

    return tax;

}

const calculatedTaxAmount = calculateTax(30000 , 11001);
console.log(calculatedTaxAmount);
