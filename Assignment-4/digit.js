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
