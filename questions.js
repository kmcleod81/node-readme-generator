

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
        type: 'input',
        name: 'contributors',
        message: 'Who is the contributor(s)?',
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
        message: 'Do you want a profile picture?',
        choices: [
            {
                name: 'Yes',
                value: '### Profile Picture\n![Funny Avatar](https://avatars2.githubusercontent.com/u/7970947?v=3&s=300)',
            },
            {
                name: 'No',
                value: '',
            }
        ]
    },
]
module.exports = questions;

