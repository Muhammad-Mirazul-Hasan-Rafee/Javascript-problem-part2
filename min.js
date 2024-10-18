// Cheapest phone prize
const price = [10000 , 12000, 13000 , 22000, 18000 , 21000 , 14000 , 19000 , 16000];

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){

        if(num < min){
            min = num;
        }

    }

    return min;
}

const cheap = getMin(price);
console.log('The cheapest set price is: ' , cheap);