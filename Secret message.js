let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// use pop to remove last string
secretMessage.pop();
// show working
console.log(secretMessage.length);
// add words
secretMessage.push('something', 'finish');
// Change the word easily
const indexOfEasily = secretMessage.indexOf('easily');
secretMessage[indexOfEasily] = 'right';

// remove the first string of the array
secretMessage.shift();
// add the string Programming to the beggining of the array
secretMessage.unshift('Programming');
// remove set of strings 
secretMessage.splice(6, 5, 'know');
// print as a sentence 
console.log(secretMessage.join(' '));