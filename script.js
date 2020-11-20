// Creates a Random number
function createRandomNumber(num) {
    return Math.floor(Math.random() * num)
}; 

// Stores messages that will randomly generate in the program. 
const messageData = {
    verb: ['fart', 'whistle', 'kick', 'sleep', 'wash', 'drink'],
    noun: ['bear', 'mirror', 'toe', 'tea cup', 'flower', 'hat'],
    ingVerb: ['running', 'spitting', 'clucking', 'burping', 'spooning', 'cooking'],
    number: ['1', '54,377', '12', 'three million', '0.55', '36'],
    secondNoun: ['tooth', 'cat', 'shirt', 'chair', 'stick', 'tomato']
};

// Stores final message result to be printed.
let madLibsMessage = [];

// Iterate over the object.
for(let word in messageData) {
    let randomIndex = createRandomNumber(messageData[word].length);

    // Take the object's properties to create a message and add it to the madLibsMessage array.
    switch(word) {
        case 'verb':
            madLibsMessage.push(`They say that to properly ${messageData[word][randomIndex]} a `)
            break;
        case 'noun':
            madLibsMessage.push(`${messageData[word][randomIndex]} you must first `)
            break;
        case 'ingVerb':
            madLibsMessage.push(`begin by ${messageData[word][randomIndex]} it. `)
            break;
        case 'number':
            madLibsMessage.push(`Well, I must say that I tried this ${messageData[word][randomIndex]} time(s). `)
            break;
        case 'secondNoun':
            madLibsMessage.push(`All I got was a ${messageData[word][randomIndex]}.`)
            break;
        default:
            madLibsMessage.push('Please provide more words to complete the MadLib.')
    }
        
};

// Format the MadLibs message
function formatMadLibs(madLibs) {
    const compiled = madLibsMessage.join('');
    console.log(compiled);
};

// Print final result
formatMadLibs(madLibsMessage);