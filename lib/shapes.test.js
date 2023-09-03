const {circle, square, triangle} = require("../lib/shapes.js");
const { test } = require("node:test");

describe("circle test", ()=> {
    test("test for a circle with green background", () => {
        const shape = new circle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green"></circle/>');
   
    });
});

describe("square test", ()=> {
    test("test for a square with blue background", () => {
        const shape = new square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="50" y="20"  width="200" height="200" fill="blue"></rect>');
   
    });
});

describe("triangle test", ()=> {
    test("test for a triangle with purple background", () => {
        const shape = new triangle();
        shape.setColor("purple");
        expect(shape.render()).toEqual('<polygon points="100, 20 225, 225 0, 225" fill="purple"/>');
   
    });
});