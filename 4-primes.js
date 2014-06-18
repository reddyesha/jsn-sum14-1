var isPrime = function(n) {
    if (typeof n === "number") {
        if (Math.floor(n) % 2) {
            return false;
        } else {
            return true;
        }
    }
    return 'n must be a number';
};