// Creates a Random number
function createRandomNumber(num) {
    return Math.floor(Math.random() * num)
}; 

// Stores messages that will randomly generate in the program. 
const messageData = {
    verb: ['fart', 'whistle', 'kick', 'sleep', 'wash', 'drink'],
    noun: ['bear', 'mirror', 'toe', 'tea cup', 'flower', 'hat'],
    ingVerb: ['running', 'spitting', 'clucking', 'burping', 'spooning', 'cooking'],
    number: ['1', '54,377', '12', 'three million', '0.55', '36']
};

// Stores final message result to be printed.
let madLibsMessage = [];
