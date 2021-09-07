function generateReadMe(answers){

  //  let name = "Ben";
  //  console.log("some data" + name);
  //  console.log(`my name is ${name}`)
    // use the data from the inquirer answers inside of the template
   return `# README.md Generator
           
${answers.title}
${answers.description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#test)
- [question](#questions)



## Installation:
${answers.installation}
             

### Usage:
${answers.usage}
             

## Licence:
${answers.license}
             

## Test:
${answers.test}


## Contributors:
${answers.contributing}


## Github Name:
${answers.gitHubName}
            

## Email Address:
${answers.emailAddress}

## Questions
If you have any questions about the repo, open an issue or contact me directly at " ${answers.emailAddress}". You can find details of  my work and this project at
 [${answers.gitHubName}](https://github.com/${answers.gitHubName}/).
 https://github.com/${answers.gitHubName}/${answers.title}


Copyright 2021 &copy;
`;
}

module.exports = generateReadMe;