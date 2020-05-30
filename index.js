//This is going to an array of questions onthe questions.js file:
const questions = require('./questions');
const inquirer = require('inquirer');
const axios = require('axios');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// function writeToFile(fileName, data) {
// where do I want the file to be placed? desktop? local directory? do I need to check?
// create a file with name fileName
// write to file fileName the data 
// }

function init() {
    // initialize stuff that I need here
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            fs.writeFile('new.md', generateMarkdown(answers), (err) => {
                if (err) {
                    throw err;
                }
                // console.log('callback file has been saved');
            });
        });
}

init();



