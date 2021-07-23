// create the README file
const generateReadme = data => {
    return 
    `# ${data.title}

    ## Table of Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Licenses](#licenses)
    
    ## Description
    ${data.description}
    
    ## Installation
    ${data.installation}
    
    ## Usage
    ${data.usage}
    
    ## Contributing
    ${data.contributing}
    
    ## Tests
    ${data.tests}

    ## License
    This project is covered under the ${data.licenses}

    ##Author information
    GitHub: https://github.com/${data.username}  
    Email: ${data.email}

  `
};

module.exports = readmeTamplate;
