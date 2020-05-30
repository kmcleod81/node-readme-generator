function generateMarkdown(data) {
  return `
# ${data.title}
# ${data.desc}
# ${data.toc}


`;
}

module.exports = generateMarkdown;
