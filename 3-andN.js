// Logical AND: Returns exp1 if it can be converted to false. Otherwise, returns exp2
// exp1 && exp2
// Example: "Cat" && "Dog" returns Dog
// Example: false && "Cat" returns false

var andN = function (n, values) {
    var arrayOfTruthys = [],
        arrayOfFalsies = [],
        i;
    
    if (n === 0) {
        return undefined;
    } else if (n === 1) {
        return values;
    } else if (n > 1) {
        for (i = 0; i < n; i += 1) {
            if (!values[i]) {
                return values[i];
            } else if (values[i]) {
                arrayOfTruthys.push(values[i]);
            }
        }

        console.log('Truths: ' + arrayOfTruthys);
        return arrayOfTruthys[arrayOfTruthys.length-1];

    }
}