function generateReadMe(answers){
    // use the data from the inquirer answers inside of the template
   return `
            # README.md_Generator
            This Readme was developed with Node.js haves users input which was then used to generated the README template.
             ${answers.title}
             ${answers.description}

            ## Table of Content:
             *[Installation](#installation)
             *[Usage](#usage)
             *[Licence](#licence)
             *[Test](#test)
             *[Test](#test)


            ##installation:
             ${answers.installation}
             

            ##usage:
             ${answers.usage}
             

            ##usage:
             ${answers.usage}
             

            ##licence:
             ${answers.licence}
             

            ##test:
             ${answers.test}
             

            ##Contributors:
             ${answers.contributing}


            ##GitHub Name:
             ${answers.gitHubName}
                          
             
            ##Email Address:
             ${answers.emailAddress}
             
            
            Copyright 2021 &copy;
 `
};

module.exports = generateReadMe;