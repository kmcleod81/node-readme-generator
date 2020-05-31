//This is going to an array of questions onthe questions.js file:
const questions = require('./questions');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// Create a function (writeFile) that creates a new file and writes the users input data to it:

function init() {
    // initialize stuff that I need here
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            fs.writeFile('goodREADME.md', generateMarkdown(answers), (err) => {
                if (err) throw err;
                console.log('Your file has been saved as: goodREADME.md');
            });
        });
}
init();

