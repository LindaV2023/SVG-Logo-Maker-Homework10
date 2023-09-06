const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const fileName = "./examples/logo.svg";
const SVG = require('./lib/svg');
const {Circle, Square, Triangle} = require ("./lib/shapes");

function init(){
    inquirer.prompt(questions) 
    .then(function(userAnswers){
     let shape;
     switch (userAnswers.shape){
        case "Circle": 
            shape = new Circle;
            break;
        
        case "Square":
            shape = new Square;
            break;

        case "Triangle":
            shape = new Triangle;
            break;
     }

     shape.setColor(userAnswers.shapeColor)

     let svg = new SVG
     svg.setShape(shape.render())

     svg.setText(userAnswers.text)
     svg.setTextColor(userAnswers.textColor)

   writeToFile(fileName, svg.render())
    }

)};
;
function writeToFile(fileName, data) {
fs.writeFile(fileName, data,(error, data) =>{
    error ? console.log (error) : console.log ("svg file created")
} )
}

init()