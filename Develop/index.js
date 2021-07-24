// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const readmeTamplate = require('../src/readmeTamplate');

// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: 'input',
        name: 'github',
        message: `Welcome to README generator! Let's start! What is your GitHub username?`,
        validate: githubInput => {
            if (githubInput){
                return true;
            }else{
                console.log(`Please, enter your GitHub username!`);
                return false
            }
        }
    }, 

    {
        type: 'input',
        name: 'email',
        message: `What is your email?`,
        validate: emailInput => {
            if (emailInput){
                return true;
            }else{
                console.log(`Please, enter your email!`);
                return false
            }
        }
    },
    
    {
        type: 'input',
        name: 'title',
        message: `What is the title of your project?`,
        validate: titleInput => {
            if (titleInput){
                return true;
            }else{
                console.log(`Please, enter project title!`);
                return false
            }
        }
    }, 

    {
        type: 'input',
        name: 'discription',
        message: `Provide your project discription:`,
        validate: discriptionInput => {
            if (discriptionInput){
                return true;
            }else{
                console.log(`It is good to have some description of your project in README file!`);
                return false
            }
        }
    }, 

    {
        type: 'input',
        name: 'installation',
        message: `Provide instruction for installation of your project:`,
        validate: installationInput => {
            if (installationInput){
                return true;
            }else{
                console.log(`It is good to have some installation instruction of your project in README file to ensure that user has everything he/she needs!`);
                return false
            }
        }
    }, 

    {
        type: 'input',
        name: 'usage',
        message: `Provide project usage instrunctions:`,
        validate: usageInput => {
            if (usageInput){
                return true;
            }else{
                console.log(`Please, provide usege instructions!`);
                return false
            }
        }
    }, 

    {
        type: 'input',
        name: 'contributing',
        message: `How can others to contribute to your project?`,
        validate: contributionInput => {
            if (contributionInput){
                return true;
            }else{
                console.log(`Please, provide instructions how to contribute to yur project!`);
                return false
            }
        }
    }, 

    {
        type: 'input',
        name: 'test',
        message: `Which kind of test do you have fpr yor apllication?`,
        validate: testInput => {
            if (testInput){
                return true;
            }else{
                console.log(`Please, provide nformation about tests and how to use them!`);
                return false
            }
        }
    }, 

    {
        type: 'confirm',
        name: 'confirmLicenses',
        message: 'Would you like to include a license?',
        default: false
    },

    {
        type: 'list',
        name: 'licenses',
        message: 'What license would you like to include?',
        choices: ['MIT', 'GPL', 'CC--0'],
        when: ({ confirmLicenses }) => {
            if (confirmLicenses) {
                return true;
            } else {
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file

 
function writeToFile(fileName, data) {
//Steps
// take user's input and pass it to readmeTamplate()
const userData = readmeTamplate(data);
// readmeTamplate comes back as String
// need to save sting in a file
fs.writeFile( userData, (error) =>{
    if (error){
        console.log(error)
    }
} )
};

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
    writeToFile("readME.md", answers )
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();
