function generateReadMe(answers){
    // use the data from the inquirer answers inside of the template
   return 
           ` # README.md Generator
            
             ${answers.title}
             ${answers.description}

            ## Table of Content
             ${answers.tableOfContents}


            ### installation:
             ${answers.installation}
             

            ### usage:
             ${answers.usage}
             

            ### licence:
             ${answers.license}
             

            ### test:
             ${answers.test}
             

            ### Contributors:
             ${answers.contributing}


            ### GitHub Name:
             ${answers.gitHubName}
                          
             
            ### Email Address:
             ${answers.emailAddress}
             
            
            Copyright 2021 &copy;
 `;
}

module.exports = generateReadMe;