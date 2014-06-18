var exampleDeck = ['Ace of Hearts', 'Ace of Diamonds', 'Ace of Spades', 'Ace of Clubs', 
           'Two of Hearts', 'Two of Diamonds', 'Two of Spades', 'Two of Clubs', 
           'Three of Hearts', 'Three of Diamonds', 'Three of Spades', 'Three of Clubs', 
           'Four of Hearts', 'Four of Diamonds', 'Four of Spades', 'Four of Clubs', 
           'Five of Hearts', 'Five of Diamonds', 'Five of Spades', 'Five of Clubs', 
           'Six of Hearts', 'Six of Diamonds', 'Six of Spades', 'Six of Clubs', 
           'Seven of Hearts', 'Seven of Diamonds', 'Seven of Spades', 'Seven of Clubs', 
           'Eight of Hearts', 'Eight of Diamonds', 'Eight of Spades', 'Eight of Clubs', 
           'Nine of Hearts', 'Nine of Diamonds', 'Nine of Spades', 'Nine of Clubs', 
           'Ten of Hearts', 'Ten of Diamonds', 'Ten of Spades', 'Ten of Clubs', 
           'Jack of Hearts', 'Jack of Diamonds', 'Jack of Spades', 'Jack of Clubs', 
           'Queen of Hearts', 'Queen of Diamonds', 'Queen of Spades', 'Queen of Clubs', 
           'King of Hearts', 'King of Diamonds', 'King of Spades', 'King of Clubs'];

// Check for numbers
function checkCard(n) {
    if (typeof n === 'number') {
        if (n >= 0) {
            if (n < 52) {
                return true;
            }
        }
    } else {
        return false;
    }
}

// Check for rank
function checkRank(n) {
    if (typeof n === 'number') {
        if (n > 0) {
            if (n < 14) {
                return true;
            }
        }
    } else {
        return false;
    }
}

// Check suit
function checkSuit(n) {
    if (typeof n === 'number') {
        if (n > 0 && n < 5) {
            return true;
        }
    } else {
        return false;
    }
}

// Returns 1-13, representing the card's rank
function rank(card) {
    
    if (checkCard(card)) {
        if (card < 4) {
            return 1;
        } else if (card >= 4 && card <= 7) {
            return 2;
        } else if (card >= 8 && card <= 11) {
            return 3;
        } else if (card >= 12 && card <= 15) {
            return 4;
        } else if (card >= 16 && card <= 19) {
            return 5;
        } else if (card >= 20 && card <= 23) {
            return 6;
        } else if (card >= 24 && card <= 27) {
            return 7;
        } else if (card >= 28 && card <= 31) {
            return 8;
        } else if (card >= 32 && card <= 35) {
            return 9;
        } else if (card >= 36 && card <= 39) {
            return 10;
        } else if (card >= 40 && card <= 43) {
            return 11;
        } else if (card >= 44 && card <= 47) {
            return 12;
        } else if (card >= 48 && card <= 51) {
            return 13;
        }
    } else {
        return false;
    }
}

// Returns 1-4, representing the card's suit
function suit(card) {
    
    if (checkCard(card)) {
        if (card % 4 === 0) {
            return 1;
        } else if (card % 4 === 1) {
            return 2;
        } else if (card % 4 === 2) {
            return 3;
        } else if (card % 4 === 3) {
            return 4;
        }
    } else {
        return false;
    }
}

// Returns 0-51, identifying the card of a given rank and suit
function cardID(rank, suit) {
    if (checkRank(rank) && checkSuit(suit)) {
        return ((rank - 1) * 4) + (suit - 1);
    } else {
        return 'Invalid';
    }
}

// Returns "red" or "black"
function color(card) {
    if (checkCard(card)) {
        if (card % 4 === 0 || card % 4 === 1) {
            return 'red';
        } else if (card % 4 === 2 || card % 4 === 3) {
            return 'black';
        }
    } else {
        return false;
    }
}

// Returns a string representation of the rank of a given card
function stringifyRank(rank) {
    if (rank === 1) {
        return 'Ace of ';
    } else if (rank === 2) {
        return 'Two of ';
    } else if (rank === 3) {
        return 'Three of ';
    } else if (rank === 4) {
        return 'Four of ';
    } else if (rank === 5) {
        return 'Five of ';
    } else if (rank === 6) {
        return 'Six of ';
    } else if (rank === 7) {
        return 'Seven of ';
    } else if (rank === 8) {
        return 'Eight of ';
    } else if (rank === 9) {
        return 'Nine of ';
    } else if (rank === 10) {
        return 'Ten of ';
    } else if (rank === 11) {
        return 'Jack of ';
    } else if (rank === 12) {
        return 'Queen of ';
    } else if (rank === 13) {
        return 'King of ';
    } else {
        return false;
    }
}

