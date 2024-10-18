// finding largest height
const heights = [66, 67, 68, 69, 70, 71, 72, 62, 64 , 65];

function getMaxHeight(numbers){
    let max = numbers[0];
    for(const num of numbers)
    {
        if(num > max){
            max =num;
        }
        
    }
    return max;
}
const max = getMaxHeight(heights);
console.log('Highest value is' , max);

