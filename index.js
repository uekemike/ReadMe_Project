const inquirer = require('inquirer');
const fs = require('fs');


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
            name: "installation",
            message: "What is the installation instructions of your project"
        },

        {
            type: "list",
            name: "licence",
            message: "What licence do you need",
            choices: ["Apache", "MIT","Microsoft Public License", "PostgreSQL License","None"]
        }
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        console.log(answers);
        // take the answers and write into a file
        // use fs writefile
        writeToFile("ReadMe.md", generateTemplate(answers))// name of file, 

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

}

function writeToFile(answerFile, actualAnswers ){
    fs.writeFile(answerFile, actualAnswers )


}


init();

