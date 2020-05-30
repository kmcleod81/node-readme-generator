// dont forget: npm init

// The user will be prompted for their GitHub username and other information pertaining to the project the README is for:

const inquirer = require('inquirer');
//This is going to an array of questions:

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'desc',
        message: 'What is your description?',
    },
    {
        type: 'input',
        name: 'toc',
        message: 'What is your table of contents?',
    },
    {
        type: 'input',
        name: 'howToInstall',
        message: 'How to install the application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your usage?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What is your license?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are your tests?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'pic',
        message: 'What is your Github profile picture?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Github email?',
    },
    {
        type: 'list',
        name: 'badges',
        message: 'Choose a badge:',
        choices: [
            'Awesome Badges',
            //[![Awesome Badges](https://img.shields.io/badge/badges-awesome-green.svg)](https://github.com/Naereen/badges)

            'Custom Badge',
            //[![Awesome Badges](https://img.shields.io/badge/badges-awesome-green.svg)](https://github.com/Naereen/badges)

        ]
    },
])
    .then((answers) => {
        console.log(answers);
    });



// function writeToFile(fileName, data) {
// where do I want the file to be placed? desktop? local directory? do I need to check?
// create a file with name fileName
// write to file fileName the data 
// }

var fs = require('fs');

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



