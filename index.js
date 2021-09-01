const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateReadMe = require('./generateReadMe');
//const apiCall = require('./api');
const writeFileSync = util.promisify(fs.writeFile);





function init(){
    inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: "input",
            name: "title",
            message: "What is the title of your project"
        },

        {
            type: "input",
            name: "description",
            message: "What is the description of your project"
        },
     
        {
            type: "input",
            name: "usage",
            message: "How do you use this project "
        },

        {
            type: "input",
            name: "installation",
            message: "What is the installation instructions of your project(eg dependecies)"
        },

        {
            type: "list",
            name: "license",
            message: "What license do you need for ypur peoject",
            choices: ["Apache", "MIT","Microsoft Public License", "PostgreSQL License","None"]
        },

        {
            type: "input",
            name: "test",
            message: "Is there a Test included "
        },
       
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },

        {
            type: "input",
            name: "gitHubName",
            message: "Enter github details"
        },

        {
            type: "input",
            name: "emailAddress",
            message: "Enter email address"
        },

    ])

        .then((questions) => {
        // Use user feedback for... 
        console.log(questions);
        // take the answers and write into a file
       const data = JSON.stringify(questions, null, 2);
       fs.writeFileSync("README.md", generateReadMe(questions))// name of file, 

        // add code here=-
    })
    .catch((error) => {
        if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else went wrong
        }
    });
}


//module.exports = generateTemplate;

// function writeToFile(answerFile, actualAnswers ){
//     fs.writeFile(README.md, actualAnswers )
// }

// .then((answers) => {
//     const htmlPageContent = generateHTML(answers);

//     fs.writeFile('README.md', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
//   });

// }

init();