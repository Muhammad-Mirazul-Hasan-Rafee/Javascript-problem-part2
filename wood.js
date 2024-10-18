/**
 * chair -> 3cft
 * table -> 10cft
 * bed -> 50cft
 * Find total wood for your furnishers 
  
*/

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = perChairWood * chairQuantity;
    const tableTotalWood = perTableWood * tableQuantity;
    const bedTotalWood = perBedWood * bedQuantity;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;

}

const wood = woodQuantity(6 , 3 , 1);
console.log('Wood needed' , wood);
