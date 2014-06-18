var toRoman = function (value) {
    var i,
        result = '',
        decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    
    for (i = 0; i < decimals.length; i += 1) {
        
        // Executes when value is greater than or equal to the value at decimal[i]
        // Loop continues as long as 'value' is greater than a value in the decimal array.
        while (value >= decimals[i]) {
            
            // Add the value at roman[i] to the result string
            result += roman[i];
            
            // Subtract the value at decimal[i] from the parameter
            value -= decimals[i];
        }
    }
    return result;
};

// Test
console.log(toRoman(10) === 'MMXIV');