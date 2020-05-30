//This is going to an array of questions onthe questions.js file:
const questions = require('./questions');



// function writeToFile(fileName, data) {
// where do I want the file to be placed? desktop? local directory? do I need to check?
// create a file with name fileName
// write to file fileName the data 
// }

const fs = require('fs');

fs.writeFile('new.md', process.argv[2], (err) => {
    if (err) {
        throw err;
    }
    // console.log('callback file has been saved');
});

function init() {
    // initialize stuff that I need here

}

init();



