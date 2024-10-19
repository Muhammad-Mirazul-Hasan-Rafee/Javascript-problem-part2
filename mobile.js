// find cheapeast mobile set , array of object



const mobiles = [
    {name : 'Samsung' , price : 12000 , camera : '12mp' , Color : 'Black'},
    {name : 'Iphone' , price : 120000 , camera : '10mp' , Color : 'Black'},
    {name : 'Blackberry' , price : 15000 , camera : '12mp' , Color : 'Black'},
    {name : 'Xiaomi' , price : 22000 , camera : '12mp' , Color : 'Black'},
    {name : 'Oppo' , price : 13000 , camera : '12mp' , Color : 'Black'},
    {name : 'Walton' , price : 10000 , camera : '16mp' , Color : 'Black'},
    {name : 'Readme' , price : 18800 , camera : '18mp' , Color : 'Black'},
    {name : 'Realme' , price : 12600 , camera : '12mp' , Color : 'Black'},
    {name : 'Poco' , price : 16090 , camera : '12mp' , Color : 'Black'},
    {name : 'Vivo' , price : 15999 , camera : '12mp' , Color : 'Black'},
    {name : 'Nokia' , price : 17630 , camera : '12mp' , Color : 'Black'},
];

function getCheapest(phones){
    let minPrizedSet = phones[0];
    for(const phone of phones){

        if(phone.price < minPrizedSet.price){

            minPrizedSet = phone;

        }

        
    }
    return minPrizedSet;
}

const cheap = getCheapest(mobiles);
console.log('The cheapest phone is = ' , cheap);