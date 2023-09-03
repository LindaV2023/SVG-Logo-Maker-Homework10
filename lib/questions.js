//const { default: inquirer } = require("inquirer");
const questions =[

//The content of the logo - choice of 3 alpha/numeric charaterrs
{
    name: "letters",
    type: "text",
    maxlength: "3",
    message: "Pick 3 characters to use in your logo",
},

 //The shape of the logo - choice of circle, square or triangle
 {
     name: "shape",
     type: "list",
     message: "Pick a logo shape",
     choices: ["Circle", "Square", "Triangle"],
},
 //The color of the logo - can be color word or a hexadecimal number
{
     name: "shapeColor",
     type: "input",
     message: "Pick a background color, either type in a color or the hexadecimal color number",
},
 //The color of the logo - can be color word or a hexadecimal number
 {
    name: "letterColor",
    type: "input",
    message: "Pick a color for the letters, either type in a color or the hexadecimal color number",
},
];

module.exports = {};
//module.exports = questions;
