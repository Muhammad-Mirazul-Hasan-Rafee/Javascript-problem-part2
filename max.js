const disha = 56;
const salman = 95;

if(disha > salman){
    console.log("Disha win!");
}

else{
    console.log('Salman wins!');
}

// using function
function getMax(num1 , num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max = getMax(5454 , 8748);
console.log(max);