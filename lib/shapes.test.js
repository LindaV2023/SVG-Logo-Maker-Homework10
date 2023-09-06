const {Circle, Square, Triangle} = require("../lib/shapes.js");
//import {circle, square, triangle} from '../lib/shapes.js';
//const { test } = require("node:test");

describe("Circle", ()=> {
    test("test for a circle with green background", () => {
        const circle = new Circle();
        const color = ("green")
        const expected = '<circle cx="150" cy="100" r="80">'
        expect(circle.render()).toBe(expected);;
   
    });
});

describe("Square", ()=> {
    test("test for a square with blue background", () => {
        const square = new Square();
       // square.setColor("blue");
        expect(square.render()).toEqual('<rect x="50" y="20"  width="200" height="200" fill="blue"></rect>');
   
    });
});

describe("Triangle", ()=> {
    test("test for a triangle with purple background", () => {
        const triangle = new Triangle();
        triangle.setColor("purple");
        expect(shape.render()).toEqual('<polygon points="100, 20 225, 225 0, 225"/>');
   
    });
});