// Returns a string representation of the suit of a given card
function stringifySuit(suit) {
    if (suit === 1) {
        return 'Hearts';
    } else if (suit === 2) {
        return 'Diamonds';
    } else if (suit === 3) {
        return 'Spades';
    } else if (suit === 4) {
        return 'Clubs';
    } else {
        return false;
    }
}

// Returns the full name of the card
function name(card) {
    if (checkCard(card)) {
        return stringifyRank(rank(card)) + stringifySuit(suit(card));
    }
}

// Returns true only if cardA is one less in rank than cardB (regardless of suit)
// Assuming rank wrap-around
function precedes(cardA, cardB) {
    if (checkCard(cardA) && checkCard(cardB)) {
        if ((cardA === 51 && cardB === 0) || (rank(cardB) === 13 && rank(cardA) === 1)) {
            return true;
        } else if ((rank(cardB) - rank(cardA)) === 1) {
            // test
            console.log(rank(cardA), rank(cardB));
            return true;
        } else {
            // test
            console.log(rank(cardA), rank(cardB));
            return false;
        }
    }
}

// Returns true only if cardA and cardB have the same color
function sameColor(cardA, cardB) {
    if (checkCard(cardA) && checkCard(cardB)) {
        if (color(cardA) === color(cardB)) {
            return true;
        } else if (color(cardA) !== color(cardB)) {
            return false;
        }
    }
}

// Returns cardB, the ID number of the card following cardA in the same suit
function nextInSuit(cardA) {
    if (checkCard(cardA)) {
        if (cardA >= 0 && cardA < 48) {
            return cardA + 4;
        } else if (cardA === 48) {
            return 0;
        } else if (cardA === 49) {
            return 1;
        } else if (cardA === 50) {
            return 2;
        } else if (cardA === 51) {
            return 3;
        }
    } else {
        return 'Invalid input';
    }
}

// Returns cardA, the ID number of the card preceding cardB in the same suit
function prevInSuit(cardB) {
    if (checkCard(cardB)) {
        if (cardB > 3) {
            return cardB - 4;
        } else if (cardB === 0) {
            return 48;
        } else if (cardB === 1) {
            return 49;
        } else if (cardB === 2) {
            return 50;
        } else if (cardB === 3) {
            return 51;
        }
    } else {
        return 'Invalid input';
    }
}


// TESTS

function assert(claim, message) {
    if (!claim) {
        console.error(message);
    }
}

assert(rank(0) === 1, "Test 1 failed");
assert(rank(3) === 1, "Test 2 failed");
assert(rank(51) === 13, "Test 3 failed");
assert(suit(0) === 1, "Test 4 failed");
assert(suit(5) === 2, "Test 5 failed");
assert(suit(51) === 4, "Test 6 failed");
assert(cardID(1, 1) === 0, "Test 7 failed");
assert(cardID(13, 4) === 51, "Test 8 failed");
assert(cardID(8, 3) === 30, "Test 9 failed");
assert(color(0) === 'red', "Test 10 failed");
assert(color(2) === 'black', "Test 11 failed");
assert(name(5) === 'Two of Diamonds', "Test 12 failed");
assert(name(51) === 'King of Clubs', "Test 13 failed");
assert(!precedes(0, 1), "Test 14 failed");
assert(precedes(0, 5), "Test 15 failed");
assert(precedes(51, 0), "Test 16 failed");
// Test 17 fails (rank: 13, rank: 1. 1-13)
assert(precedes(50, 2), "Test 17 failed");
assert(sameColor(0, 1), "Test 18 failed");
assert(!sameColor(1, 2), "Test 19 failed");
assert(nextInSuit(0) === 4, "Test 20 failed");
assert(nextInSuit(51) === 3, "Test 21 failed");
assert(nextInSuit(48) === 0, "Test 22 failed");
assert(prevInSuit(0) === 48, "Test 23 failed");
assert(prevInSuit(3) === 51, "Test 24 failed");
assert(prevInSuit(5) === 1, "Test 25 failed");

assert(!rank(52),"Test 26 failed");
assert(!rank("0"),"Test 27 failed");
assert(!rank(-1),"Test 28 failed");
assert(!suit(52),"Test 29 failed");
assert(!suit(false),"Test 30 failed");
assert(!suit(true),"Test 31 failed");
assert(isNaN(cardID(0,1)),"Test 32 failed");
assert(isNaN(cardID("1",1)),"Test 33 failed");
assert(isNaN(cardID(1,5)),"Test 34 failed");
assert(isNaN(cardID(14,1)),"Test 35 failed");
assert((typeof color('apple'))!='string',"Test 36 failed");
assert((typeof name(false))!='string',"Test 37 failed");
assert((typeof precedes(51,52))!='boolean',"Test 38 failed");
assert((typeof precedes(-1,0)),"Test 39 failed");
assert((typeof sameColor("0","1"))!='boolean',"Test 40 failed");
assert(isNaN(nextInSuit(52)),"Test 41 failed");
assert(isNaN(prevInSuit(52)),"Test 42 failed");