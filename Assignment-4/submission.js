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








function sendNotification(email) {
    if (email.includes('@')) {

        let [userName, domainName] = email.split('@');

        const textMessage = userName + ' ' + 'sent you an email from' + ' ' + domainName;
        return textMessage;


    }
    else{
        return "Invalid Email";
    }
}

const notificationMessage = sendNotification("hasanrafee973@gmail.com");
console.log(notificationMessage);






function checkDigitsInName(personName) {

    for (let i = 0; i < personName.length; i++) {

        if (!isNaN(parseInt(personName[i]))) {  
            return true;
        }
    }

    if (typeof personName !== 'string') {
        return "Invalid input";
    }
    return false;

}
const inputName = checkDigitsInName('rafee88');
console.log(inputName); 






function calculateFinalScore(student){

    if(typeof student !== 'object' || student === null){
        return "Invalid Input";
    }
   
    const {name, testScore, schoolGrade, isFFamily} = student;

    if(typeof name !== 'string' ||typeof testScore !== 'number' || testScore > 50 || testScore < 0 ||typeof schoolGrade !== 'number' || schoolGrade > 30 || schoolGrade < 0 ||typeof isFFamily !== 'boolean'){
        return "Invalid Input";
    }

    let ultimateScore = schoolGrade + testScore;

    if(isFFamily){
        ultimateScore += 20;
    }
    return ultimateScore >= 80;
}

const ultimateDecision = calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  });
console.log(ultimateDecision);







function waitingTime(waitingTimes, serialNumber){
 
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input";
    }
    const candidates = waitingTimes.length;

    let totalTime = 0;
    for(let i = 0; i < candidates; i++){
        totalTime += waitingTimes[i];
    }
    const averageTime = Math.round(totalTime / candidates);
    const remainingCandidates = (serialNumber - candidates) - 1;
    const finalWaitingTime = averageTime * remainingCandidates;
    
    return finalWaitingTime;
}

const ultimateRemainingTime = waitingTime([3, 5, 7, 11, 6], 10);
console.log(ultimateRemainingTime);


