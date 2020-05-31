

// The user will be prompted for their GitHub username and other information pertaining to the project the README is for:

//This is going to an array of questions:
const questions = [
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
        choices: [
            {
                name: 'Funny 1',
                value: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
            },
            {
                name: 'Funny 2',
                value: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
            }
        ]


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
            {
                name: 'Awesome Badges',
                value: '[![Awesome Badges](https://img.shields.io/badge/badges-awesome-green.svg)](https://github.com/Naereen/badges)',
            },
            {
                name: 'Custom Badge',
                value: '[![Custom badge](https://img.shields.io/badge/made-U+1F604-red.svg)](https://shields.io/)',
            }
        ]
    },
]
module.exports = questions;

