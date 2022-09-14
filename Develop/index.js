// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?'
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was the motivation of the project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What was the reason for the making of the project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What are the project license used?',
        choices: ['Apache', 'Boost', 'BSD 3-Clause']
    },
    {
        type: 'input',
        name: 'description',
        message: 'What type of technology did you use?'
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!!
            console.log(answers)
            console.log(answers.description)
            writeToFile('README.md',generateMarkdown(answers) )
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        })
}


// Function call to initialize app
init();
