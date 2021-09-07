const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateReadMe = require('./generateReadMe');
const writeFileSync = util.promisify(fs.writeFile);



function init(){
   return inquirer
   .prompt([
        /* Pass your questions in here */
        {
            type: "input",
            name: "title",
            message: "What is the title of your project:"
        },

        {
            type: "input",
            name: "description",
            message: "What is the description of your project:"
        },
        {
            type: "checkbox",
            name: "tableOfContents",
            message: "Select the contents for your Table of Contents:",
            choices: [
                "Project Title",
                "Description",
                "Installation",
                "Usage",
                "License",
                "Contributing",
                "Tests",
              
            ]
        },
        {
            type: "input",
            name: "usage",
            message: "How do you use this project: "
        },

        {
            type: "input",
            name: "installation",
            message: "What is the installation instructions of your project(eg dependecies):"
        },

        {
            type: "list",
            name: "license",
            message: "What license do you need for your project:",
            choices: [
                        "Apache", 
                        "MIT",
                        "Microsoft Public License", 
                        "PostgreSQL License",
                        "None"
                    ]
        },

        {
            type: "input",
            name: "test",
            message: "Is there a Test included: "
        },
       
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },

        {
            type: "input",
            name: "gitHubName",
            message: "Enter github details:"
        },

        {
            type: "input",
            name: "emailAddress",
            message: "Enter email address:"
        },

    ])

        .then((answers) => {
        // Use user feedback for... 
        console.log(answers);
        // take the answers and write into a file
        const data = JSON.stringify(answers, null, 2);
        fs.writeFileSync("README.md", generateReadMe(answers))// name of file, 
        return answers;
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


init();