// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }

  if (license === "CC BY 4.0") {
    return "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)";
  }

  if (license === "APACHE 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }

  if (license === "N/A") {
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT Licensing](https://opensource.org/licenses/MIT)`;
  }
  
  if (license === "CC BY 4.0") {
    return `[Creative Commons by 4.0 Licensing](https://creativecommons.org/licenses/by/4.0/)`;
  }

  if (license === "APACHE 2.0") {
    return `[Apache 2.0 Licensing](https://opensource.org/licenses/Apache-2.0)`;
  }
  
  if (license === "N/A") {
    return "";
  }
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
