// Array to store presents
var presents = ['and a Partridge in a Pear Tree', 
                'two Turtle Doves', 
                'three French Hens', 
                'four Calling Birds', 
                'five Golden Rings', 
                'six Geese a Laying', 
                'seven Swans a Swimming', 
                'eight Maids a Milking', 
                'nine Ladies Dancing', 
                'ten Lords a Leaping', 
                'eleven Pipers Piping', 
                'twelve Drummers Drumming'];

// Log manually
console.log('On the 1st day of Christmas\n My true love sent to me: \n a Partridge in a Pear tree \n');
console.log('On the 2nd day of Christmas\n My true love sent to me: \n 2 ' + presents[1] + '\n ' + presents[0] + '\n');
console.log('On the 3rd day of Christmas\n My true love sent to me: \n 3 ' + presents[2] + '\n 2 ' + presents[1] + '\n ' + presents[0] + '\n');

// Declare variables
var i,
    j,
    song;

// Start loop on the fourth day, since first three have already been logged
for (i = 4; i <= presents.length; i += 1) {
    
    // Store lyrics in a string variable
    song = 'On the ' + i + 'th day of Christmas\n My true love sent to me: \n ' + i + ' ' + presents[i - 1] + '\n ';
    
    // Loop to print all previous presents
    for (j = i; j > 1; j -= 1) {
        
        // If checks for last present, to print the proper line
        // being 'and a Patridge in a Pear Tree'
        if (j >= 3) {
            song = song + (j - 1) + ' ' + presents[j - 2] + '\n ';
        } else {
            song = song + presents[0] + '\n ';
        }
    }
    
    // Print stanza to console
    console.log(song);
}