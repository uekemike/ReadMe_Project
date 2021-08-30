const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./generateTemplate');





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
            name: "licence",
            message: "What licence do you need",
            choices: ["Apache", "MIT","Microsoft Public License", "PostgreSQL License","None"]
        },

        {
            type: "input",
            name: "test",
            message: "How can this be tested "
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

        .then((answers) => {
        // Use user feedback for... 
        console.log(answers);
        // take the answers and write into a file
        // use fs writefile
       fs.writeFileSync("README.md", generateTemplate(answers))// name of file, 

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
function generateTemplate(data){
    // use the data from the inquirer answers inside of the template
   return `# ${data.title}
             ${data.description}
             ## Table of Content:
             *[Installation](#installation)
             *[Usage](#usage)
             *[Licence](#licence)
             *[Test](#test)
             *[Test](#test)
             ${data.installation}
             ##installation:
             ${data.usage}
             ##usage:
             ${data.licence}
             ##licence:
             ${data.test}
             ##test:
             ${data.gitHubName}
             ##GitHub Name:
             ${data.emailAddress}
             ##Email Address:
 `
};

//module.exports = generateTemplate;

function writeToFile(answerFile, actualAnswers ){
    fs.writeFile(answerFile, actualAnswers )
}

// .then((answers) => {
//     const htmlPageContent = generateHTML(answers);

//     fs.writeFile('README.md', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
//   });

// }

init();