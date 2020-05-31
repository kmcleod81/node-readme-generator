// This file generates the actual markdown file. Using the correct markdown formatting to populate the data
function generateMarkdown(data) {
  return `
# ${data.title}

## Table of Contents:
* [Description](#Description)
* [How to Install](#How-to-Install)
* [Usage](#Usage)
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

[![Custom badge](https://img.shields.io/badge/License-${data.license}-${data.color}.svg)](https://shields.io/)

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



