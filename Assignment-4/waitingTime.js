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

