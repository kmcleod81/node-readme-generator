function generateMarkdown(data) {
  return `
${data.badges.value}

# ${data.title}

## Table of contents
* [${data.toc}](#${data.toc})

## Description
${data.desc}

## How to install
${data.howToInstall}

## Usage
${data.usage}


## Author
* **${data.contributors}** - [${data.username}](https://github.com/${data.username})

### Email
${data.email}

### Profile Picture
${data.pic}

## Link to Page
* https://${data.username}.github.io/portfolio/
`;
}

module.exports = generateMarkdown;
