//required
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// inquirer prompts/questions
const questions = () => {
  return inquirer.prompt([
      // Projects information
      {
          type: "input",
          name: "title",
          message: "What is the your projects title?",
          validate: projectTitle => {
              if (projectTitle) {
                  return true;
              } else {
                  console.log('Please enter your project title!');
                  return false;
              }
          }
      },
      // Project description
      {
          type: "input",
          name: "description",
          message: "Please briefly describe your project.",

      },
      // Project installation guide
      {
          type: "input",
          name: "install",
          message: "Please briefly describe the installation processs of your project",
      },
      // Project use giude
      {
          type: "input",
          name: "usage",
          message: "How would a user use your project?",
      },
      // Project liscensing
      {
          type: "checkbox",
          name: "license",
          message: "What is the proper liscensing of your project?",
          choices: ["ISC", "MIT", "Mozilla", "Open"],
          validate: function (answer) {
              if (answer.length < 1) {
                return console.log("You must enter the license of your project.");
              }
              return true;
            },
      },
      // Project badge 
      {
          type: "checkbox",
          name: "color",
          message: "Chose the color for your licensing",
          choices: ["red", "blue", "yellow"],
          validate: function (answer) {
              if (answer.length < 1) {
                return console.log("You must choose a button color.");
              }
              return true;
            },
      },
      // Project credits section
      {
          type: "input",
          name: "credits",
          message: "Please enter any credits for your project"
      },
      // Project contribution
      {
          type: "input",
          name: "contributing",
          message: "Does your project have any other contributors?"
      },
      // any project testing
      {
          type: "input",
          name: "tests",
          message: "Please list any testing options for this project, if any",
      },
      // Questions section

      // Any questions about the project
      {
          type: "input",
          name: "questions",
          message: "Where should any users reach out for questions",
          validate: emailInput => {
              if (emailInput) {
                  return true;
              } else {
                  console.log('Enter your email');
                  return false;
              }
          }
      },
      // github username
      {
          type: "input",
          name: "username",
          message: "Enter your Github username?",
          validate: function (answer) {
              if (answer.length < 1) {
                  return console.log("You must enter your github username.");
              }
              return true;
          },
      },
      // github link
      {
          type: 'input',
          name: 'link',
          message: 'Enter the GitHub link',
          validate: linkInput => {
              if (linkInput) {
                  return true;
              } else {
                  console.log('You must to enter a repo GitHub link!');
                  return false;
              }
          }
      }
  ]).then(answers => writeToFile('./README.md', generateMarkdown(answers))) ;
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fileName = 'README.md';
  fs.writeFile(fileName, data, (err) => {

      //error handling
      if (err) {
          return console.log(err);
      }
      // on success
      console.log("Your README is ready : )");
  });
};

questions();