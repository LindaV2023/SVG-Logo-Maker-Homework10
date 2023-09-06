# SVG-Logo-Maker-Homework10
Make a command-line application to create a logo upon demand.  Homework Challenge -Week 10 -

# Description
The purpose of designing this app is to give people a fast, easy and inexpensive way to create a 3 character logo for their use. The app works quite simply
by asking the user a series of questions that they can enter the answer for.  Once all the answers are entered, the app then generates the logo.
The user gets to choose from 3 shapes: a circle, square or triange.  They also have the option of background color and character color. Color can be chosen by entering
a color by name or by hexadecimal number. Once the choices are made, and 3 characters are picked the logo is generated.  The logo is in the form of a svg file, thus 
giving the user options on how they want to encorporate the logo into their work.

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Links](#links)
* [Licenses](#license)
* [Tests](#tests)
* [Credits](#credits)

## User Story
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Installation
In order to run this application you must have the following installed: VS code, node, Jest amd npm

## Links
link to video: 
https://drive.google.com/file/d/153_0WOF9cpA83bpsi-OYaDoQCWUFw4ev/view


Images from application:

![image](https://github.com/LindaV2023/SVG-Logo-Maker-Homework10/assets/127782990/6b2cbf1d-7894-41c3-8a58-49d99e2342de)
![image](https://github.com/LindaV2023/SVG-Logo-Maker-Homework10/assets/127782990/f0e0b03e-9a78-42c0-b3d8-00a1c20909a9)
![image](https://github.com/LindaV2023/SVG-Logo-Maker-Homework10/assets/127782990/c336014f-5c14-4f8b-b911-c24b7bb89d80)




## Usage
To use this application you must open the terminal. Then type in: node index.js.  You will then get 
a list of prompt that you need to answer.  These will provide the content of the logo.  Once the questions
are answered then you get a message that a logo.svg file has been created.  Right click on this ile and
then click Open in Live Server.  A picture of your logo will appear in a new window.

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
  [![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en) 
  [![Jest Badge](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=fff&style=flat)](https://jestjs.io/)

## Tests
Jest was installed and used as a testing program for this application.  Open the terminal and type in npm test

## Credit
I received help on this project from my tutor, Scott Everett.  In addition, I used files from the UconnBootcamp lessons and
information found on the internet.
