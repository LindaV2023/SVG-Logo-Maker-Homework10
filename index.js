const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const fileName = "./examples/logo.svg";
//const setShape = require('./lib/setShape.js');
const setShape = require('./lib/shapes.js');
const {circle, square, triangle} = require ("./lib/shapes");

function init(){
    inquirer.prompt(questions) 
    .then(function(userFill){
        console.log(userFill);
        writeToFile("logo.svg")
    }

)};
;
function writeToFile(fileName, answers) {
    let svgString="";
    svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
//Adds text tag to front of shape
    svgString =+"<g>";
//Inserts user input   
    svgString += `${answers.myShape}`;
}