//function to generate markdown using inquirer questions for the information
//1. title
//2. liscensing
//3. Description
//4. Installation
//5. Usage
//6. Contributors
//7. Testing
//8. if questions

function generateMarkdown(answers) {
  return `
  # ${answers.title}
  
  [![License: ${answers.license}](https://img.shields.io/badge/license-${answers.license}-${answers.color}.svg)](http://opensource.org/licenses/${answers.license})
 
  ## Description
  ${answers.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${answers.install}
  ## Usage
  ${answers.usage}
  ## Credits
  ${answers.contributing}
  ## Tests
  ${answers.tests}
  ## Questions
  If you have any questions, please email me at ${answers.questions}
  
  Find me on GitHub: [${answers.username}](https://github.com/${answers.username})
  ## License
  Click this link for more information regarding [${answers.license}](http://opensource.org/licenses/${answers.license}).
  ## Contributing
  ${answers.contributing} 
  `;

}

module.exports = generateMarkdown;
