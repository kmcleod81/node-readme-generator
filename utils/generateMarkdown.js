function generateMarkdown(data) {
  return `
${data.badges}

# ${data.title}

## Table of Contents:
* [Description](#Description)
* [How to Install](#How-to-Install)
* [Usage](#Usage)
* [License](#License)
* [Contributors](#Contributors)
* [Tests](#Tests)
* [Email](#Email)
* [Profile Picture](#Profile-Picture)
* [Link to Page](#Link-to-Page)


## Description
${data.desc}

## How to Install
${data.howToInstall}

## Usage
${data.usage}

## License
${data.license}

## Contributors
* **${data.contributors}** - [${data.username}](https://github.com/${data.username})

### Tests
${data.tests}

### Email
${data.email}

### Profile Picture
${data.pic}

## Link to Page
* https://github.com/${data.username}

`;
}

module.exports = generateMarkdown;



