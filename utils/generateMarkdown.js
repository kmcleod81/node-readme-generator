function generateMarkdown(data) {
  return `
${data.badges}

# ${data.title}

## Table of contents:
* [Description](#Description)
* [How to install](#How to install)
* [Usage](#Usage)
* [License](#License)
* [Contributors](#Ccontributors)
* [Tests](#Tests)
* [Email](#Email)
* [Profile Picture](#Profile Picture)
* [Profile Picture](#Profile Picture)

## Description
${data.desc}

## How to install
${data.howToInstall}

## Usage
${data.usage}

## License
${data.license}

## Contributor
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



