const inquirer = require('inquirer');
const fs = require('fs');


const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Project Title: ${answers.title}</h1>
    <p class="lead">Project Description: ${answers.description}.</p>
    <h3>User Guide <span class="badge badge-secondary"></span></h3>
    <p></p>

    <ul class="list-group">
      <li class="list-group-item">Installation Instruction: ${answers.installation}</li>
      <li class="list-group-item">Required License: ${answers.licence}</li>
      <li class="list-group-item">Usage: ${answers.usage}</li>
      <li class="list-group-item">Test:  ${answers.test}</li>
    </ul>
    <h3>Table of Content <span class="badge badge-secondary"></span></h3>
    <ul class="list-group">
      <li class="list-group-item">Table of Content:  ${answers.tableOfContent}</li>

   </ul>
    <h3>Questions <span class="badge badge-secondary"></span></h3>
    <ul class="list-group">
      <li class="list-group-item">GitHub Username:  ${answers.gitHubName}</li>
      <li class="list-group-item">Email Address: ${answers.emailAddress}</li>
    </ul>
  </div>
</div>
</body>
</html>`;


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
            name: "tableOfContent",
            message: "Enter table of content "
        },

        {
            type: "input",
            name: "usage",
            message: "How do you use this project "
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
        },

        {
            type: "input",
            name: "test",
            message: "How can this be tested "
        },

        // {
        //     type: "input",
        //     name: "contribution",
        //     message: "what is it contibuting "
        // },

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

    //     .then((answers) => {
//         // Use user feedback for... 
//         console.log(answers);
//         // take the answers and write into a file
//         // use fs writefile
//        writeToFile("ReadMe.md", generateTemplate(answers))// name of file, 

//         // add code here=-
//     })
//     .catch((error) => {
//         if (error.isTtyError) {
//         // Prompt couldn't be rendered in the current environment
//         } else {
//         // Something else went wrong
//         }
//     });
// }
// function generateTemplate(data){
//     // use the data from the inquirer answers inside of the template

// }

// function writeToFile(answerFile, actualAnswers ){
//     fs.writeFile(answerFile, actualAnswers )
// }

.then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });

}

init();