const fs = require("fs")
const inquirer = require("inquirer")
const chalk = require("chalk")

const questions = () =>
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your project name?",
                name: "projName",
            },
            {
                type: "input",
                message: "Please type a description of your project.",
                name: "projDescription",
            },
            {
                type: "input",
                message: "Please list any installation instructions",
                name: "installation",
            },
            {
                type: "input",
                message: "Please list how you use your project",
                name: "usage",
            },
            {
                type: "input",
                message: "How can people contribute to your project?",
                name: "contributing",
            },
        ])

const mdTemplate = ({projName, projDescription, installation, usage, contributing}) => {
    return `# ${projName}

    ## Description

    ${projDescription}
    
    ## Installation
    
    ${installation}
    
    ## Usage
    
    ${usage}
    
    ## Contributing

    ${contributing}
    
    ## License`
}

questions()
// regular expression on .replace
.then((answers) => fs.writeFile(`${answers.projName.toLowerCase().replace(/ /g, "_")}.md`, mdTemplate(answers), err =>
    {
        if (err) throw err;
        console.log('File Saved');
    }))
