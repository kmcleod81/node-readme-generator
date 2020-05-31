

// The user will be prompted for their GitHub username and other information pertaining to the project the README is for:

//This is going to an array of questions:
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Github email?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'desc',
        message: 'What is your project description?',
    },
    {
        type: 'input',
        name: 'howToInstall',
        message: 'How do you install the application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Why would you use this application?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to the project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license?',
        choices: [
            {
                name: 'ISC',
                value: 'isc',
            },
            {
                name: 'MIT',
                value: 'mit',
            },
        ]
    },
    {
        type: 'list',
        name: 'color',
        message: 'Choose a badge color:',
        choices: [
            {
                name: 'Red',
                value: 'red',
            },
            {
                name: 'Green',
                value: 'green',
            }
        ]
    },
    {
        type: 'list',
        name: 'tests',
        message: 'Did you run any tests?',
        choices: [
            {
                name: 'Yes',
                value: 'Testing was done on this application',
            },
            {
                name: 'No',
                value: 'No tests were done on this application',
            }
        ]
    },
    {
        type: 'list',
        name: 'pic',
        message: 'Choose a profile image:',
        choices: [
            {
                name: 'Male',
                value: '![Male Avatar](https://avatars3.githubusercontent.com/u/2838987?v=300&s=4)',
            },
            {
                name: 'Female',
                value: '![Female Avatar](https://avatars0.githubusercontent.com/u/586560?v=300&s=4)',
            },
            {
                name: 'Other',
                value: '![Other Avatar](https://avatars1.githubusercontent.com/u/1230389?s=300&v=4)',
            }
        ]
    },
]
module.exports = questions;

