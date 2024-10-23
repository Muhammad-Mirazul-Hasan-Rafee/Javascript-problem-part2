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
